import React, {useState} from 'react';
import TheLayout from "@/Components/layouts/DefaultLayout/TheLayout";

import {Button, Divider, Flex,Row, Col, Typography} from "antd";
import {Icons} from "@/Components/general/Icons";
import FooterLayout from "@/Components/layouts/footer.layout";
import TheContainer from "@/Components/general/TheContainer";

const { Title, Text } = Typography;

type CardSubscriptionType = {
  uniqKey: string;
  type: string | 'custom';
  description?: string;
  name: string;
  price: string | null;
  features: string[];
  buttonText: string;
  button?: any;
} & {
  active: string;
}

const subscriptionPlans: Omit<CardSubscriptionType,'active' | 'type'>[] = [
  {
    uniqKey: 'pro',
    name: 'Pro',
    price: '2500',
    description: 'Ideal for those who’ve already got their website up and running and are seeking assistance to enhance and update it further.',
    features: [
      '3–5 day turnaround',
      'Native Development',
      'Task delivered one-by-one',
      'Dedicated dashboard',
      'Updates via Dashboard & Slack',
    ],
    buttonText: 'Get started',
    button: {
      type: "default"
    }
  },
  {
    uniqKey: 'proPlus',
    name: 'Pro Plus',
    price: '3800',
    description: 'Ideal if you want to build or scale your website fast, with the strategy calls included.',
    features: [
      '1–3 day turnaround',
      'Monthly strategy call',
      'Commercial license',
      'Native Development',
      'Tasks delivered one-by-one',
      'Dedicated dashboard',
      'Updates via Dashboard & Slack',
    ],
    buttonText: 'Get started',
    button: {
      type: "default"
    }
  },
  {
    uniqKey: 'custom',
    name: 'Custom',
    price: null,
    description: 'If these plans don’t fit, let’s create one that suits. Customize your subscription for a perfect fit, bigger or smaller!',
    features: [
      'Everything in design & development',
      'Strategy workshop',
      'Priority support',
      'Multiple tasks at once',
      'Ongoing autonomous A/B testing',
      'Advanced custom development',
    ],
    buttonText: 'Book a Call',
    button: {
      type: "primary",
    }

  },
];

const Page = () => {
  const [active, setActive] = useState<string>('monthly')

  return (
    <React.Fragment>
      <div className="space-y-10 py-10">
        <section>
          <Typography.Title level={1} className="!text-2xl text-center">Choose Your right plan!</Typography.Title>
          <Typography.Paragraph className="m-0 text-center">Select from plans, ensuring a perfect match.Need more or
            less?</Typography.Paragraph>
          <Typography.Paragraph className="m-0 text-center">Customize your subscription for a seamless
            fit!</Typography.Paragraph>
        </section>

        <Flex gap={10} justify="center">
          <Button
            type={active === "monthly" ? 'primary' : "default"}
            shape="round"
            size="large"
            className="px-10"
            onClick={()=> setActive('monthly')}
          >Monthly</Button>
          <Button
            type={active === "yearly" ? 'primary' : "default"}
            shape="round"
            size="large"
            className="px-10"
            onClick={()=> setActive('yearly')}
          >Yearly</Button>
        </Flex>

        <section id="card-subscription">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
            {subscriptionPlans.map((child, index: number)=> {
              return (
                <CardSubscription {...child} active={active} type={child.uniqKey}/>
              )
            })}
          </div>
        </section>
      </div>
      <FooterLayout className="py-20">
        <TheContainer>
          <FAQSection/>
        </TheContainer>
      </FooterLayout>
    </React.Fragment>
  )
};


const FAQSection = () => {
  return (
    <React.Fragment>
      <Title level={2} style={{ textAlign: 'center', marginBottom: '40px' }}>Frequently Asked Questions</Title>
      <Row gutter={[16, 32]}>
        <Col xs={24} md={12}>
          <Title level={4}>Is the service cost-effective?</Title>
          <Text>
            Our pricing is designed to provide maximum value for businesses looking to scale with advanced tools and dedicated support.
          </Text>
        </Col>
        <Col xs={24} md={12}>
          <Title level={4}>How do I get started?</Title>
          <Text>
            Simply sign up through our platform, select the plan that best suits your needs, and our team will guide you through the setup process.
          </Text>
        </Col>
        <Col xs={24} md={12}>
          <Title level={4}>Is my data secure?</Title>
          <Text>
            We use the latest encryption technologies to ensure your data is protected, and our servers are compliant with industry standards.
          </Text>
        </Col>
        <Col xs={24} md={12}>
          <Title level={4}>Are there any discounts?</Title>
          <Text>
            Yes! We offer special discounts for annual subscriptions, and promotions are regularly updated on our website.
          </Text>
        </Col>
      </Row>
    </React.Fragment>
  );
};
const CardSubscription: React.FC<CardSubscriptionType> = (props)=> {
  return (
    <div className="col-span-1 p-8 dark:bg-card-dark bg-white rounded-xl" key={props.uniqKey}>
      <div className="flex flex-col w-full h-[500px]">
        <div className="">
          <div className="min-h-[160px]">
            <Typography.Title level={3} className="text-2xl">{props.name}</Typography.Title>
            <Typography.Paragraph>{props.description}</Typography.Paragraph>
          </div>
          <Flex align="end" gap={4} justify="start">
            <Typography
              className="text-3xl font-pro-bold">{props.uniqKey === 'custom' ? 'Let\'s Talk' : ['$', parseInt(props?.price ?? "0") * (props.active === 'yearly' ? 11 : 1)].join('')}</Typography>
            {props.uniqKey !== 'custom' && <Typography>/{props.active.replace(/ly/g, ' ')}</Typography>}
          </Flex>
        </div>
        <Divider/>
        <div className="space-y-2 flex-1 h-full">
          {
            Array.isArray(props?.features) &&
            props.features.length > 0 &&
            props.features.map((item: string) => {
              return (
                <Flex gap={10} key={item}>
                  <Icons type={'CheckOutlined'} className="text-green-500"/>
                  <Typography className="!text-sm">{item}</Typography>
                </Flex>
              )
            })
          }
        </div>
        <Button {...props?.button} size="large">{props.buttonText}</Button>
      </div>
    </div>
  )
}


Page.layout = (children: any) => <TheLayout type="dashboard" isFooter={false} hasContainer children={children}/>;

export default Page;
