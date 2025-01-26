import React from 'react';
import TheContainer from "@/Components/general/TheContainer";
import {Table, Typography} from "antd";
import {ColumnsType} from "antd/lib/table";
import type {TableProps as RcTableProps} from "rc-table/lib/Table";

type DataSource = RcTableProps<{
  type: string;
  version: string;
  property: string;
  description: string;
  default: string;
}>['data']
const ApiPartial: React.FC = () => {
  const dataSourceText: DataSource = [
    {
      property: 'code',
      description: 'Code Style',
      type: 'boolean',
      default: 'false',
      version: '-'
    },
    {
      property: 'copyable',
      description: 'Whether to be copyable, customize it via setting an object',
      type: 'boolean | copyable',
      default: 'false',
      version: '-'
    },
    {
      property: 'delete',
      description: 'Deleted line style',
      type: 'boolean',
      default: 'false',
      version: '-'
    },
    {
      property: 'disabled',
      description: 'Disabled content',
      type: 'boolean',
      default: 'false',
      version: '-'
    },
    {
      property: 'editable',
      description: 'If editable. Can control edit state when is object',
      type: 'boolean | editable',
      default: 'false',
      version: '-'
    },
    {
      property: 'ellipsis',
      description: 'Display ellipsis when text overflows, can\'t configure expandable、rows and onExpand by using object. Diff with Typography.Paragraph, Text do not have 100% width style which means it will fix width on the first ellipsis. If you want to have responsive ellipsis, please set width manually',
      type: 'boolean | Omit<ellipsis, \'expandable\' | \'rows\' | \'onExpand\'>',
      default: 'false',
      version: '-'
    },
    {
      property: 'keyboard',
      description: 'Keyboard style',
      type: 'boolean',
      default: 'false',
      version: '4.3.0'
    },
    {
      property: 'mark',
      description: 'Marked style',
      type: 'boolean',
      default: 'false',
      version: '-'
    },
    {
      property: 'onClick',
      description: 'Set the handler to handle click event',
      type: '(event) => void',
      default: '-',
      version: '-'
    },
    {
      property: 'strong',
      description: 'Bold style',
      type: 'boolean',
      default: 'false',
      version: '-'
    },
    {
      property: 'italic',
      description: 'Italic style',
      type: 'boolean',
      default: 'false',
      version: '4.16.0'
    },
    {
      property: 'type',
      description: 'Content type',
      type: 'secondary | success | warning | danger',
      default: '-',
      version: 'success: 4.6.0'
    },
    {
      property: 'underline',
      description: 'Underlined style',
      type: 'boolean',
      default: 'false',
      version: '-'
    },
  ]
  const dataSourceTitle: DataSource = [
    {
      property: 'code',
      description: 'Code Style',
      type: 'boolean',
      default: 'false',
      version: '-'
    },
    {
      property: 'copyable',
      description: 'Whether to be copyable, customize it via setting an object',
      type: 'boolean | copyable',
      default: 'false',
      version: '-'
    },
    {
      property: 'delete',
      description: 'Deleted line style',
      type: 'boolean',
      default: 'false',
      version: '-'
    },
    {
      property: 'disabled',
      description: 'Disabled content',
      type: 'boolean',
      default: 'false',
      version: '-'
    },
    {
      property: 'editable',
      description: 'If editable. Can control edit state when is object',
      type: 'boolean | editable',
      default: 'false',
      version: '-'
    },
    {
      property: 'ellipsis',
      description: 'Display ellipsis when text overflows, can configure rows and expandable by using object',
      type: 'boolean | ellipsis',
      default: 'false',
      version: '-'
    },
    {
      property: 'level',
      description: 'Set content importance. Match with h1, h2, h3, h4, h5',
      type: 'number: 1, 2, 3, 4, 5',
      default: '1',
      version: 'number: 1, 2, 3, 4, 5'
    },
    {
      property: 'mark',
      description: 'Marked style',
      type: 'boolean',
      default: 'false',
      version: '-'
    },
    {
      property: 'onClick',
      description: 'Set the handler to handle click event',
      type: '(event) => void',
      default: '-',
      version: '-'
    },
    {
      property: 'strong',
      description: 'Bold style',
      type: 'boolean',
      default: 'false',
      version: '-'
    },
    {
      property: 'italic',
      description: 'Italic style',
      type: 'boolean',
      default: 'false',
      version: '4.16.0'
    },
    {
      property: 'type',
      description: 'Content type',
      type: 'secondary | success | warning | danger',
      default: '-',
      version: 'success: 4.6.0'
    },
    {
      property: 'underline',
      description: 'Underlined style',
      type: 'boolean',
      default: 'false',
      version: '-'
    },
  ]
  const dataSourceParagraph: DataSource = [
    {
      property: 'code',
      description: 'Code Style',
      type: 'boolean',
      default: 'false',
      version: '-'
    },
    {
      property: 'copyable',
      description: 'Whether to be copyable, customize it via setting an object',
      type: 'boolean | copyable',
      default: 'false',
      version: '-'
    },
    {
      property: 'delete',
      description: 'Deleted line style',
      type: 'boolean',
      default: 'false',
      version: '-'
    },
    {
      property: 'disabled',
      description: 'Disabled content',
      type: 'boolean',
      default: 'false',
      version: '-'
    },
    {
      property: 'editable',
      description: 'If editable. Can control edit state when is object',
      type: 'boolean | editable',
      default: 'false',
      version: '-'
    },
    {
      property: 'ellipsis',
      description: 'Display ellipsis when text overflows, can configure rows and expandable by using object',
      type: 'boolean | ellipsis',
      default: 'false',
      version: '-'
    },
    {
      property: 'mark',
      description: 'Marked style',
      type: 'boolean',
      default: 'false',
      version: '-'
    },
    {
      property: 'onClick',
      description: 'Set the handler to handle click event',
      type: '(event) => void',
      default: '-',
      version: '-'
    },
    {
      property: 'strong',
      description: 'Bold style',
      type: 'boolean',
      default: 'false',
      version: '-'
    },
    {
      property: 'italic',
      description: 'Italic style',
      type: 'boolean',
      default: 'false',
      version: '4.16.0'
    },
    {
      property: 'type',
      description: 'Content type',
      type: 'secondary | success | warning | danger',
      default: '-',
      version: 'success: 4.6.0'
    },
    {
      property: 'underline',
      description: 'Underlined style',
      type: 'boolean',
      default: 'false',
      version: '-'
    },
  ]

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
    <React.Fragment>
      <TheContainer>
        <div className={'space-y-6'}>
          <Typography.Title level={2}>API</Typography.Title>
          <section id="typography-text">
            <Typography.Title level={3}>Typography.Text</Typography.Title>
            <Table bordered pagination={false} dataSource={dataSourceText} columns={columns}/>
          </section>
          <section id="typography-title">
            <Typography.Title level={3}>Typography.Title</Typography.Title>
            <Table bordered pagination={false} dataSource={dataSourceTitle} columns={columns}/>
          </section>
          <section id="typography-paragraph">
            <Typography.Title level={3}>Typography.Paragraph</Typography.Title>
            <Table bordered pagination={false} dataSource={dataSourceParagraph} columns={columns}/>
          </section>
        </div>
      </TheContainer>
    </React.Fragment>
  )
}

export default ApiPartial;
