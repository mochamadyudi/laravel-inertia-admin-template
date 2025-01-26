import React from 'react';
import {Table, Typography} from "antd";
import type {TableProps as RcTableProps} from "rc-table/lib/Table";
import {ColumnsType} from "antd/lib/table";

type DataSource = RcTableProps<{
  type: string | React.ReactNode;
  version: string;
  property: string;
  description: string;
  default: string;
}>['data']
interface TableApiProps {
  dataSource: DataSource;
  title: string;
}

const TableApi: React.FC<TableApiProps> = ({ dataSource, title }) => {
  const columns: ColumnsType<any> = [
    {
      dataIndex: 'property',
      title: 'Property'
    },
    {
      dataIndex: 'description',
      title: 'Description'
    },
    {
      dataIndex: 'type',
      title: 'Type'
    },
    {
      dataIndex: 'default',
      title: 'Default'
    },
    {
      dataIndex: 'version',
      title: 'Version'
    },
  ]
  return (
    <section id={title.replace(/ /g, '-')}>
      <Typography.Title level={4}>{title}</Typography.Title>
      <Table
        bordered
        dataSource={dataSource}
        columns={columns}
        pagination={false}
      />
    </section>
  )
};

export default TableApi;
