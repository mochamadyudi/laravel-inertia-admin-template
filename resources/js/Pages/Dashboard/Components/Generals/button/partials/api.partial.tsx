import React from 'react';
import {Breadcrumb, Divider, Table, Tag, Typography} from "antd";
import type {TableProps as RcTableProps} from "rc-table/lib/Table";
import {ColumnsType} from "antd/lib/table";

const ApiPartial: React.FC<any> = () => {
  const data: RcTableProps<any>['data'] = [
    {
      property: 'type',
      description: 'Syntactic sugar. Set button type. Will follow variant & color if provided',
      type: 'primary | dashed | link | text | default',
      default: `default`,
      version: null
    },
    {
      property: 'onClick',
      description: 'Set the handler to handle click event',
      type: '(event: React.MouseEvent<HTMLElement, MouseEvent>) => void',
      default: '-',
      version: null
    },
    {
      property: 'variant',
      description: 'Set button variant',
      type: 'outlined | dashed | solid | filled | text | link',
      default: `-`,
      version: '5.21.0'
    },
    {
      property: 'target',
      description: 'Same as target attribute of a, works when href is specified',
      type: 'string',
      default: `-`,
      version: '5.21.0'
    },
    {
      property: 'styles',
      description: 'Semantic DOM style',
      type: 'Record<SemanticDOM, CSSProperties>',
      default: `-`,
      version: '5.21.0'
    },
    {
      property: 'sizes',
      description: 'Set the size of button',
      type: 'large | middle | small',
      default: `middle`,
      version: ''
    },
    {
      property: 'shape',
      description: 'Can be used to set button shape',
      type: 'default | circle | round',
      default: `default`,
      version: ''
    },
    {
      property: 'loading',
      description: 'Set the loading status of button',
      type: 'boolean | { delay: number, icon: ReactNode }',
      default: `false`,
      version: 'icon: 5.23.0'
    },
    {
      property: 'iconPosition',
      description: 'Set the icon position of button',
      type: 'start | end',
      default: `start`,
      version: '5.17.0'
    },
    {
      property: 'icon',
      description: 'Set the icon component of button',
      type: 'ReactNode',
      default: `-`,
      version: ''
    },
    {
      property: 'htmlType',
      description: 'Set the original html type of button, see: MDN',
      type: 'submit | reset | button',
      default: `button`,
      version: ''
    },
    {
      property: 'href',
      description: 'Redirect url of link button',
      type: 'string',
      default: `-`,
      version: '-'
    },
    {
      property: 'ghost',
      description: 'Make background transparent and invert text and border colors',
      type: 'boolean',
      default: `false`,
      version: ''
    },
    {
      property: 'disabled',
      description: 'Disabled state of button',
      type: 'boolean',
      default: `false`,
      version: ''
    },
    {
      property: 'danger',
      description: 'Syntactic sugar. Set the danger status of button. will follow color if provided',
      type: 'boolean',
      default: `false`,
      version: ''
    },
    {
      property: 'color',
      description: 'Set button color',
      type: 'default | primary | danger | PresetColors',
      default: `-`,
      version: 'default, primary and danger: 5.21.0, PresetColors: 5.23.0'
    },
  ]
  const columns: ColumnsType<any> = [
    {
      dataIndex: 'property',
      title: 'Property',
      width: '220px',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      width: '440px',
    },
    {
      title: 'Type',
      dataIndex: 'type',
    },
    {
      title: 'Default',
      dataIndex: 'default',
    },
    {
      title: 'Version',
      dataIndex: 'version',
    },
  ]
  return (
    <div className={'space-y-4 mb-10'}>
      <Typography.Title level={3}>When To Use</Typography.Title>
      <Typography.Paragraph>A button means an operation (or a series of operations). Clicking a button will trigger its
        corresponding business logic.</Typography.Paragraph>
      <Typography.Paragraph>In Ant Design we provide 5 types of button.</Typography.Paragraph>

      <ul className={'list-disc mx-4'}>
        <li>
          <Typography>Primary button: used for the main action, there can be at most one primary button in a
            section.</Typography>
        </li>
        <li>
          <Typography>Default button: used for a series of actions without priority.</Typography>
        </li>
        <li>
          <Typography>Dashed button: commonly used for adding more actions.</Typography>
        </li>
        <li>
          <Typography>Text button: used for the most secondary action.</Typography>
        </li>
        <li>
          <Typography>Link button: used for external links..</Typography>
        </li>
      </ul>
      <Typography.Paragraph>And 4 other properties additionally.</Typography.Paragraph>

      <ul className={'list-disc mx-4 space-y-2'}>
        <li>
          <Typography><Tag color={'magenta'}>danger</Tag>: used for actions of risk, like deletion or authorization.</Typography>
        </li>
        <li>
          <Typography><Tag color={'magenta'}>ghost</Tag>: used in situations with complex background, home pages usually.</Typography>
        </li>
        <li>
          <Typography><Tag color={'magenta'}>disabled</Tag>: used when actions are not available.</Typography>
        </li>
        <li>
          <Typography><Tag color={'magenta'}>loading</Tag>: adds a loading spinner in button, avoids multiple submits too.</Typography>
        </li>

      </ul>

      <Typography.Title level={3}>API</Typography.Title>
      <Divider/>
      <Breadcrumb>
        <Breadcrumb.Item>To get a customized button, just set type</Breadcrumb.Item>
        <Breadcrumb.Item className={'text-red-400'}>shape</Breadcrumb.Item>
        <Breadcrumb.Item className={'text-red-400'}>size</Breadcrumb.Item>
        <Breadcrumb.Item className={'text-red-400'}>loading</Breadcrumb.Item>
        <Breadcrumb.Item className={'text-red-400'}>disabled</Breadcrumb.Item>
      </Breadcrumb>
      <Table
        bordered
        columns={columns}
        dataSource={data}
        pagination={false}
      />
      <Typography.Paragraph>It accepts all props which native buttons support.</Typography.Paragraph>
    </div>
  )
}

export default ApiPartial;
