import React, {useState} from 'react';
import TheLayout from "@/Components/layouts/DefaultLayout/TheLayout";
import {Button, Col, Divider, Flex, Image, message, Row, Typography} from "antd";
import TheContainer from "@/Components/general/TheContainer";
import {Icons} from "@/Components/general/Icons";
import ConnectionProfilePartial from "@/Pages/Dashboard/Pages/App/partials/connection.profile.partial";
import DefaultTab from "@/Components/data-display/Tabs/default.tab";
import OverviewProfilePartial from "@/Pages/Dashboard/Pages/App/partials/overview.profile.partial";
import AccessDeniedProfilePartial from './partials/access-denied.profile.partial';

const Page = () => {
    const [loading, setLoading] = useState<boolean>(false);
    function _onFollow(){
        setLoading(true);
        let timeout = setTimeout(()=> {
            setLoading(false)
            message.success('Successfully Follow')
            clearTimeout(timeout);
        },2000)

    }
    return (
        <React.Fragment>
            <TheContainer>
                <Row gutter={[48, 48]}>
                    <Col
                        xs={{
                            span: 24,
                            order: 1,
                        }}
                        lg={{
                            span: 7,
                            order: 1
                        }}
                        className={'space-y-6'}
                    >
                        <section className="space-y-6">
                            <div className="flex items-center justify-center">
                                <div className="w-[250px] h-[250px] rounded-full overflow-hidden">
                                    <Image
                                        src="/assets/img/profile/thumb-1.png"
                                        srcSet="/assets/img/profile/thumb-1.png"
                                        alt="/assets/img/profile/thumb-1.png"
                                        className="w-[250px] h-[250px] rounded-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="w-full">
                                <Typography.Title level={1} className={'!text-2xl !m-0 !p-0'}>Mochamad Yudi
                                    Sobari</Typography.Title>
                                <Typography.Paragraph className={'!text-lg !mb-2'}>mochamadyudi</Typography.Paragraph>
                                <Typography.Text className={''}>I've got a dream worth more than my
                                    sleep.</Typography.Text>
                            </div>
                            <Flex gap={10}>
                                <Button
                                    loading={loading}
                                    type={'primary'}
                                    className={'!w-full'}
                                    onClick={_onFollow}
                                >Follow</Button>
                                <Button className={'!w-full'}>Message</Button>
                            </Flex>
                            <div>
                                <Flex gap={10}>
                                    <Typography.Paragraph className={'!mb-1.5'}><Icons type={'MailOutlined'}/></Typography.Paragraph>
                                    <Typography className={'!mb-1.5'}><a
                                        href="mailto:myudisobari12@gmail.com">myudisobari12@gmail.com</a></Typography>
                                </Flex>
                                <Flex gap={10}>
                                    <Typography.Paragraph className={'!mb-1.5'}><Icons type={'PhoneOutlined'}/></Typography.Paragraph>
                                    <Typography className={'!mb-1.5'}>+6285718851007</Typography>
                                </Flex>
                                <Flex gap={10}>
                                    <Typography.Paragraph className={'!mb-1.5'}><Icons type={'EnvironmentOutlined'}/></Typography.Paragraph>
                                    <Typography className={'!mb-1.5'}>Jawa Barat, Indonesia</Typography>
                                </Flex>
                                <Flex gap={10}>
                                    <Typography.Paragraph className={'!mb-1.5'}><Icons type={'GlobalOutlined'}/></Typography.Paragraph>
                                    <Typography className={'!mb-1.5'}><a href={'https://yuyuid.id'}
                                                   target={'_blank'}>{'yuyuid.id'}</a></Typography>
                                </Flex>
                            </div>
                        </section>
                        <Divider/>
                        <ConnectionProfilePartial/>
                    </Col>
                    <Col
                        xs={{
                            span: 24,
                            order: 1,
                        }}
                        lg={{
                            span: 17,
                            order: 1
                        }}
                    >
                        <DefaultTab
                            isDefault={false}
                            tabKey={'tab'}
                            parameter={{}}

                            tabs={{
                                type: 'line',
                                defaultActiveKey: 'overview',
                                items: [
                                    {
                                        key: 'overview',
                                        label: 'Overview',
                                        icon: <Icons type={'GlobalOutlined'}/>,
                                        children: <OverviewProfilePartial/>,
                                    }
                                ]
                            }}
                        />
                    </Col>
                </Row>
            </TheContainer>
        </React.Fragment>
    )
}

Page.layout = (children: React.ReactNode) => <TheLayout type={'dashboard'} hasContainer isFooter children={children}/>;
export default Page;
