import React, {useRef} from 'react';
import TheLayout from "@/Components/layouts/DefaultLayout/TheLayout";
import {Typography, Table, Button, Flex, Divider, Card} from "antd";
import {TableProps} from "antd/es/table/InternalTable";
import { useReactToPrint } from "react-to-print";
import Logo from "@/Components/general/Logo";
import {Icons} from "@/Components/general/Icons";

type dataType = {
  id?: number | string;
  name?: string;
  qty?: number;
  price?: string;
  total: string;
}
const Page = () => {
  const ref = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef: ref });
  const setting = {
    tax: 10 // percentage
  }
  const data: TableProps<dataType>['dataSource'] = [
    {
      "id": 1,
      "name": "Iphone 11 Pro",
      "qty": 1,
      "price": "521",
      "total": "521"
    },
    {
      "id": 2,
      "name": "Samsung Galaxy S21",
      "qty": 2,
      "price": "799",
      "total": "1598"
    },
    {
      "id": 3,
      "name": "MacBook Air M1",
      "qty": 1,
      "price": "999",
      "total": "999"
    },
    {
      "id": 4,
      "name": "Sony WH-1000XM4",
      "qty": 3,
      "price": "349",
      "total": "1047"
    },
  ];
  const columns:TableProps<dataType>['columns'] = [
    {
      title: "No",
      width: '70px',
      render: (_, val, index: number) => index + 1,
    },
    {
      title: 'Product',
      dataIndex: 'name',
    },
    {
      title: 'Quantity',
      dataIndex: 'qty'
    },
    {
      title: 'Price',
      dataIndex: 'price',
      render: (_) => ['$',_].join('')
    },
    {
      title: 'Total',
      dataIndex: 'total',
      render: (_) => ['$',_].join(''),
    },
  ];
  const grandTotal = data.reduce((sum, item) => {
    const total = parseFloat(item?.total);
    return sum + total;
  }, 0);

  return (
    <React.Fragment>
      <Card classNames={{ body: "!p-0"}}>
        <div className="space-y-6 p-6" ref={ref}>
          <Flex justify="space-between">
            <Logo/>
            <div className="text-right">
              <Typography className="!font-bold !text-2xl !font-pro-medium">Invoice #9972</Typography>
              <Typography className="!text-base !font-sf-pro">25/7/2018</Typography>
            </div>
          </Flex>
          <div className="space-y-1">
            <Flex justify="space-between" align="center">
              <Typography.Title level={3} className="!m-0">Clonesia Inc.</Typography.Title>
              <Typography.Title level={3} className="!m-0">Genting Holdings.</Typography.Title>
            </Flex>
            <div>
              <Flex justify="space-between" align="center">
                <Typography className="!text-base !m-0">9888 West Java.</Typography>
                <Typography className="!text-base !m-0">Genting Holdings.</Typography>
              </Flex>
              <Flex justify="space-between" align="center">
                <Typography className="!text-base !m-0">Fairfield, Chicago Town 06824.</Typography>
                <Typography className="!text-base !m-0">8626 Maiden Dr.</Typography>
              </Flex>
              <Flex justify="space-between" align="center">
                <Typography className="!text-base !m-0">Phone:(123) 456-7890</Typography>
                <Typography className="!text-base !m-0">Niagara Falls, New York 14304.</Typography>
              </Flex>
            </div>
          </div>
          <Table<dataType>
            columns={columns}
            dataSource={data}
            pagination={false}
            footer={() => (
              <div className="flex justify-end">
                <div className="text-right space-y-4 w-full max-w-sm">
                  <div>
                    <Typography className="!m-0 ">Sub - Total amount: $2,075.00</Typography>
                    <Typography className="!m-0 ">vat (10%) : 207.50</Typography>
                  </div>
                  <Divider/>
                  <Typography className="!font-bold !text-xl !font-pro-bold">Grand Total:
                    ${grandTotal.toFixed(2)}</Typography>
                </div>
              </div>
            )}
          />
          <Typography>Under unusual conditions, the Financial Services department may issue an expedited, manually
            processed special cheque. Please be aware that such urgent special cheques should only be requested in
            genuine emergencies, as manually generating cheques requires additional effort and significant allocation of
            staff resources. All requests must be accompanied by a formal letter detailing the situation to validate the
            need for a special cheque payment.</Typography>
        </div>
        <Divider className="!m-0"/>
        <div className="p-6 flex justify-end">
          <Button
            type="primary"
            onClick={() => reactToPrintFn()}
            icon={<Icons type={'PrinterOutlined'}/>}
          >Print</Button>
        </div>
      </Card>
    </React.Fragment>
  )
};

Page.layout = (children: any) => <TheLayout type="dashboard" children={children} isFooter/>;

export default Page;
