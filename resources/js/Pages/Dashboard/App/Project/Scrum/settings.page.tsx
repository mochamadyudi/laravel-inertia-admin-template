import React, {ReactNode, useState} from 'react';
import {Form, Input, Row, Col, Divider, Select, Flex, Avatar, Button, Typography} from "antd";
import ScrumLayout from "@/Pages/Dashboard/App/Project/Scrum/partials/scrum.layout";
import {DeleteOutlined, SaveOutlined} from "@ant-design/icons";
import EllipsisDropdown from "@/Components/general/Dropdown/EllipsisDropdown";

const dataUser = [
  {label: 'Select options', value: null},
  {
    label: 'John Doe',
    value: 'john',
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    label: 'Jane Smith',
    value: 'jane',
    avatar: 'https://i.pravatar.cc/150?img=2',
  },
  {
    label: 'Robert Brown',
    value: 'robert',
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
];
const Page = (props: any) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <React.Fragment>
      <ScrumLayout.Content
        title="Settings"
        useBreadcrumb
        extra={()=> {
          return (
            <React.Fragment>
              <EllipsisDropdown
                menu={{
                  items: [
                    {
                      key: "delete-project",
                      danger: true,
                      label: "Delete Project",
                      icon: <DeleteOutlined/>,
                      onClick: function(){

                      }
                    }
                  ]
                }}
              />
            </React.Fragment>
          )
        }}
      >
        <Form
          form={form}
          layout={'vertical'}
          initialValues={{}}
        >
          <Row gutter={48}>
            <Col xs={24} lg={16}>
              <Form.Item name={['project', 'name']} label="Project Name" rules={[{required: true}]}>
                <Input placeholder="Input name" disabled={loading}/>
              </Form.Item>
              <Form.Item name={['project', 'key']} label="Project Key" rules={[{required: true}]}>
                <Input placeholder="Input Project key" disabled={loading}/>
              </Form.Item>
              <Form.Item name={['project', 'category']} label="Category" rules={[{required: true}]}>
                <Select
                  key={'project-category-select'}
                  labelRender={(props)=> {
                    if (props?.value) {
                      return props?.value;
                    }
                    return <span>No option match</span>;
                  }}
                  defaultValue={""}
                  options={[
                    {label: 'Select options', value: ''},
                    {label: 'Website Development', value: 'website'},
                    {label: 'Mobile App', value: 'mobile'},
                    {label: 'UI/UX Design', value: 'design'},
                    {label: 'Machine Learning', value: 'ml'},
                    {label: 'Data Analysis', value: 'data'},
                    {label: 'DevOps & Infrastructure', value: 'devops'},
                    {label: 'Game Development', value: 'game'},
                    {label: 'E-commerce', value: 'ecommerce'},
                    {label: 'IoT Projects', value: 'iot'},
                    {label: 'AR/VR', value: 'arvr'},
                    {label: 'Blockchain & Web3', value: 'web3'},
                    {label: 'API Development', value: 'api'},
                    {label: 'CMS Customization', value: 'cms'},
                  ]}
                />
              </Form.Item>

              <Form.Item name={['project', 'lead']} label="Project Lead" rules={[]}>
                <Select
                  showSearch
                  allowClear
                  key={'project-lead-select'}
                  defaultValue={null}
                >
                  {dataUser.map((child: any)=> {
                    return (
                      <Select.Option key={child?.value} value={child?.value} data={child}>
                        <div style={{display: 'flex', alignItems: 'center', gap: 8}}>
                          {child?.avatar && <Avatar size="small" src={child.avatar}/>}
                          <span>{child.label}</span>
                        </div>
                      </Select.Option>
                    )
                  })}

                </Select>
              </Form.Item>
              <Form.Item name={['project', 'assignee']} label="Default Assignee" rules={[]}>
                <Select
                  key={'project-category-select'}
                  labelRender={(props)=> {
                    if (props?.value) {
                      return props?.value;
                    }
                    return <span>Unassigned</span>;
                  }}
                  defaultValue={""}
                  options={[
                    {label: 'Unassigned', value: ''},
                    {label: 'Project Lead', value: 'lead'},
                  ]}
                />
              </Form.Item>
              <Button
                type="primary"
                size="large"
                className="px-10"
                icon={<SaveOutlined/>}
              >Save</Button>
            </Col>
          </Row>
        </Form>
      </ScrumLayout.Content>
    </React.Fragment>
  )
}

Page.layout = (children: ReactNode) => <ScrumLayout  children={children} />;

export default Page;
