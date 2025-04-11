import React, {useState} from 'react';
import TheLayout from "@/Components/layouts/DefaultLayout/TheLayout";
import {Table, Card, Button, Flex, Input, Select, Avatar, Typography, Image, Badge} from "antd";

import type {TableProps} from "antd";

import {DeleteOutlined, EditOutlined, EyeOutlined, PlusCircleOutlined, SearchOutlined} from "@ant-design/icons";
import {SelectProps} from "rc-select/lib/Select";
import AvatarStatus from "@/Components/general/AvatarStatus";
import EllipsisDropdown from "@/Components/general/Dropdown/EllipsisDropdown";
import {Link, router} from "@inertiajs/react";


type TableRowSelection<T extends object = object> = TableProps<T>['rowSelection'];

const Page = (props: any) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<any> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const columns: TableProps['columns'] = [
    {
      dataIndex: 'id',
      title: "ID",
      width: 70,
    },
    {
      dataIndex: 'name',
      sorter: (a, b) => a.name.length - b?.name.length,
      title: "Product",
      width: "30%",
      render: (_: string, val: any) => {
        return (
          <div className="flex items-center gap-4">
            <Image
              src={val?.thumbnail}
              className={'rounded-lg w-[50px] h-[50px]'}/>
            <Typography className="font-semibold text-base">{_}</Typography>
          </div>
        )
      }
    },
    {
      dataIndex: "category",
      sorter: (a, b) => a.category.length - b?.category.length,
      title: "Category"
    },
    {
      dataIndex: "price",
      title: "Price",
      sorter: (a, b) => a.price - b?.price,
      sortDirections: ['descend', 'ascend'],
      render: (_, val: any) => [val?.currency, _].join(' ')
    },
    {
      dataIndex: "qty",
      title: "Stock",
      sorter: (a, b) => a.qty - b?.qty,
      sortDirections: ['descend', 'ascend'],
    },
    {
      key: 'status',
      title: "Status",
      render: (val) => {
        return <Badge
          status={val?.qty === 0 ? 'error' : val?.qty <= val?.qty_limit ? 'warning' : 'success'}
          text={val?.qty === 0 ? 'Out Stock' : val?.qty <= val?.qty_limit ? 'Limited Stock' : 'In Stock'}/>
      }
    },
    {
      key: 'action',
      render: (val) => {
        return <EllipsisDropdown
          menu={{
            items: [
              {
                label: "Detail",
                key: 'detail',
                icon: <EyeOutlined/>,
                onClick: ()=>{
                  router.visit(route('dashboard.ecommerce.show', { id: val?.id }))
                },
              },
              {
                label: "Edit",
                key: 'edit',
                icon: <EditOutlined/>,
                onClick: ()=>{
                  router.visit(route('dashboard.ecommerce.edit', { id: val?.id }))
                },
              },
              {
                key: 'divider',
                type: 'divider',
              },
              {
                danger: true,
                label: "Delete",
                key: 'delete',
                icon: <DeleteOutlined/>,
                onClick: ()=>{},
              },
            ]
          }}/>
      }
    }
  ]

  const onChange: TableProps<any>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

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
          />
          <Select
            className="min-w-[200px]"
            allowClear
            options={props?.collections?.category ?? []}
          />
        </Flex>
        <Link href={route('dashboard.ecommerce.create')}>
          <Button
            type="primary"
            icon={<PlusCircleOutlined/>}
          >Add Product</Button>
        </Link>
      </div>

      <Table
        rowKey={'id'}
        rowSelection={rowSelection}
        columns={columns}
        onChange={onChange}
        dataSource={props?.collections?.data ?? []}
      />
    </Card>
  )
}

Page.layout = (children: React.ReactNode) => {
  return (
    <TheLayout type="dashboard" hasContainer isFooter={false} children={children}/>
  )
};

export default Page;
