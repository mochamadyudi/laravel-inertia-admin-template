import React from 'react';

import {Badge, Button, Divider, Layout, Splitter, Typography} from "antd";
import {
  FolderOutlined,
  MessageOutlined,
  PhoneOutlined,
  SettingOutlined,
  StarOutlined,
  TeamOutlined
} from '@ant-design/icons';
import {Icons} from "@/Components/general/Icons";
import {
  ChatContentProps,
  ChatLayoutProps,
  ChatToolbarProps,
  StateChatProps
} from "@/Pages/Dashboard/App/Chat/partials/chat.type";
import Animation from "@/assets/lotties/chat.json";
import Lotties from "@/Components/general/Lotties";
import ListChat from "@/Pages/Dashboard/App/Chat/partials/list.chat";
import {router} from "@inertiajs/react";
import HeaderSider from "@/Pages/Dashboard/App/Chat/partials/header.sider";
import {Scrollbars} from "react-custom-scrollbars";
import ConversationChat from "@/Pages/Dashboard/App/Chat/partials/conversation.chat";

const Toolbar: React.FC<ChatToolbarProps> = ({ show, ...props}) => {
  return show && (
    <div className="app-chat-toolbar">
      <div className="app-chat-toolbar--left">
        {
          props?.backButton && props.backButton?.show && (
            <Button
              {...props?.backButton}
              type="text"
              icon={props?.backButton?.icon ?? <Icons type={'LeftOutlined'}/>}
            />
          )
        }
        {typeof(props.title) === 'string' ? <Typography.Title level={3} className="app-chat-toolbar--title">{props?.title}</Typography.Title> : props?.title}
      </div>
      <div className="app-chat-toolbar--right">
        {props?.extra}
      </div>
    </div>
  )
}
const Content: React.FC<ChatContentProps> = ({toolbar, children, ...props}) => {
  return (
    <Layout className="app-chat-content">
      <Toolbar {...toolbar}/>
      <Layout.Content className="app-chat-content--content">
        {children}
      </Layout.Content>
    </Layout>
  )
};
const StartedContent: React.FC<any> = () => {
  return (
    <div className="app-chat-started">
      <Lotties height={250} animation={Animation}/>
      <Typography.Paragraph>Select a chat to start messaging</Typography.Paragraph>
    </div>
  )
}


class Chat extends React.Component<ChatLayoutProps> {
  constructor(props: ChatLayoutProps) {
    super(props);
    if(this.props?.state){
      this.state = {
        ...this.state,
        ...this.props?.state,
        width: {
          ...this.state.width,
          ...this.props?.state?.width
        }
      }
    }

  }

  state: StateChatProps = {
    active: 'chat',
    width: {
      menu: 80,
      sider: 280
    }
  }

  static Toolbar = Toolbar;
  static Content = Content;
  static List = ListChat;
  static LayoutConversation = ConversationChat;
  static SiderHeader = HeaderSider;
  static StartedContent = StartedContent;

  handleGo(route: string){
    router.visit(route)
  }

  render() {
    return (
      <React.Fragment>
        <Layout className="app-chat">
          <Layout.Sider width={this.state?.width?.menu ?? 80} className="app-chat-sider-menu">
            <div className="app-chat-menu">
              <div className="app-chat-menu-content">
                {this.props?.menu && this.props.menu?.addonAfter}
                <Badge dot offset={[-10, 10]}>
                  <Button
                    icon={<MessageOutlined className="text-xl"/>}
                    size="large"
                    ghost={this.state.active === 'chat'}
                    type={this.state.active === 'chat' ? 'primary' : 'text'}
                    onClick={() => this.handleGo(route('dashboard.app.chat.index'))}
                  />
                </Badge>
                <Badge dot offset={[-10, 10]}>
                  <Button
                    icon={<PhoneOutlined className="text-xl"/>}
                    size="large"
                    ghost={this.state.active === 'phone'}
                    type={this.state.active === 'phone' ? 'primary' : 'text'}
                    onClick={() => this.handleGo(route('dashboard.app.chat.log-call'))}
                  />
                </Badge>
                <Badge offset={[-10, 10]}>
                  <Button
                    icon={<TeamOutlined className="text-xl"/>}
                    size="large"
                    ghost={this.state.active === 'group'}
                    type={this.state.active === 'group' ? 'primary' : 'text'}
                  />
                </Badge>
                <Divider/>
                <Badge offset={[-10, 10]}>
                  <Button
                    icon={<FolderOutlined className="text-xl"/>}
                    size="large"
                    ghost={this.state.active === 'archive'}
                    type="text"
                  />
                </Badge>
                <Badge offset={[-10, 10]}>
                  <Button
                    icon={<StarOutlined className="text-xl"/>}
                    size="large"
                    ghost={this.state.active === 'starred'}
                    type="text"
                  />
                </Badge>
                {this.props?.menu && this.props.menu?.addonBefore}
              </div>
              <div className="app-chat-menu-footer">
                <Button
                  icon={<SettingOutlined/>}
                  size="large"
                  type="primary"
                  onClick={() => this.handleGo(route('dashboard.app.chat.settings'))}
                />
                {this.props?.menu && this.props.menu?.footer}
              </div>
            </div>
          </Layout.Sider>
          <Splitter >
            <Splitter.Panel className="" defaultSize={this.state?.width?.sider ?? 280} min={this.state?.width?.sider ?? 280}>
              {
                this.props?.sider && this.props.sider?.component ?
                    <Layout.Sider className={[
                      "app-chat-sider-addon",
                      this.props.sider?.search?.show ? 'has-search': null,
                    ].filter((child: string|null)=> child !== null).join(' ')}>
                      <Chat.SiderHeader {...this.props.sider}/>
                      <div className="app-chat-sider-content">
                        <Scrollbars autoHide>
                          {this.props.sider?.component}
                        </Scrollbars>
                      </div>
                    </Layout.Sider>  : (
                        <Layout.Sider className={[
                          "app-chat-sider-addon",
                          this.props.sider?.search?.show ? 'has-search' : null,
                        ].filter((child: string | null) => child !== null).join(' ')}>
                          <Chat.SiderHeader {...this.props.sider}/>
                          <Scrollbars autoHide>
                            <Chat.List/>
                          </Scrollbars>
                        </Layout.Sider>
                    )
              }
            </Splitter.Panel>
            <Splitter.Panel defaultSize="512" min={512}>
              <Layout.Content className="bg-transparent">
                <div className="app-chat-content">
                  {
                      this.props?.toolbar?.show && (
                          <Chat.Toolbar {...this.props.toolbar}/>
                      )
                  }
                  <div className="app-chat-content--content">
                    <Scrollbars autoHide>
                      {this.props?.children ? this.props.children : <Chat.StartedContent/>}
                    </Scrollbars>
                  </div>
                </div>
              </Layout.Content>
            </Splitter.Panel>
          </Splitter>

        </Layout>
      </React.Fragment>
    )
  }
}

export default Chat
