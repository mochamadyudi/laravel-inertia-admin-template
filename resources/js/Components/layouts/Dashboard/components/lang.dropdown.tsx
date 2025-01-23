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
                        'h-[25px] w-[25px] rounded-full overflow-hidden border flex justtify-center'
                      }
                    >
                      <img
                        src={child?.icon}
                        alt={child?.icon}
                        className={'w-[40px] h-[40px] rounded-full'}
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
                'h-[25px] w-[25px]  rounded-full overflow-hidden border flex justify-center border-slate-300'
              }
            >
              <img
                alt={_lang?.icon}
                src={_lang?.icon}
                className={'w-[40px] h-[40px] rounded-full'}
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
