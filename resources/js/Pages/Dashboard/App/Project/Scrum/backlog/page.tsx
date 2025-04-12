import React, {useState} from 'react';
import ScrumLayout from "@/Pages/Dashboard/App/Project/Scrum/partials/scrum.layout";
import {Avatar, Badge, Button, Checkbox, Collapse, Flex, Input, Menu, Space, Tag, Typography} from 'antd';
import {
  BranchesOutlined, CaretRightOutlined, CheckOutlined,
  DotChartOutlined, PaperClipOutlined,
  SearchOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import {Scrollbars} from "react-custom-scrollbars";
import {Icons} from "@/Components/general/Icons";

const Page = (props: any) => {
  const [active,setActive] = useState<boolean>(false);
  return (
    <ScrumLayout.Content
      title="Backlog"
      useBreadcrumb
    >
      <div className="space-y-4 flex flex-col flex-1">
        <section id="hero" className="flex flex-col space-y-2">
          <Flex justify="space-between">
            <Flex gap={24} align={'center'} flex={1}>
              <Input
                className="max-w-[150px]"
                prefix={<SearchOutlined/>}/>
              <Flex>
                <div>
                  <Avatar size={'large'} src={'/assets/img/profile/1.png'}/>
                </div>
                <div>
                  <Avatar size={'large'} src={'/assets/img/profile/2.png'}/>
                </div>
              </Flex>
              <Button icon={<UserAddOutlined/>} shape={'circle'}/>

              <div className="flex-1">
                <Menu
                  mode="horizontal"
                  className="!bg-transparent flex-1 border-none"
                  items={[
                    {
                      type: 'submenu',
                      icon: <BranchesOutlined/>,
                      label: "Version",
                      key: "version",
                      onClick() {
                      },
                      children: [
                        {
                          type: 'item',
                          label: "version",
                          key: "version.index",
                          onClick() {
                          },
                        },
                      ]
                    },
                    {
                      type: "item",
                      label: "Epic",
                      key: "epic",
                      onClick() {
                      }
                    },
                    {
                      type: "item",
                      label: "Label",
                      key: "label",
                      onClick() {
                      }
                    },
                    {
                      type: "item",
                      label: "Type",
                      key: "type",
                      onClick() {
                      }
                    },
                    {
                      type: "item",
                      label: "Quick Filters",
                      key: "quick-filters",
                      onClick() {
                      }
                    },
                  ]}
                />
              </div>
            </Flex>
            <div>
              <Button
                type="primary"
                ghost
                icon={<DotChartOutlined/>}
              >Insight</Button>
            </div>
          </Flex>
          <Space>
            <Tag
              key={'only-my-issues'}
              className="bg-[#f0f0f0] dark:bg-layout-dark border-[#cccccc] dark:border-transparent"
            >Only My Issues</Tag>
            <Tag
              key={'only-my-issues'}
              className="bg-[#f0f0f0] dark:bg-layout-dark border-[#cccccc] dark:border-transparent"
            >Recently Updated</Tag>
          </Space>
        </section>
        <section className="flex lg:flex-row flex-col h-full items-start gap-10 flex-1">
          <div
            className="h-full bg-[#f4f5f7] dark:bg-layout-dark flex-1 rounded-lg p-4 w-full lg:w-auto flex flex-col space-y-4">
            <div className="w-full">
              <Flex justify="space-between">
                <div className="flex-1"/>
                <div>
                  <Space>
                    <Badge
                      showZero
                      count={0}
                      classNames={{
                        indicator: "bg-slate-400 dark:bg-card-dark"
                      }}
                    />
                    <Badge
                      showZero
                      count={14}
                      classNames={{
                        indicator: "bg-blue-500 dark:bg-blue-700 border-none"
                      }}
                    />
                    <Badge
                      showZero
                      count={23}
                      classNames={{
                        indicator: "bg-green-500 dark:bg-green-700 border-none"
                      }}
                    />
                    <Button
                      size="small"
                      type="primary"
                    >Complete Sprint</Button>
                  </Space>

                </div>
              </Flex>
            </div>
            <div className="flex-1 w-full  bg-card dark:bg-card-dark rounded-lg overflow-hidden">
              <Scrollbars autoHide>
                <div className="w-full">
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map((item: number) => {
                    return (
                      <div
                        onClick={()=> setActive((prevState: boolean)=> !prevState)}
                        className="w-full flex items-center p-2.5 hover:bg-[--ant-color-primary-bg] transition duration-200"
                        key={item}>
                        <div className="w-[40px]">
                          <Checkbox/>
                        </div>
                        <div className="flex-1 flex items-center gap-2">
                          <div
                            className="w-[20px] h-[20px] rounded flex items-center justify-center bg-blue-100 dark:bg-blue-800">
                            <CheckOutlined className="text-xs text-blue-500 dark:text-blue-100"/>
                          </div>
                          <div className="flex-1 flex items-center gap-2">
                            <span className="!m-0 !p-0 leading-none whitespace-nowrap text-primary">CN-{item + 1}</span>
                            <span className="!m-0 !p-0 leading-none line-clamp-1 ">Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet </span>
                          </div>
                        </div>
                        <div className="w-auto ml-4">
                          <Space>
                            <Tag color="#753acc" className="px-1.5 py-0.5 !text-xs text-white">LAUNCH PLAN</Tag>
                            <Badge
                              showZero
                              count={0}
                              classNames={{
                                indicator: "bg-slate-400 dark:bg-card-dark"
                              }}
                            />
                            <Tag color="blue" className="p-1 !text-xs">IN PROGRESS</Tag>
                            <Avatar src={'/assets/img/profile/1.png'}/>
                          </Space>

                        </div>
                      </div>
                    )
                  })}
                </div>
              </Scrollbars>
            </div>
          </div>

          <div className={[
            active ? 'w-[0] lg:hidden ' : "w-[400px] lg:flex",
            "h-full rounded-lg overflow-hidden space-y-6 flex-col",
          ].join(' ')}>
            <div className="space-y-3">
              <Typography.Title level={2}>Journey mapping workshop w/Beanz</Typography.Title>
              <Space>
                <div
                  className="w-[40px] h-[40px] flex items-center justify-center bg-[#f4f5f7] dark:bg-layout-dark rounded-lg">
                  <PaperClipOutlined className="text-xl"/>
                </div>
                <div
                  className="w-[40px] h-[40px] flex items-center justify-center bg-[#f4f5f7] dark:bg-layout-dark rounded-lg">
                  <Icons type={'SwitcherOutlined'} className="text-xl"/>
                </div>
                <div
                  className="w-[40px] h-[40px] flex items-center justify-center bg-[#f4f5f7] dark:bg-layout-dark rounded-lg">
                  <Icons type={'LinkOutlined'} className="text-xl"/>
                </div>
                <div
                  className="w-[40px] h-[40px] flex items-center justify-center bg-[#f4f5f7] dark:bg-layout-dark rounded-lg">
                  <Icons type={'AntDesignOutlined'} className="text-xl"/>
                </div>
                <div
                  className="w-[40px] h-[40px] flex items-center justify-center bg-[#f4f5f7] dark:bg-layout-dark rounded-lg">
                  <Icons type={'EllipsisOutlined'} className="text-xl"/>
                </div>
              </Space>
              <Flex>
                <Button variant={'filled'} color={'blue'}>In Progress</Button>
                <Button type={'text'} color={'blue'} icon={<Icons type={'ThunderboltOutlined'}/>}>Actions <Icons
                  type={'DownOutlined'} className="text-xs"/></Button>
              </Flex>
            </div>
            <Scrollbars autoHide>
              <Collapse
                bordered={false}
                className=" dark:bg-layout-dark"
                defaultActiveKey={['detail']}
                // expandIcon={({ isActive }: any) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                items={[
                  {
                    key: 'detail',
                    label: 'Detail',
                    children: (
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <div className="w-[120px]">
                            <span className="text-sm">Assignee</span>
                          </div>
                          <div className="flex-1 border border-red-500"></div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-[120px]">
                            <span className="text-sm">Reporter</span>
                          </div>
                          <div className="flex-1 border border-red-500"></div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-[120px]">
                            <span className="text-sm">labels</span>
                          </div>
                          <div className="flex-1 border border-red-500"></div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-[120px]">
                            <span className="text-sm">Sprint</span>
                          </div>
                          <div className="flex-1 border border-red-500"></div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-[120px]">
                            <span className="text-sm">Story Point</span>
                          </div>
                          <div className="flex-1 border border-red-500"></div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-[120px]">
                            <span className="text-sm">Epic Link</span>
                          </div>
                          <div className="flex-1 border border-red-500"></div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-[120px]">
                            <span className="text-sm">Priority</span>
                          </div>
                          <div className="flex-1 border border-red-500"></div>
                        </div>
                      </div>
                    ),
                  }
                ]}
              />

              <Collapse
                bordered={false}
                className=" dark:bg-layout-dark"
                defaultActiveKey={['detail']}
                // expandIcon={({ isActive }: any) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                items={[
                  {
                    key: 'detail',
                    label: 'Detail',
                    children: (
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <div className="w-[120px]">
                            <span className="text-sm">Assignee</span>
                          </div>
                          <div className="flex-1 border border-red-500"></div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-[120px]">
                            <span className="text-sm">Reporter</span>
                          </div>
                          <div className="flex-1 border border-red-500"></div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-[120px]">
                            <span className="text-sm">labels</span>
                          </div>
                          <div className="flex-1 border border-red-500"></div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-[120px]">
                            <span className="text-sm">Sprint</span>
                          </div>
                          <div className="flex-1 border border-red-500"></div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-[120px]">
                            <span className="text-sm">Story Point</span>
                          </div>
                          <div className="flex-1 border border-red-500"></div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-[120px]">
                            <span className="text-sm">Epic Link</span>
                          </div>
                          <div className="flex-1 border border-red-500"></div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-[120px]">
                            <span className="text-sm">Priority</span>
                          </div>
                          <div className="flex-1 border border-red-500"></div>
                        </div>
                      </div>
                    ),
                  }
                ]}
              />
            </Scrollbars>
          </div>
        </section>
      </div>

    </ScrumLayout.Content>
  )
}

Page.layout = (children: React.ReactNode) => <ScrumLayout children={children}/>;

export default Page;
