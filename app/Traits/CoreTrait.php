<?php

namespace App\Traits;

use Closure;
use Exception;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

trait CoreTrait
{

    public function _show(Model $model, $options, Closure $fn = null)
    {
        $query = $model::query();
        if (!empty($fn)) {
            $fn($query);
        }
        if (empty($options['key']) || empty($options['value'])) return null;
        $query->where($options['key'], '=', $options['value']);
        return $query->first();
    }


    public function isValidSerialized($value): bool
    {
        return @unserialize($value) !== false || $value === 'b:0;';
    }

    public function isValidJson($value): bool
    {
        json_decode($value);
        return json_last_error() === JSON_ERROR_NONE;
    }

    /**
     * @param Model $model
     * @param array $relation
     * @param Request $request
     * @param int $limit
     * @return LengthAwarePaginator
     */
    public function rowsWithPagination(
        Model   $model,
        array   $relation,
        Request $request,
        Closure $fn = null,
        int     $limit = 10): LengthAwarePaginator
    {
        $filters = $request->only([
            'search',
            'searchKey',
            'key',
            'value',
            'filters',
            'limit',
            'page'
        ]);
        $query = $model::query();

        if (count($relation) > 0) {
            for ($i = 0; $i < count($relation); $i++) {
                $item = $relation[$i];
                $query->with($item);
            }
        }

        if (!empty($filters['search']) && !empty($filters['searchKey'])) {
            $query->whereRaw('LOWER(' . $filters['searchKey'] . ') LIKE ?', [
                '%' . trim(strtolower($filters['search'])) . '%'
            ]);
        }

        if (!empty($filters['filters'])) {
            $_filters = $filters['filters'];

            if (is_array($_filters) && count($_filters) > 0) {
                foreach ($_filters as $filter) {
                    if ($filter['operator'] === 'between') {
                        $query->whereBetween($filter['key'], $filter['value']);
                    } else if ($filter['operator'] === 'like') {
                        $query->whereRaw('LOWER(' . $filter['key'] . ') LIKE ?', [
                            '%' . trim(strtolower($filter['value'])) . '%'
                        ]);
                    } else {
                        $query->where($filter['key'], $filter['operator'], $filter['value']);
                    }
                }
            }
        }

        if (!empty($filters['value']) && !empty($filters['key'])) {
            $key = $filters['key'];
            $query->where($key, '=', $filters['value']);
        }

        $max = !empty($filters['limit']) ? (int)$filters['limit'] : $limit;

        if (!empty($fn)) {
            $fn($query);
        }
        $data = $query->paginate($max);
        $data->appends($filters);
        return $data;
    }

    public function reformatRowsPagination(mixed $result): array
    {
        try {

            $data = $result->toArray();
            return [
                'pagination' => [
                    'page' => $data['current_page'],
                    'limit' => $data['per_page'],
                    'max_page' => $data['last_page'],
                    'total' => $data['total'],
                ],
                'data' => $data['data']
            ];
        } catch (Exception $e) {
            return [
                'pagination' => [
                    'limit' => 10,
                    'page' => 1,
                    'total' => 0,
                    'max_page' => 0
                ],
                'data' => []
            ];
        }
    }

    public function showUuid(Model $model, $uuid, callable $fn)
    {
        $query = $model::query();
        if (!empty($fn) && is_callable($fn)) {
            $fn($query);
        }
        return $query->where('uuid', '=', $uuid)->first();
    }

    public function _showUuid($query, $uuid)
    {
        return $query->where('uuid', '=', $uuid)->first();
    }


    public function _saveToDatabase(Model $model, array $dto, callable $fn)
    {
        $query = $model::query();
        $created = $query->create($dto);
        return $fn($created, $dto);
    }
}
