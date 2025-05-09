import React, {useState} from 'react';
import {motion} from "motion/react"
import ScrumLayout, {ScrumLayoutContent} from "@/Pages/Dashboard/App/Project/Scrum/partials/scrum.layout";
import {Avatar, Badge, Button, Flex, Input, Menu, Space, Tag} from 'antd';
import {
    BranchesOutlined,
    DotChartOutlined,
    SearchOutlined,
    UserAddOutlined,
} from "@ant-design/icons";
import {Scrollbars} from "react-custom-scrollbars";
import TicketShowCase from "@/Pages/Dashboard/App/Project/Scrum/partials/ticket-showcase";
import TicketItem from "@/Pages/Dashboard/App/Project/Scrum/partials/ticket-item";
import {TicketItemProps} from "@/Pages/Dashboard/App/Project/Scrum/partials/types";
import {Icons} from "@/Components/general/Icons";
import TheLayout from "@/Components/layouts/DefaultLayout/TheLayout";


type TicketProps =
    Omit<TicketItemProps, 'selected' | 'id' | 'onSelect' | 'onClick'>
    & Required<Pick<TicketItemProps, 'id'>>;
const Page = (props: any) => {
    const ticketData: TicketProps[] = [
        {
            id: 1,
            type: 'story',
            projectKey: 'CN-01',
            summary: "Update project plan with key milestones",
            epic: {
                label: "QUICK WINDS",
                color: '#11a0a4',
                textColor: "text-white"
            },
            attributes: [
                {
                    widget: 'tooltip',
                    widgetProps: {
                        title: "Haloooo",
                        children: <Icons type={'FlagOutlined'} className="text-red-500"/>
                    }
                },
                {
                    widget: 'badge',
                    widgetProps: {
                        count: 4,
                        showZero: true,
                    }
                },
                {
                    widget: 'tag',
                    widgetProps: {
                        label: 'IN PROGRESS',
                        color: 'blue',
                        textColor: ''
                    }
                },
            ]
        },
        {
            id: 2,
            type: 'epic',
            projectKey: 'FE-1',
            summary: "Auth login ui",
            epic: {
                label: "QUICK WINDS",
                color: '#11a0a4',
                textColor: "text-white"
            },
            attributes: [
                {
                    widget: 'tooltip',
                    widgetProps: {
                        title: "Haloooo",
                        children: <Icons type={'FlagOutlined'} className="text-red-500"/>
                    }
                },
                {
                    widget: 'badge',
                    widgetProps: {
                        count: 2,
                        showZero: true,
                    }
                },
                {
                    widget: 'tag',
                    widgetProps: {
                        label: 'IN PROGRESS',
                        color: 'blue',
                        textColor: ''
                    }
                },
            ]
        },
        {
            id: 4,
            type: 'epic',
            projectKey: 'FE-2',
            summary: "Auth Register UI",
            epic: {
                label: "QUICK WINDS",
                color: '#11a0a4',
                textColor: "text-white"
            },
            attributes: [
                {
                    widget: 'tooltip',
                    widgetProps: {
                        title: "Haloooo",
                        children: <Icons type={'FlagOutlined'} className="text-red-500"/>
                    }
                },
                {
                    widget: 'badge',
                    widgetProps: {
                        count: 2,
                        showZero: true,
                    }
                },
                {
                    widget: 'tag',
                    widgetProps: {
                        label: 'IN PROGRESS',
                        color: 'blue',
                        textColor: ''
                    }
                },
            ]
        },
        {
            id: 3,
            type: 'bug',
            projectKey: 'CN-03',
            summary: "Content Audit",
            epic: {
                label: "QUICK WINDS",
                color: '#11a0a4',
                textColor: "text-white"
            },
            attributes: [
                {
                    widget: 'tooltip',
                    widgetProps: {
                        title: "Haloooo",
                        children: <Icons type={'FlagOutlined'} className="text-red-500"/>
                    }
                },
                {
                    widget: 'badge',
                    widgetProps: {
                        count: 1,
                        showZero: true,
                    }
                },
                {
                    widget: 'tag',
                    widgetProps: {
                        label: 'IN PROGRESS',
                        color: 'blue',
                        textColor: ''
                    }
                },
            ]
        },
        {
            id: 1,
            type: 'story',
            projectKey: 'CN-01',
            summary: "Update project plan with key milestones",
            epic: {
                label: "QUICK WINDS",
                color: '#11a0a4',
                textColor: "text-white"
            },
            attributes: [
                {
                    widget: 'tooltip',
                    widgetProps: {
                        title: "Haloooo",
                        children: <Icons type={'FlagOutlined'} className="text-red-500"/>
                    }
                },
                {
                    widget: 'badge',
                    widgetProps: {
                        count: 4,
                        showZero: true,
                    }
                },
                {
                    widget: 'tag',
                    widgetProps: {
                        label: 'IN PROGRESS',
                        color: 'blue',
                        textColor: ''
                    }
                },
            ]
        },
        {
            id: 2,
            type: 'epic',
            projectKey: 'FE-1',
            summary: "Auth login ui",
            epic: {
                label: "QUICK WINDS",
                color: '#11a0a4',
                textColor: "text-white"
            },
            attributes: [
                {
                    widget: 'tooltip',
                    widgetProps: {
                        title: "Haloooo",
                        children: <Icons type={'FlagOutlined'} className="text-red-500"/>
                    }
                },
                {
                    widget: 'badge',
                    widgetProps: {
                        count: 2,
                        showZero: true,
                    }
                },
                {
                    widget: 'tag',
                    widgetProps: {
                        label: 'IN PROGRESS',
                        color: 'blue',
                        textColor: ''
                    }
                },
            ]
        },
        {
            id: 4,
            type: 'epic',
            projectKey: 'FE-2',
            summary: "Auth Register UI",
            epic: {
                label: "QUICK WINDS",
                color: '#11a0a4',
                textColor: "text-white"
            },
            attributes: [
                {
                    widget: 'tooltip',
                    widgetProps: {
                        title: "Haloooo",
                        children: <Icons type={'FlagOutlined'} className="text-red-500"/>
                    }
                },
                {
                    widget: 'badge',
                    widgetProps: {
                        count: 2,
                        showZero: true,
                    }
                },
                {
                    widget: 'tag',
                    widgetProps: {
                        label: 'IN PROGRESS',
                        color: 'blue',
                        textColor: ''
                    }
                },
            ]
        },
        {
            id: 3,
            type: 'bug',
            projectKey: 'CN-03',
            summary: "Content Audit",
            epic: {
                label: "QUICK WINDS",
                color: '#11a0a4',
                textColor: "text-white"
            },
            attributes: [
                {
                    widget: 'tooltip',
                    widgetProps: {
                        title: "Haloooo",
                        children: <Icons type={'FlagOutlined'} className="text-red-500"/>
                    }
                },
                {
                    widget: 'badge',
                    widgetProps: {
                        count: 1,
                        showZero: true,
                    }
                },
                {
                    widget: 'tag',
                    widgetProps: {
                        label: 'IN PROGRESS',
                        color: 'blue',
                        textColor: ''
                    }
                },
            ]
        },
        {
            id: 1,
            type: 'story',
            projectKey: 'CN-01',
            summary: "Update project plan with key milestones",
            epic: {
                label: "QUICK WINDS",
                color: '#11a0a4',
                textColor: "text-white"
            },
            attributes: [
                {
                    widget: 'tooltip',
                    widgetProps: {
                        title: "Haloooo",
                        children: <Icons type={'FlagOutlined'} className="text-red-500"/>
                    }
                },
                {
                    widget: 'badge',
                    widgetProps: {
                        count: 4,
                        showZero: true,
                    }
                },
                {
                    widget: 'tag',
                    widgetProps: {
                        label: 'IN PROGRESS',
                        color: 'blue',
                        textColor: ''
                    }
                },
            ]
        },
        {
            id: 2,
            type: 'epic',
            projectKey: 'FE-1',
            summary: "Auth login ui",
            epic: {
                label: "QUICK WINDS",
                color: '#11a0a4',
                textColor: "text-white"
            },
            attributes: [
                {
                    widget: 'tooltip',
                    widgetProps: {
                        title: "Haloooo",
                        children: <Icons type={'FlagOutlined'} className="text-red-500"/>
                    }
                },
                {
                    widget: 'badge',
                    widgetProps: {
                        count: 2,
                        showZero: true,
                    }
                },
                {
                    widget: 'tag',
                    widgetProps: {
                        label: 'IN PROGRESS',
                        color: 'blue',
                        textColor: ''
                    }
                },
            ]
        },
        {
            id: 4,
            type: 'epic',
            projectKey: 'FE-2',
            summary: "Auth Register UI",
            epic: {
                label: "QUICK WINDS",
                color: '#11a0a4',
                textColor: "text-white"
            },
            attributes: [
                {
                    widget: 'tooltip',
                    widgetProps: {
                        title: "Haloooo",
                        children: <Icons type={'FlagOutlined'} className="text-red-500"/>
                    }
                },
                {
                    widget: 'badge',
                    widgetProps: {
                        count: 2,
                        showZero: true,
                    }
                },
                {
                    widget: 'tag',
                    widgetProps: {
                        label: 'IN PROGRESS',
                        color: 'blue',
                        textColor: ''
                    }
                },
            ]
        },
        {
            id: 3,
            type: 'bug',
            projectKey: 'CN-03',
            summary: "Content Audit",
            epic: {
                label: "QUICK WINDS",
                color: '#11a0a4',
                textColor: "text-white"
            },
            attributes: [
                {
                    widget: 'tooltip',
                    widgetProps: {
                        title: "Haloooo",
                        children: <Icons type={'FlagOutlined'} className="text-red-500"/>
                    }
                },
                {
                    widget: 'badge',
                    widgetProps: {
                        count: 1,
                        showZero: true,
                    }
                },
                {
                    widget: 'tag',
                    widgetProps: {
                        label: 'IN PROGRESS',
                        color: 'blue',
                        textColor: ''
                    }
                },
            ]
        },
        {
            id: 1,
            type: 'story',
            projectKey: 'CN-01',
            summary: "Update project plan with key milestones",
            epic: {
                label: "QUICK WINDS",
                color: '#11a0a4',
                textColor: "text-white"
            },
            attributes: [
                {
                    widget: 'tooltip',
                    widgetProps: {
                        title: "Haloooo",
                        children: <Icons type={'FlagOutlined'} className="text-red-500"/>
                    }
                },
                {
                    widget: 'badge',
                    widgetProps: {
                        count: 4,
                        showZero: true,
                    }
                },
                {
                    widget: 'tag',
                    widgetProps: {
                        label: 'IN PROGRESS',
                        color: 'blue',
                        textColor: ''
                    }
                },
            ]
        },
        {
            id: 2,
            type: 'epic',
            projectKey: 'FE-1',
            summary: "Auth login ui",
            epic: {
                label: "QUICK WINDS",
                color: '#11a0a4',
                textColor: "text-white"
            },
            attributes: [
                {
                    widget: 'tooltip',
                    widgetProps: {
                        title: "Haloooo",
                        children: <Icons type={'FlagOutlined'} className="text-red-500"/>
                    }
                },
                {
                    widget: 'badge',
                    widgetProps: {
                        count: 2,
                        showZero: true,
                    }
                },
                {
                    widget: 'tag',
                    widgetProps: {
                        label: 'IN PROGRESS',
                        color: 'blue',
                        textColor: ''
                    }
                },
            ]
        },
        {
            id: 4,
            type: 'epic',
            projectKey: 'FE-2',
            summary: "Auth Register UI",
            epic: {
                label: "QUICK WINDS",
                color: '#11a0a4',
                textColor: "text-white"
            },
            attributes: [
                {
                    widget: 'tooltip',
                    widgetProps: {
                        title: "Haloooo",
                        children: <Icons type={'FlagOutlined'} className="text-red-500"/>
                    }
                },
                {
                    widget: 'badge',
                    widgetProps: {
                        count: 2,
                        showZero: true,
                    }
                },
                {
                    widget: 'tag',
                    widgetProps: {
                        label: 'IN PROGRESS',
                        color: 'blue',
                        textColor: ''
                    }
                },
            ]
        },
        {
            id: 3,
            type: 'bug',
            projectKey: 'CN-03',
            summary: "Content Audit",
            epic: {
                label: "QUICK WINDS",
                color: '#11a0a4',
                textColor: "text-white"
            },
            attributes: [
                {
                    widget: 'tooltip',
                    widgetProps: {
                        title: "Haloooo",
                        children: <Icons type={'FlagOutlined'} className="text-red-500"/>
                    }
                },
                {
                    widget: 'badge',
                    widgetProps: {
                        count: 1,
                        showZero: true,
                    }
                },
                {
                    widget: 'tag',
                    widgetProps: {
                        label: 'IN PROGRESS',
                        color: 'blue',
                        textColor: ''
                    }
                },
            ]
        },
        {
            id: 1,
            type: 'story',
            projectKey: 'CN-01',
            summary: "Update project plan with key milestones",
            epic: {
                label: "QUICK WINDS",
                color: '#11a0a4',
                textColor: "text-white"
            },
            attributes: [
                {
                    widget: 'tooltip',
                    widgetProps: {
                        title: "Haloooo",
                        children: <Icons type={'FlagOutlined'} className="text-red-500"/>
                    }
                },
                {
                    widget: 'badge',
                    widgetProps: {
                        count: 4,
                        showZero: true,
                    }
                },
                {
                    widget: 'tag',
                    widgetProps: {
                        label: 'IN PROGRESS',
                        color: 'blue',
                        textColor: ''
                    }
                },
            ]
        },
        {
            id: 2,
            type: 'epic',
            projectKey: 'FE-1',
            summary: "Auth login ui",
            epic: {
                label: "QUICK WINDS",
                color: '#11a0a4',
                textColor: "text-white"
            },
            attributes: [
                {
                    widget: 'tooltip',
                    widgetProps: {
                        title: "Haloooo",
                        children: <Icons type={'FlagOutlined'} className="text-red-500"/>
                    }
                },
                {
                    widget: 'badge',
                    widgetProps: {
                        count: 2,
                        showZero: true,
                    }
                },
                {
                    widget: 'tag',
                    widgetProps: {
                        label: 'IN PROGRESS',
                        color: 'blue',
                        textColor: ''
                    }
                },
            ]
        },
        {
            id: 4,
            type: 'epic',
            projectKey: 'FE-2',
            summary: "Auth Register UI",
            epic: {
                label: "QUICK WINDS",
                color: '#11a0a4',
                textColor: "text-white"
            },
            attributes: [
                {
                    widget: 'tooltip',
                    widgetProps: {
                        title: "Haloooo",
                        children: <Icons type={'FlagOutlined'} className="text-red-500"/>
                    }
                },
                {
                    widget: 'badge',
                    widgetProps: {
                        count: 2,
                        showZero: true,
                    }
                },
                {
                    widget: 'tag',
                    widgetProps: {
                        label: 'IN PROGRESS',
                        color: 'blue',
                        textColor: ''
                    }
                },
            ]
        },
        {
            id: 3,
            type: 'bug',
            projectKey: 'CN-03',
            summary: "Content Audit",
            epic: {
                label: "QUICK WINDS",
                color: '#11a0a4',
                textColor: "text-white"
            },
            attributes: [
                {
                    widget: 'tooltip',
                    widgetProps: {
                        title: "Haloooo",
                        children: <Icons type={'FlagOutlined'} className="text-red-500"/>
                    }
                },
                {
                    widget: 'badge',
                    widgetProps: {
                        count: 1,
                        showZero: true,
                    }
                },
                {
                    widget: 'tag',
                    widgetProps: {
                        label: 'IN PROGRESS',
                        color: 'blue',
                        textColor: ''
                    }
                },
            ]
        },
        {
            id: 1,
            type: 'story',
            projectKey: 'CN-01',
            summary: "Update project plan with key milestones",
            epic: {
                label: "QUICK WINDS",
                color: '#11a0a4',
                textColor: "text-white"
            },
            attributes: [
                {
                    widget: 'tooltip',
                    widgetProps: {
                        title: "Haloooo",
                        children: <Icons type={'FlagOutlined'} className="text-red-500"/>
                    }
                },
                {
                    widget: 'badge',
                    widgetProps: {
                        count: 4,
                        showZero: true,
                    }
                },
                {
                    widget: 'tag',
                    widgetProps: {
                        label: 'IN PROGRESS',
                        color: 'blue',
                        textColor: ''
                    }
                },
            ]
        },
        {
            id: 2,
            type: 'epic',
            projectKey: 'FE-1',
            summary: "Auth login ui",
            epic: {
                label: "QUICK WINDS",
                color: '#11a0a4',
                textColor: "text-white"
            },
            attributes: [
                {
                    widget: 'tooltip',
                    widgetProps: {
                        title: "Haloooo",
                        children: <Icons type={'FlagOutlined'} className="text-red-500"/>
                    }
                },
                {
                    widget: 'badge',
                    widgetProps: {
                        count: 2,
                        showZero: true,
                    }
                },
                {
                    widget: 'tag',
                    widgetProps: {
                        label: 'IN PROGRESS',
                        color: 'blue',
                        textColor: ''
                    }
                },
            ]
        },
        {
            id: 4,
            type: 'epic',
            projectKey: 'FE-2',
            summary: "Auth Register UI",
            epic: {
                label: "QUICK WINDS",
                color: '#11a0a4',
                textColor: "text-white"
            },
            attributes: [
                {
                    widget: 'tooltip',
                    widgetProps: {
                        title: "Haloooo",
                        children: <Icons type={'FlagOutlined'} className="text-red-500"/>
                    }
                },
                {
                    widget: 'badge',
                    widgetProps: {
                        count: 2,
                        showZero: true,
                    }
                },
                {
                    widget: 'tag',
                    widgetProps: {
                        label: 'IN PROGRESS',
                        color: 'blue',
                        textColor: ''
                    }
                },
            ]
        },
        {
            id: 3,
            type: 'bug',
            projectKey: 'CN-03',
            summary: "Content Audit",
            epic: {
                label: "QUICK WINDS",
                color: '#11a0a4',
                textColor: "text-white"
            },
            attributes: [
                {
                    widget: 'tooltip',
                    widgetProps: {
                        title: "Haloooo",
                        children: <Icons type={'FlagOutlined'} className="text-red-500"/>
                    }
                },
                {
                    widget: 'badge',
                    widgetProps: {
                        count: 1,
                        showZero: true,
                    }
                },
                {
                    widget: 'tag',
                    widgetProps: {
                        label: 'IN PROGRESS',
                        color: 'blue',
                        textColor: ''
                    }
                },
            ]
        },
    ];
    const [selected, setSelected] = useState<TicketProps | null>(null);
    const [listIdSelected, setListIdSelected] = useState<number[]>([]);

    let timeout: any;
    const onSelected = (item: TicketProps) => {
        timeout = setTimeout(() => {
            if (selected) {
                setSelected(selected && selected?.id === item?.id ? null : item);
            } else {
                setSelected(item);
            }
            clearTimeout(timeout);
        }, 200);

    }

    return (
        <ScrumLayoutContent
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
                                            icon: <Icons type={'FlagOutlined'}/>,
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
                        <div className="flex-1 w-full h-full bg-card dark:bg-card-dark rounded-lg overflow-hidden">
                            <Scrollbars autoHide>
                                <div className="w-full">
                                    {ticketData.map((item) => {
                                        return (
                                            <TicketItem
                                                {...item}
                                                key={item.projectKey}
                                                // selected={false}
                                                onClick={() => {
                                                    onSelected(item);
                                                }}
                                                selected={listIdSelected.includes(item?.id ?? 0)}
                                                onSelect={(event) => {
                                                    if (event.target.checked) {
                                                        listIdSelected.push(item.id)
                                                        setListIdSelected([...listIdSelected])
                                                    } else {
                                                        setListIdSelected((prevState) => [...prevState.filter((i) => i != item.id)])
                                                    }
                                                }}
                                            />
                                        )
                                    })}
                                </div>
                            </Scrollbars>
                        </div>
                    </div>


                    {
                        selected && (
                            <motion.div
                                initial={{
                                    x: 400, opacity: 0,
                                    width: 0,
                                }}
                                animate={{
                                    x: 0,
                                    opacity: 1,
                                }}
                                exit={{x: 400, opacity: 0, width: 400,}}
                                transition={{type: "tween", duration: 0.3}}
                                className={[
                                    "w-[400px] lg:flex h-full rounded-lg overflow-hidden space-y-6 flex-col",
                                ].join(' ')}
                            >
                                <TicketShowCase
                                    id={1}
                                    title={selected?.summary ?? ''}
                                    status={{
                                        current: {
                                            label: "in Progress",
                                            variant: "filled",
                                            color: 'blue'
                                        }
                                    }}
                                    description={'Lorem ipsum dolor sit amet'}
                                    onChangeDescription={function (event: any): void {
                                        throw new Error('Function not implemented.');
                                    }}/>
                            </motion.div>
                        )
                    }
                </section>
            </div>
        </ScrumLayoutContent>
    )
}

Page.layout = (children: React.ReactNode) => {
    // @ts-ignore
    return <TheLayout isFooter={false}><ScrumLayout children={children}/></TheLayout>
};

export default Page;
