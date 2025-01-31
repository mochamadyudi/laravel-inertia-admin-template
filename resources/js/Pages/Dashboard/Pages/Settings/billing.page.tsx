import React, {useState} from 'react';
import SettingLayoutDefaultLayout from "@/Components/layouts/SettingLayout/SettingLayout.default-layout";
import {Button, Flex, Table, Typography} from "antd";
import {menusConfig} from "@/Pages/Dashboard/Pages/Settings/handler/menus";
import {TableProps} from "antd/es/table/InternalTable";
import {Utils} from "@/Utils";
import {Icons} from "@/Components/general/Icons";

type BillingType = {
  type: string,
  logo?: string;
  expires_on?: string;
  card_number: string;
}
const Page = () => {
  const dataSource:TableProps<BillingType>['dataSource'] = [
    {
      type: 'visa',
      logo: '/assets/img/logo/visa.png',
      expires_on: '12/25',
      card_number: '123456124312'
    }
  ];
  const [data, setData] = useState<TableProps<BillingType>['dataSource']>(dataSource)
  const columns:TableProps<BillingType>['columns'] = [
    {
      title: 'Card Type',
      render: (_)=> {
        return (
          <Flex gap={4}>
            <img src={_.logo} alt={_.logo}/>
            <span>{_.type}</span>
          </Flex>
        )
      }
    },
    {
      title: 'Card Number',
      dataIndex: 'card_number',
      render: (_) => Utils.maskCardNumber(_)
    },
    {
      title: 'Expires On',
      dataIndex: 'expires_on'
    },
    {
      width: '70px',
      render: (_)=> {
        return <Button shape={'circle'} type={'text'} icon={<Icons type={'DeleteOutlined'} />} onClick={()=> _onDelete(_)}/>
      }
    }
  ];

  function _onDelete(_:BillingType){
    // @ts-ignore
    setData((prevState: BillingType[]) => prevState?.filter(c => c?.card_number !== _.card_number))
  }

  return (
    <React.Fragment>
      <Typography.Title level={1} className={'!text-2xl !mb-8'}>Billing</Typography.Title>
      <Table
        dataSource={data}
        columns={columns}
        pagination={false}
      />
    </React.Fragment>
  )
}

Page.layout = (children: any) => {
  return (
    <SettingLayoutDefaultLayout
      type="dashboard"
      isFooter
      children={children}
      hasContainer
      inner={{
        ...menusConfig,
        menu:{
          activeKey: route('dashboard.pages.setting.billing'),
          defaultSelectedKeys: [route('dashboard.pages.setting.billing')],
          ...menusConfig.menu,
        }
      }}
    />
  )
};

export default Page;
