import React, {useState} from 'react';
import {Avatar, Button, Empty, Flex, Input, Table, Tooltip} from "antd";
import {DataType} from "@/Pages/Dashboard/App/Mail/handlers/data";
import {TableProps} from "antd/es/table/InternalTable";
import {
  DeleteOutlined,
  ReloadOutlined, SearchOutlined,
  StarFilled,
  StarOutlined,
  TagsOutlined
} from "@ant-design/icons";
import {TableRowSelection} from "antd/lib/table/interface";
import {Icons} from "@/Components/general/Icons";

type MailPartialType = {} & Omit<TableProps<DataType>, 'columns'>
const MailPartial: React.FC<MailPartialType> = (props) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedRow, setSelectedRow] = useState<DataType[]>([]);
  const [dataSource, setDataSource] = useState(() => {
    return props?.dataSource ?? []
  })

  const columns: TableProps<DataType>['columns'] = [
    {
      title: () => (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Tooltip title="Refresh Data">
              <Button type="text" icon={<ReloadOutlined/>} onClick={refresh}/>
            </Tooltip>
            {
              selectedRowKeys.length > 0 && (
                <React.Fragment>

                  <Tooltip title="Starred Data">
                    <Button
                      onClick={bulkStarred}
                      type="text"
                      icon={<Icons
                        type={dataSource.every((child) => child?.starred) ? 'StarFilled' : 'StarOutlined'}
                        className={["text-xl yid-mail-star",  dataSource.every((child) => child?.starred) ? 'checked' : 'uncheck' ].join(' ')}
                      />
                    }
                    />
                  </Tooltip>
                  <Tooltip title="">
                    <Button
                      type="text"
                      icon={<TagsOutlined className="text-xl"/>}
                    />
                  </Tooltip>
                  <Tooltip title="Delete Data">
                    <Button
                      onClick={bulkDelete}
                      type="text"
                      danger
                      icon={<DeleteOutlined className="text-xl"/>}
                    />
                  </Tooltip>
                </React.Fragment>
              )
            }
          </div>
          <Flex align="center" gap={10}>
            <Input
              prefix={<SearchOutlined/>}
              size="small"
              placeholder="Search"
              onChange={e => {
              }}/>
          </Flex>
        </div>
      ),
      colSpan: 4,
      dataIndex: 'name',
      className: 'mail-list-item',
      render: (_, elm) => (
        <div className="yid-mail-item--content">
          <div
            onClick={(e) => {
              e.stopPropagation()
            }}
            className={`yid-mail-star font-size-md ${elm.starred ? 'checked' : 'uncheck'}`}
          >
            {elm.starred ? <StarFilled/> : <StarOutlined/>}
          </div>
          <div className="yid-mail-item--content-thumb">
            <Avatar src={elm?.avatar} size={40}/>
            <h4 className="mb-0 ml-2">{elm.name}</h4>
          </div>
        </div>
      ),
    },
    {
      colSpan: 0,
      className: 'yid-mail-content',
      render: (_, elm) => (
        <div className="yid-mail-content-msg line-clamp-1">
          <span className="font-pro-bold">{elm?.title}</span>
          <span className="mx-2"> - </span>
          <span className="p mb-0">{elm?.snippet}</span>
        </div>
      )
    },
    {
      colSpan: 0,
      className: 'mail-list-date',
      render: (_, elm) => (
        <div>{elm?.date}</div>
      )
    },
  ];

  const rowSelection: TableRowSelection<DataType> = {
    onChange: (keys, selectedRows) => {
      setSelectedRowKeys(keys)
      setSelectedRow(selectedRows)
    }
  };

  function bulkDelete() {
    // action
    //@ts-ignore
    setDataSource((prevState) => prevState.filter((child) => ![...selectedRowKeys].includes(child?.id)))
    setSelectedRowKeys([])
    setSelectedRow([])
  }

  function bulkStarred(){
    //actions
    setDataSource((prevState)=> [...prevState.map((child)=> ({...child, starred: true}))])
  }

  function onStarred(){

  }
  function refresh() {
    setLoading(true)
    let timeout = setTimeout(() => {
      setLoading(false)
      clearTimeout(timeout)
    }, 2000)
  }

  return (
    <div className="yid-mail">
      <Table
        {...props}
        loading={loading}
        dataSource={dataSource}
        columns={columns}
        rowKey="id"
        rowSelection={{...rowSelection, checkStrictly: true}}
        locale={{
          emptyText: <Empty/>
        }}
      />
    </div>
  )
}

export default MailPartial;
