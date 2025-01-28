import React from 'react';
import {Switch} from "antd";
import {Icons} from "@/Components/general/Icons";
import {useDispatch, useSelector} from "react-redux";
import {onSaveTheme} from "@/Redux/actions/Theme";

const ThemeModeComponent: React.FC<any> = ()=> {
  const dispatch = useDispatch();
  const {currentTheme}:any = useSelector(({Theme}: any) => Theme);
  function _onChange(e: any){
    // @ts-ignore
    dispatch(onSaveTheme(e ? 'dark' : 'light'));
  }
  return (
    <React.Fragment>
      <Switch
        data-tour-id='tour-theme-mode'
        value={currentTheme === 'dark'}
        defaultChecked={currentTheme === 'dark'}
        onChange={_onChange}
        size={'default'}
        checkedChildren={<Icons type={'MoonOutlined'}/>}
        unCheckedChildren={<Icons type={'SunOutlined'}/>}
      />
    </React.Fragment>
  )
};

export default ThemeModeComponent;
