import React from "react";
import TheLayout from "@/Components/layouts/DefaultLayout/TheLayout";
import {Button, Card, Col, Progress, Row, Statistic, Table, Tabs, Typography} from "antd";
import TheContainer from "@/Components/general/TheContainer";
import {Icons} from "@/Components/general/Icons";
import VisitorTablePartial from "@/Pages/Dashboard/partials/visitor.table.partial";

const Page = (props: any) => {
  console.log({ props })
  return (
    <div className="dashboard">
      <Row gutter={24}>
        <Col xs={24} lg={16}>
          <Row gutter={24}>
            <Col span={8}>
              <Card bordered={false}>
                <Statistic title="Revenue" value={1128} prefix="$"/>
                <Typography className="text-slate-400 dark:text-slate-500">Compare to last year (2025)</Typography>
              </Card>
            </Col>
            <Col span={8}>
              <Card bordered={false}>
                <Statistic title="Sales" value={1128} prefix="$"/>
                <Typography className="text-slate-400 dark:text-slate-500">Compare to last year (2025)</Typography>
              </Card>
            </Col>
            <Col span={8}>
              <Card bordered={false}>
                <Statistic
                  title="Expenditure"
                  value={11.28}
                  precision={2}
                  valueStyle={{color: '#70d415'}}
                  prefix={"$"}
                  suffix={<Icons type={'ArrowUpOutlined'} className={'!text-sm'}/>}
                />
                <Typography className="text-slate-400 dark:text-slate-500">Compare to last year (2025)</Typography>
              </Card>
            </Col>
            <Col span={24}>
              <VisitorTablePartial/>
            </Col>
          </Row>
        </Col>
        <Col xs={24} lg={8}>
          <Card bordered={false}>
            <div className="text-center space-y-6">
              <Typography.Title level={3} className={'text-xl'}>Monthly Target</Typography.Title>
              <Progress
                type="dashboard"
                percent={73}
                successPercent={20}
                size={[150,50]}
                status={'active'}
                strokeWidth={4}
                strokeLinecap={'round'}
              />
              <Typography.Paragraph className={'!text-base'}>You need abit more effort<br/>to hit monthly target</Typography.Paragraph>
              <div>
                <Button type={'primary'} size={'large'}>Learn More</Button>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

Page.layout = (page: any) => <TheLayout type="dashboard" children={page}/>

export default Page;
