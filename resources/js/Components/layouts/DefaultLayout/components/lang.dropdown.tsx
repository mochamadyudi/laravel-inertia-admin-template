import React from 'react';
import {
  Button,
  Dropdown,
  Menu,
} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { first } from 'lodash';
import {onChangeLocale} from "@/Redux/actions/Theme";

const LangDropdown: React.FC<any> = (props) => {
  const dispatch = useDispatch();
  const { locale } = useSelector(({Theme}: any)=> Theme)
  const [lang] = React.useState([
    {
      key: 'id',
      icon: '/assets/img/flag/id.png',
      label: 'Indonesia'
    },
    {
      key: 'en',
      icon: '/assets/img/flag/en.png',
      label: 'English'
    },
    {
      key: 'jp',
      icon: '/assets/img/flag/jp.png',
      label: 'Japan'
    },
    {
      key: 'ko',
      icon: '/assets/img/flag/ko.png',
      label: 'Korea'
    },
    {
      key: 'ar',
      icon: '/assets/img/flag/ar.png',
      label: 'Arab'
    },
    {
      key: 'vi',
      icon: '/assets/img/flag/vi.png',
      label: 'Vietnam'
    },

  ])
  const _lang = first(lang.filter(({key}: any)=> key === locale))
  const dropdownRender = function () {
    return (
      <div
        className={
          ' shadow rounded-lg relative top-4 w-[150px]'
        }
      >
        <Menu>
          {
            lang.map((child: any)=> {
              return (
                <Menu.Item
                  key={child?.key}
                  //@ts-ignore
                  onClick={()=> dispatch(onChangeLocale(child?.key))}
                  icon={
                    <div
                      className={
                        'h-[25px] w-[25px] rounded-full relative overflow-hidden border flex justify-center'
                      }
                    >
                      <img
                        src={child?.icon}
                        alt={child?.icon}
                        className={'!w-[30px] !h-[30px] !object-cover absolute top-1/2 left-1/2 transform translate -translate-x-1/2 -translate-y-1/2'}
                      />
                    </div>
                  }
                >
                  {child?.label}
                </Menu.Item>
              );
            })
          }

        </Menu>
      </div>
    );
  };

  return (
    <React.Fragment>
      <Dropdown
        placement="bottomRight"
        trigger={['click']}
        dropdownRender={dropdownRender}
      >
        <Button
          type={'text'}
          shape={'circle'}

          icon={
            <div
              className={
                'h-[25px] w-[25px]  rounded-full relative overflow-hidden border flex justify-center border-slate-300'
              }
            >
              <img
                alt={_lang?.icon}
                src={_lang?.icon}
                className={'!w-[30px] !h-[30px] !object-cover absolute top-1/2 left-1/2 transform translate -translate-x-1/2 -translate-y-1/2'}
              />
            </div>
          }
          size={'large'}
        />
      </Dropdown>
    </React.Fragment>
  );
}

export default LangDropdown
