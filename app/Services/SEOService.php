<?php

namespace App\Services;

use App\Constants\Caches;
use App\Contracts\SEOInterface;
use App\Models\AppOptions;
use Illuminate\Support\Facades\Cache;

class SEOService implements SEOInterface
{

  private mixed $meta = [];
  private string $author = '';
  private string $icon = '';
  private string $siteName = '';
    /**
     * @var string
     */
    private string $title = '';
    /**
     * @var string
     */
    private string $description = '';
    /**
     * @var string
     */
    private string $keywords = '';
    /**
     * @var string
     */
    private string $canonical = '';
    /**
     * @var array{
     *  property: string | 'og:title' | 'og:type' | 'og:url' | 'og:image' | 'og:image:width' | 'og:image:height' | 'og:image:alt' | 'og:description' | 'og:site_name' | 'og:locale' | 'og:audio' | 'og:audio:type' | 'og:video' | 'og:video:type' | 'og:video:width' | 'og:video:height' | 'og:determiner',
     *  content: string
     *  }
     */
    private array $opengraph = [];
    /**
     * @var array
     */
    private array $twitter = [];

    public function __construct()
    {
        $this->title = config('themes.seo.title');
        $this->description = config('themes.seo.description');
        $this->keywords = config('themes.seo.keywords');
        $this->canonical = url()->current();
        $this->instance();
    }

    public function instance(): void
    {
      $meta = $this->getMeta();

      $this->setTitle($meta['title']);
      $this->setDescription($meta['description']);
      $this->setKeywords(!empty($meta['keyword']) ? $meta['keyword'] : !empty($meta['keywords']) ?? '');
      $this->setAuthor($meta['author']);
      $this->setCanonical(url()->current());
      $this->setIcon($meta['icon']);

      $og = [
        'og:title',
        'og:description',
        'og:url',
        'og:type',
        'og:site_name',
        'og:locale',
        'og:image',
        'og:image:alt'
      ];
      $tw = [
        'twitter:card',
        'twitter:title',
        'twitter:description',
        'twitter:image',
        'twitter:image:alt',
      ];

      foreach ($og as $item) {
        if($item == 'og:url'){
          $ogFormatted[] = [
            'property' => $item,
            'content' => url()->current(),
          ];
        }else{
          $ogFormatted[] = [
            'property' => $item,
            'content' => !empty($meta[$item]) ? $meta[$item] : '',
          ];
        }
      }
      $this->setOpengraph($ogFormatted);

      foreach ($tw as $item) {
        $twFormatted[] = [
          'property' => $item,
          'content' => !empty($meta[$item]) ? $meta[$item] : '',
        ];
      }
      $this->setTwitter($twFormatted);
    }
    public function getTitle(): string
    {
        return $this->title;
    }

    /**
     * @param string $title
     * @return $this
     */
    public function setTitle(string $title): static
    {
        $this->title = $title;
        return $this;
    }

    public function getDescription(): string
    {
        return $this->description;
    }

    /**
     * @param string $description
     * @return $this
     */
    public function setDescription(string $description): static
    {
        $this->description = $description;
        return $this;
    }

    public function getKeywords(): string
    {
        return $this->keywords;
    }

    /**
     * @param string $keywords
     * @return $this
     */
    public function setKeywords(string $keywords): static
    {
        $this->keywords = $keywords;
        return $this;
    }

    public function getCanonical(): string
    {
        return $this->canonical;
    }

    /**
     * @param string $canonical
     * @return $this
     */
    public function setCanonical(string $canonical): static
    {
        $this->canonical = $canonical;
        return $this;
    }

    public function getOpengraph(): array
    {
        return $this->opengraph;
    }

    /**
     * @param array{
     * property: string | 'og:title' | 'og:type' | 'og:url' | 'og:image' | 'og:image:width' | 'og:image:height' | 'og:image:alt' | 'og:description' | 'og:site_name' | 'og:locale' | 'og:audio' | 'og:audio:type' | 'og:video' | 'og:video:type' | 'og:video:width' | 'og:video:height' | 'og:determiner',
     * content: string
     * } $opengraph
     * @return $this
     */
    public function setOpengraph(array $opengraph): static
    {
        $this->opengraph = $opengraph;
        return $this;
    }

    public function getTwitter(): array
    {
        return $this->twitter;
    }

    public function setTwitter(array $twitter): static
    {
        $this->twitter = $twitter;
        return $this;
    }

    public function setAuthor(string $author): static{
      $this->author = $author;
      return $this;
    }
    /**
     * @return array
     */
    public function go(): array
    {
        return [
            'icon' => $this->icon,
            'title' => $this->title,
            'description' => $this->description,
            'keywords' => $this->keywords,
            'canonical' => $this->canonical,
            'opengraph' => $this->opengraph,
            'author' => $this->author,
            'twitter' => $this->twitter
        ];
    }

    public function getSiteApp(){
      return config('app.name');
    }
    public function getSiteName(): string
    {
      $siteApp = $this->getSiteApp();
      return $siteApp;
    }
    public function withSiteName(string $pageName): string
    {
      return implode(' |  ',[$pageName, $this->getSiteName() ]);
    }


    public function getIcon(): string{
      return $this->icon;
    }
    public function setIcon(string $icon){
      $this->icon = $icon;
    }

    public function getMeta(){
      return config('themes.seo.meta');
    }
    public function useMeta(): array
    {
      $meta = $this->getMeta()->value;
      $this->setTitle($this->getTitle() ?? $meta['title']);
      $this->setDescription($this->getDescription() ? substr($this->getDescription(), 0, 150) . '...' : substr($meta['description'], 0 ,150). '...');
      $this->setKeywords(!empty($meta['keyword']) ? $meta['keyword'] : !empty($meta['keywords']) ?? '');
      $this->setAuthor($meta['author']);
      $this->setCanonical(url()->current());
//      $this->setIcon($meta['icon']);

      $og = [
        'og:title',
        'og:description',
        'og:url',
        'og:type',
        'og:site_name',
        'og:locale',
        'og:image',
        'og:image:alt'
      ];
      $tw = [
        'twitter:card',
        'twitter:title',
        'twitter:description',
        'twitter:image',
        'twitter:image:alt',
      ];

      foreach ($og as $item) {
        if($item == 'og:url'){
          $ogFormatted[] = [
            'property' => $item,
            'content' => url()->current(),
          ];
        }else{
          $ogFormatted[] = [
            'property' => $item,
            'content' => !empty($meta[$item]) ? $meta[$item] : '',
          ];
        }
      }
      $this->setOpengraph($ogFormatted);

      foreach ($tw as $item) {
        $twFormatted[] = [
          'property' => $item,
          'content' => !empty($meta[$item]) ? $meta[$item] : '',
        ];
      }
      $this->setTwitter($twFormatted);

      return $this->go();

    }

    public function fn(): static
    {
        return $this;
    }
}
