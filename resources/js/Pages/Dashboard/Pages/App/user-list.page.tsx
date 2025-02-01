import React, {useState} from 'react';
import TheLayout from "@/Components/layouts/DefaultLayout/TheLayout";
import {Button, Card, Descriptions, Drawer, Flex, Image, Input, message, Table, Tag, Tooltip, Typography} from "antd";
import {ColumnsType} from "antd/lib/table";
import {userData, userType} from "@/Pages/Dashboard/Pages/App/handler/user.data";
import AvatarStatus from "@/Components/general/AvatarStatus";
import {Icons} from "@/Components/general/Icons";
import EllipsisDropdown from "@/Components/general/Dropdown/EllipsisDropdown";
import dayjs from 'dayjs';

const Page = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]); // State untuk menyimpan checkbox yang dipilih
  const [data, setData] = useState<Array<Omit<userType, 'id'>>>(userData);
  const [selected, setSelected] = useState<Omit<userType, 'id'> | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  const getColumnSearchProps = (dataIndex: any) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }: any) => (
      <div style={{ padding: 8 }} className="!bg-layout dark:!bg-layout-dark">
        <Input
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => confirm()}
          style={{ marginBottom: 8, display: 'block' }}
        />
       <Flex gap={10}>
         <Button
           type="primary"
           onClick={() => confirm()}
           icon={<Icons type={'SearchOutlined'} />}
           size="small"
           style={{ width: 90 }}
         >
           Search
         </Button>
         <Button onClick={() => {
           clearFilters()
           confirm()
         }} size="small" style={{ width: 90 }}>
           Reset
         </Button>
       </Flex>
      </div>
    ),
    filterIcon: (filtered: any) => (
      <Icons type={'SearchOutlined'} style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value: any, record: any) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
  });
  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedRowKeys: any) => {
      setSelectedRowKeys(selectedRowKeys);
    },
  };

  const columns: ColumnsType<any> = [
    {
      title: 'User',
      fixed: 'left',
      sorter: (a, b) => a.email.localeCompare(b.email),
      render: (val: userType) => {
        return (
          <AvatarStatus
            name={val?.name}
            subTitle={val?.email}
            avatar={{
              size: 50,
              src: val?.avatar,
              alt: val?.avatar,
            }}/>
        )
      },
      ...getColumnSearchProps('email')
    },
    {
      title: 'Role',
      dataIndex: 'role',
      sorter: (a, b) => a.role.localeCompare(b.role),
    },
    {
      title: 'Social',
      dataIndex: 'social',
      render: (_: userType['social']) => {
        return (
          <Flex gap={6}>
            <Tooltip title="Instagram">
              <Button
                target="_blank"
                href={_?.instagram}
                type="link"
                htmlType="button"
                shape="circle"
                variant="solid"
                color="pink"
                icon={<Icons type={'InstagramFilled'} className="!text-xl  mt-1"/>}
              />
            </Tooltip>
            <Tooltip title="Linkedin">
              <Button
                target="_blank"
                href={_?.linkedin}
                title="linkedin"
                shape="circle"
                variant="solid"
                color="blue"
                icon={<Icons type={'LinkedinFilled'} className="!text-xl  mt-1"/>}
              />
            </Tooltip>
            <Tooltip title="Facebook">
              <Button
                target="_blank"
                href={_?.facebook}
                title="facebook"
                shape="circle"
                variant="solid"
                color="geekblue"
                icon={<Icons type={'FacebookFilled'} className="!text-xl  mt-1"/>}
              />
            </Tooltip>
          </Flex>
        )
      }
    },
    {
      title: 'Status',
      dataIndex: 'status',
      sorter: (a, b) => a.status.localeCompare(b.status),
      render: (_: userType['status']) => {
        return <Tag color={_ === 'Active' ? 'cyan' : 'default'}>{_}</Tag>
      }
    },
    {
      render: (_: userType) => {
        return (
          <React.Fragment>
            <EllipsisDropdown
              menu={{
                items: [
                  {
                    key: 'show',
                    label: 'Show',
                    icon: <Icons type={'EyeOutlined'}/>,
                    onClick(){
                      _onShow(_);
                    },
                  },
                  {
                    type: 'divider',
                  },
                  {
                    key: 'delete',
                    label: 'Delete',
                    danger: true,
                    icon: <Icons type={'DeleteOutlined'}/>,
                    onClick(){
                      _onDeleteItem(_.email);
                    },
                  },
                ]
              }}
            />
          </React.Fragment>
        )
      }
    }
  ];

  function _onFilter() {

  }

  function _onShow(_: Omit<userType, 'id'>){
    setSelected(_);
    setOpen(true);
  }
  function _onCloseDrawer(){
    setOpen(false);
    let timeout = setTimeout(()=> {
      setSelected(null);
      clearTimeout(timeout);
    },400);
  }

  function _onDeleteItem(_: userType['email']){
    message.loading({
      key: 'deleted',
      content: 'Loading...'
    });
    setData((prevState) => (prevState.map((child)=> {
      if(child.email === _) Reflect.set(child, 'isDeleted', true);
      return child
    })))

    let timeout = setTimeout(()=> {
      setData((prevState)=> ([...prevState.filter((child)=> child?.email !== _)]))
      message.success({
        key: 'deleted',
        content: 'Successfully deleted!'
      })
      clearTimeout(timeout);
    },1000)
  }

  return (
    <React.Fragment>
      <Card bordered={false} title={'User List'}>
        <Table
          rowKey="email"
          rowSelection={rowSelection}
          rowClassName={(prop: Omit<userType, 'id'> & {isDeleted?: boolean}) => typeof(prop?.isDeleted) !== 'undefined' ? 'danger'  : ''}
          columns={columns}
          dataSource={data}
          pagination={{
            showQuickJumper: false,
            role: 'admin',
            // total:  data.length,
            showSizeChanger: true,
          }}
        />
      </Card>
      <Drawer
        title="Show User"
        open={open}
        onClose={_onCloseDrawer}
      >
        <div className="space-y-4">
          <Flex align="center" justify="center">
            <div className="overflow-hidden rounded-full h-[200px] w-[200px]">
              <Image
                fallback={'/assets/img/no-image.png'}
                src={selected?.avatar}
                alt={selected?.avatar}
                width={200}
                height={200}
                className={'object-cover overflow-hidden'}
              />
            </div>
          </Flex>
          <div>
            <Typography.Title level={3} className="text-center !m-0">{selected?.name}</Typography.Title>
            <Typography.Paragraph className="text-center">{selected?.email}</Typography.Paragraph>
          </div>
          <div>
            <Descriptions labelStyle={{ width: '90px'}}>
              <Descriptions.Item label="Role" span={4}>{selected?.role}</Descriptions.Item>
              <Descriptions.Item label="last online" span={4}>{dayjs(selected?.last_online).isValid() ? dayjs(selected?.last_online).format("DD MMMM YYYY HH:mm:a") : "-"}</Descriptions.Item>
              <Descriptions.Item label="Status" span={4}><Tag color={selected?.status === 'Active' ? 'cyan' : 'default'}>{selected?.status}</Tag></Descriptions.Item>
            </Descriptions>
          </div>
          <div>
            <Typography.Title level={3}>Social</Typography.Title>
          </div>
          <Flex gap={6}>
            <Tooltip title="Instagram">
              <Button
                target="_blank"
                href={selected?.social?.instagram}
                type="link"
                htmlType="button"
                shape="circle"
                variant="solid"
                color="pink"
                icon={<Icons type={'InstagramFilled'} className="!text-xl  mt-1"/>}
              />
            </Tooltip>
            <Tooltip title="Linkedin">
              <Button
                target="_blank"
                href={selected?.social?.linkedin}
                title="linkedin"
                shape="circle"
                variant="solid"
                color="blue"
                icon={<Icons type={'LinkedinFilled'} className="!text-xl  mt-1"/>}
              />
            </Tooltip>
            <Tooltip title="Facebook">
              <Button
                target="_blank"
                href={selected?.social?.facebook}
                title="facebook"
                shape="circle"
                variant="solid"
                color="geekblue"
                icon={<Icons type={'FacebookFilled'} className="!text-xl  mt-1"/>}
              />
            </Tooltip>
          </Flex>
        </div>
      </Drawer>
    </React.Fragment>
  )
}

Page.layout = (children: React.ReactNode) => <TheLayout type="dashboard" isFooter children={children}/>;
export default Page;
