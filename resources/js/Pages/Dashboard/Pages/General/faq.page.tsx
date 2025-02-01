import React, {useState} from 'react';
import TheLayout from "@/Components/layouts/DefaultLayout/TheLayout";
import PageHeaderAlt from "@/Components/general/PageHeaderAlt";
import {Button, Card, Col, Collapse, Flex, Input, Row, Typography} from "antd";
import {Icons} from "@/Components/general/Icons";
import { first } from 'lodash';

const Page = () => {
  const [active, setActive] = useState<string>('general')
  const menus = [
    {
      key: "general",
      icon: "GlobalOutlined",
      label: "General"
    },
    {
      key: "pricing",
      icon: "DollarOutlined",
      label: "Pricing"
    },
    {
      key: "dashboard",
      icon: "DashboardOutlined",
      label: "Dashboard"
    },
    {
      key: "api",
      icon: "ApiOutlined",
      label: "API"
    },
    {
      key: "system",
      icon: "DesktopOutlined",
      label: "System"
    },
    {
      key: "style-guide",
      icon: "SettingOutlined",
      label: "Style Guide"
    },
  ]

  const options = [
    {
      type: 'general',
      data: [
        {
          key: 'What is this platform?',
          label: 'What is this platform?',
          children: 'This platform is a complete solution for project management, offering features like task tracking, team collaboration, analytics, and more.',
        },
        {
          key: 'How do I sign up?',
          label: 'How do I sign up?',
          children: 'You can sign up through the "Sign Up" button on the homepage. Simply follow the steps to provide your details.',
        },
        {
          key: 'Can I use this platform on mobile?',
          label: 'Can I use this platform on mobile?',
          children: 'Yes, the platform is mobile-friendly and accessible via any mobile browser.',
        },
      ],
    },
    {
      type: 'pricing',
      data: [
        {
          key: 'Is there a free version of the platform?',
          label: 'Is there a free version of the platform?',
          children: 'Yes, we offer a free version with limited features. For more advanced features, you can upgrade to one of our premium plans.',
        },
        {
          key: 'How can I upgrade my plan?',
          label: 'How can I upgrade my plan?',
          children: 'You can upgrade your plan through your account settings. Go to the "Subscription" section and choose the plan that suits your needs.',
        },
        {
          key: 'Do you offer discounts for non-profits?',
          label: 'Do you offer discounts for non-profits?',
          children: 'Yes, we provide special discounts for non-profit organizations. Please contact our sales team for more information.',
        },
        {
          key: 'What payment methods are accepted?',
          label: 'What payment methods are accepted?',
          children: 'We accept payments via credit card, PayPal, and bank transfer.',
        },
      ],
    },
    {
      type: 'dashboard',
      data: [
        {
          key: 'What can I do from the dashboard?',
          label: 'What can I do from the dashboard?',
          children: 'The dashboard provides an overview of your project activities, including tasks, progress tracking, and analytics. It also includes various projects such as Mail, Chat, Calendar, Project (Scrum), and eCommerce management.',
        },
        {
          key: 'Can I customize my dashboard layout?',
          label: 'Can I customize my dashboard layout?',
          children: 'Yes, you can customize the layout and widgets on your dashboard to suit your preferences, including rearranging the Mail, Chat, Calendar, Project (Scrum), and eCommerce sections.',
        },
        {
          key: 'How do I add team members to my dashboard?',
          label: 'How do I add team members to my dashboard?',
          children: 'You can add team members via the "Settings" menu on the dashboard. Go to the "Team Members" section and invite new members using their email addresses.',
        },
        {
          key: 'What is the Mail project in the dashboard?',
          label: 'What is the Mail project in the dashboard?',
          children: 'The Mail project allows you to manage your email communications directly from the dashboard. You can send, receive, and organize emails without leaving the platform.',
        },
        {
          key: 'How does the Chat project work?',
          label: 'How does the Chat project work?',
          children: 'The Chat project enables real-time messaging with your team. You can create chat rooms, share files, and maintain communication within your project workflows.',
        },
        {
          key: 'What features does the Calendar project offer?',
          label: 'What features does the Calendar project offer?',
          children: 'The Calendar project helps you schedule and manage important events, deadlines, and meetings. You can sync it with external calendars and receive reminders for upcoming events.',
        },
        {
          key: 'What is the Project (Scrum) feature?',
          label: 'What is the Project (Scrum) feature?',
          children: 'The Project (Scrum) feature allows you to manage tasks and sprints in an agile workflow. You can organize user stories, assign tasks, and track progress using Scrum boards.',
        },
        {
          key: 'How can I manage my eCommerce activities from the dashboard?',
          label: 'How can I manage my eCommerce activities from the dashboard?',
          children: 'The eCommerce project helps you manage online sales, track orders, update product listings, and analyze sales performance directly from the dashboard.',
        },
      ],
    },
    {
      type: 'api',
      data: [
        {
          key: 'Is the API available for users?',
          label: 'Is the API available for users?',
          children: 'Yes, we offer an API that users can use to integrate our platform with third-party applications.',
        },
        {
          key: 'How can I obtain an API Key?',
          label: 'How can I obtain an API Key?',
          children: 'You can get your API Key through the account settings under "API Access". Click the "Generate API Key" button to create your key.',
        },
        {
          key: 'Are there any API usage limits?',
          label: 'Are there any API usage limits?',
          children: 'API usage limits depend on the plan you choose. Please refer to our documentation for more details on usage limits per plan.',
        },
        {
          key: 'Where can I find the API documentation?',
          label: 'Where can I find the API documentation?',
          children: 'API documentation is available at [API documentation link]. We provide comprehensive guides on endpoints and how to use them.',
        },
      ],
    },
    {
      type: 'system',
      data: [
        {
          key: 'Does the platform support Single Sign-On (SSO)?',
          label: 'Does the platform support Single Sign-On (SSO)?',
          children: 'Yes, we support SSO with various providers, such as Google and Microsoft.',
        },
        {
          key: 'How long is the system maintenance downtime?',
          label: 'How long is the system maintenance downtime?',
          children: 'We perform routine maintenance with minimal downtime, and we notify users in advance.',
        },
        {
          key: 'Is my data secure on this platform?',
          label: 'Is my data secure on this platform?',
          children: 'Yes, we ensure the security of your data through encryption and strict security standards.',
        },
        {
          key: 'Is there a backup for my data?',
          label: 'Is there a backup for my data?',
          children: 'Yes, we automatically perform regular backups of your data.',
        },
      ],
    },
    {
      type: 'style-guide',
      data: [
        {
          key: 'Can I use a custom style guide for my team?',
          label: 'Can I use a custom style guide for my team?',
          children: 'Yes, you can create a custom style guide for your team to use across all projects.',
        },
        {
          key: 'Are there templates for the style guide?',
          label: 'Are there templates for the style guide?',
          children: 'We provide several style guide templates that you can customize according to your team\'s needs.',
        },
        {
          key: 'How do I set up a style guide for my project?',
          label: 'How do I set up a style guide for my project?',
          children: 'You can set up a style guide through the project settings under the "Style Guide" section. Define design elements like colors, fonts, and more.',
        },
        {
          key: 'Can I export the style guide?',
          label: 'Can I export the style guide?',
          children: 'Yes, you can export your style guide in PDF format for offline reference or to share with your team.',
        },
        {
          key: 'How do I integrate Tailwind CSS in my project?',
          label: 'How do I integrate Tailwind CSS in my project?',
          children: 'To integrate Tailwind CSS, ensure that you install the Tailwind package, configure the `tailwind.config.js` file, and apply utility classes directly within your HTML, JSX, or Blade templates.',
        },
        {
          key: 'How do I use Ant Design components?',
          label: 'How do I use Ant Design components?',
          children: 'You can integrate Ant Design by installing the `antd` package and importing components into your project. Use their predefined styles and components such as buttons, forms, tables, etc., for quick UI implementation.',
        },
      ],
    },
  ];


  return (
    <React.Fragment>
      <PageHeaderAlt
        title={
        <div className="flex items-center justify-center flex-col">
          <Typography.Title level={1} className=" text-center">Search for Clarity Look at these phrases.</Typography.Title>
          <Typography.Paragraph className=" text-center text-lg">Are they concise? He mentioned my phrases - if they're concise,<br/>then surely something else is concise.</Typography.Paragraph>
          <div className="mt-4 w-full flex justify-center">
            <Input
              prefix={<Icons type="SearchOutlined"/>}
              className="w-full max-w-[420px] !rounded-full dark:bg-layout-dark dark:border-[--ant-color-primary] bg-[--ant-color-primary-bg] border border-[--ant-color-primary-border]"
              size="large"
            />
          </div>
        </div>
        }
        addonAfter={
          <Flex justify="center" gap={10} className="pt-14">
            {
              menus.map((child: any)=> {
                return (
                  <Button
                    key={child.key}
                    shape={'round'}
                    type={child.key === active ? "primary": "default"}
                    icon={<Icons type={child.icon} />}
                    onClick={()=> setActive(child.key)}
                  >{child.label}</Button>
                )
              })
            }
          </Flex>
        }
        className="pt-14 pb-6"
        contentClassName="py-6"
      >
        <div>
          <Card bordered={false}>
            {
              options
                .filter((child: { type: string })=> child.type === active)
                .map((child: { type: string; data: any[]}) => {
                  return (
                    <Collapse defaultActiveKey={[first(child.data)?.key]} ghost items={child.data} />
                  )
                })
            }
          </Card>
        </div>
      </PageHeaderAlt>
    </React.Fragment>
  )
};

Page.layout = (children: any) => <TheLayout type="dashboard" children={children} hasContainer/>;

export default Page;
