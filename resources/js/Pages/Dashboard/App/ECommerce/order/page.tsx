import React, {InputHTMLAttributes, useCallback, useState} from 'react';
import TheLayout from "@/Components/layouts/DefaultLayout/TheLayout";
import {Table, Card, Flex, Input, Select, Typography, Image, Badge, Tag} from "antd";

import type {TableProps} from "antd";

import {
  EyeOutlined,
  PlusOutlined,
  SearchOutlined
} from "@ant-design/icons";
import EllipsisDropdown from "@/Components/general/Dropdown/EllipsisDropdown";
import {debounce} from "lodash";

type TableRowSelection<T extends object = object> = TableProps<T>['rowSelection'];

const Page = (props: any) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(() => {
    return props?.collections?.data ?? []
  });
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<any> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const columns: TableProps['columns'] = [
    {
      dataIndex: 'order_id',
      title: "ID",
      render: (_: string) => ["#", _].join('')
    },
    {
      dataIndex: 'product',
      sorter: (a, b) => a.name.length - b?.name.length,
      title: "Product",
      width: "25%",
      render: (_: { thumbnail: string, name: string }) => {
        return (
          <div className="flex items-center gap-4">
            <Image
              src={_?.thumbnail}
              className={'rounded-lg w-[50px] h-[50px]'}/>
            <Typography className="font-semibold text-base">{_?.name}</Typography>
          </div>
        )
      }
    },
    {
      dataIndex: 'date',
      title: "Date",
    },
    {
      dataIndex: 'status',
      title: "Order Status",
      render: (_: string) => {
        let color;
        switch (_.toLowerCase()) {
          case "processing":
            color = 'cyan';
            break;
          case "ready":
            color = 'blue';
            break;
          case "shipped":
            color = 'purple';
            break;
          case "expired":
            color = 'red';
            break;
          default:
            color = 'default';
        }
        return <Tag color={color} className="rounded-lg px-4 py-1.5">{_}</Tag>
      }
    },
    {
      dataIndex: ['payment', 'status'],
      title: "Payment Status",
      render: (_: string) => {
        let color;
        switch (_.toLowerCase()) {
          case "paid":
            color = 'cyan';
            break;
          case "expired":
            color = 'red';
            break;
          case "pending":
            color = 'warning';
            break;
          default:
            color = 'default';
        }
        return <Badge dot text={_} color={color}/>
      }
    },
    {
      dataIndex: ['qty'],
      title: "Total",
      render: (_: number, val: any) => [val?.product?.currency, (_ * val?.product?.price).toFixed(2)].join(' ')
    },
    {
      key: 'action',
      render: (val) => {
        return <EllipsisDropdown
          menu={{
            items: [
              {
                label: "View Detail",
                key: 'detail',
                icon: <EyeOutlined/>,
                onClick: () => {
                },
              },
              {
                label: "Add to Remarks",
                key: 'edit',
                icon: <PlusOutlined/>,
                onClick: () => {
                },
              }
            ]
          }}/>
      }
    }
  ]

  const onChange: TableProps<any>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };


  const handleSearch = async (value: string) => {
    setLoading(true);
    setTimeout(() => {
      if (value.length > 0) {
        let filtered = props?.collections?.data.filter((item: any) => item.product.name.toLowerCase().includes(value)) ?? [];
        setData([...filtered])
      } else {
        setData(props.collections?.data ?? [])
      }
      setLoading(false);
    }, 1000); // misal delay fetch 1 detik
  };

  // Gunakan useCallback agar debounce tidak dibuat ulang di setiap render
  const debouncedSearch = useCallback(
    debounce((e: React.ChangeEvent<HTMLInputElement>) => {
      handleSearch(e.target.value);
    }, 500), // 500ms debounce
    []
  );

  return (
    <Card
      classNames={{
        body: "space-y-6"
      }}
    >
      <div className="flex items-center justify-between">
        <Flex gap={10}>
          <Input
            prefix={<SearchOutlined/>}
            placeholder="Search"
            onChange={debouncedSearch}
            allowClear
          />
          <Select
            className="min-w-[200px]"
            allowClear
            options={props?.collections?.category ?? []}
          />
        </Flex>
      </div>

      <Table
        loading={loading}
        rowKey={'id'}
        rowSelection={rowSelection}
        columns={columns}
        onChange={onChange}
        dataSource={data}
      />
    </Card>
  )
}

Page.layout = (children: React.ReactNode) => {
  return (
    <TheLayout type="dashboard" isFooter={false} children={children}/>
  )
};

export default Page;
