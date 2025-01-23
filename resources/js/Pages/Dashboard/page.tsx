import React from "react";
import TheDashboard from "@/Components/layouts/Dashboard/TheDashboard";
import {Button, Card, Col, Progress, Row, Statistic, Table, Tabs, Typography} from "antd";
import TheContainer from "@/Components/general/TheContainer";
import {Icons} from "@/Components/general/Icons";

const Page = () => {
  return (
    <React.Fragment>

      <Row gutter={[24, 24]}>
        <Col xs={24} lg={16}>
          <Row gutter={[24, 24]}>
            <Col span={8}>
              <Card bordered={false}>
                <Statistic title="Feedback" value={1128} prefix={<Icons type={'LikeOutlined'}/>}/>
              </Card>
            </Col>
            <Col span={8}>
              <Card bordered={false}>
                <Statistic title="Feedback" value={1128} prefix={<Icons type={'LikeOutlined'}/>}/>
              </Card>
            </Col>
            <Col span={8}>
              <Card bordered={false}>
                <Statistic
                  title="Active"
                  value={11.28}
                  precision={2}
                  valueStyle={{color: '#70d415'}}
                  prefix={<Icons type={'LikeOutlined'}/>}
                  suffix={<Icons type={'ArrowUpOutlined'} className={'!text-sm'}/>}
                />
              </Card>
            </Col>
          </Row>
        </Col>
        <Col xs={24} lg={8}>
          <Card bordered={false}>
            <div className="text-center space-y-6">
              <Typography.Title level={3} className={'!text-lg'}>Monthly Target</Typography.Title>
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
      <TheContainer>
        {/*<Tabs*/}
        {/*  items={[*/}
        {/*    {*/}
        {/*      label: "Home",*/}
        {/*      key: 'home',*/}
        {/*      children: <p>etsting</p>*/}
        {/*    }*/}
        {/*  ]}*/}
        {/*/>*/}
        <Card>
          <Table
            columns={[
              {
                dataIndex: 'name',
                title: 'Product'
              },
              {
                dataIndex: 'name',
                title: 'Category'
              },
              {
                dataIndex: 'name',
                title: 'Tags'
              },
              {
                dataIndex: 'name',
                title: 'Price'
              },
            ]}
          />
        </Card>
        <p>testing</p>
      </TheContainer>

    </React.Fragment>
  )
}

Page.layout = (page: any) => <TheDashboard children={page}/>

export default Page;
