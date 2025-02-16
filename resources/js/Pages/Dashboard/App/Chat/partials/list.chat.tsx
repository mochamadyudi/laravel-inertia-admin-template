import React, {useEffect} from 'react';
import {MessageListData} from "@/Pages/Dashboard/App/Chat/handlers/data";
import AvatarStatus from "@/Components/general/AvatarStatus";
import {Empty, Spin, Typography} from "antd";
import {Utils} from "@/Utils";
import {router} from "@inertiajs/react";
import {useDispatch, useSelector} from "react-redux";
import {getChatList} from "@/Redux/actions/chat";

export interface ListChatProps {
  active?: {
    key: string | string[];
    value: string | number | undefined;
  }
}

interface ListChatItemProps {
  active: boolean;

  [k: string]: any;
}

const Item: React.FC<ListChatItemProps> = ({active, ...props}) => {
  function _onClick() {
    router.visit(route('dashboard.app.chat.show', {id: props?.id}))
  }

  return (
    <div
      className={[
        'app-chat-list-item',
        'cursor-pointer',
        active ? 'active' : null
      ].filter((item: string | null) => item !== null).join(' ')}
      onClick={_onClick}
    >
      <AvatarStatus
        avatar={{
          src: props?.avatar ?? "",
          preview: false,
        }}
        name={props?.name}
        subTitle={
          <Typography className="text-slate-400  dark:text-slate-500">{props?.lastMessage?.content}</Typography>
        }
      />
    </div>
  )
}

const ListChat: React.FC<ListChatProps> = (props) => {
  const state = useSelector(({ chat }: any)=> chat);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChatList({ params: {} }))
  }, []);
  function getActive(item: any){
    if(props?.active && props?.active?.key){
      return Utils.getDeepValue(item, props?.active?.key) === props?.active?.value
    }
    return false;

  }
  return (
    <Spin spinning={state.loading} className="h-full">
      <div className="app-chat-list">
        {
          Array.isArray(state.data) &&
          state.data.length > 0 ?
            state.data.map((child: any) => {
              return (
                <Item
                  {...child}
                  key={`${child?.id}-${Math.random()}`}
                  active={getActive(child)}
                />
              )
            }) :
            <div className="w-full h-full flex items-center justify-center">
              <Empty/>
            </div>
        }
      </div>
    </Spin>
  )
}
export default ListChat;
