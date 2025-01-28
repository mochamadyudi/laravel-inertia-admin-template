import React from 'react';
import {Avatar, Typography} from "antd";

const ConnectionProfilePartial: React.FC = () => {
  const data = [
    "/assets/img/profile/1.png",
    "/assets/img/profile/2.png",
    "/assets/img/profile/3.png",
    "/assets/img/profile/4.png",
    "/assets/img/profile/5.png",
    "/assets/img/profile/1.png",
    "/assets/img/profile/2.png",
    "/assets/img/profile/3.png",
    "/assets/img/profile/4.png",
    "/assets/img/profile/5.png",
  ];
  return (
    <React.Fragment>
      <section className={'space-y-4'}>
        <Typography.Title level={3}>Connections</Typography.Title>
        <div className={'w-full flex flex-wrap gap-1 relative'}>
          {
            data
              .slice(0, 7)
              .map((avatar: string, index: number) => {
                return (
                  <div className="w-[40px] min-w-[40px] h-[40px] rounded-full">
                    <Avatar
                      src={avatar}
                      alt={avatar}
                      size={40}
                    />
                  </div>
                )
              })
          }
          {
            data.length > 7 && (
              <div className="w-[40px] min-w-[40px] h-[40px] bg-[--ant-color-primary] transition duration-200 hover:bg-[--ant-color-primary-hover] cursor-default rounded-full flex items-center justify-center">
                <Typography className={'!text-md !font-bold !text-[--ant-color-white]'}>{[data.slice(7).length,'+'].join('')}</Typography>
              </div>
            )
          }

        </div>
      </section>
    </React.Fragment>
  )
}

export default ConnectionProfilePartial;
