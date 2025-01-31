import React from 'react';
import {FloatButton} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {Icons} from "@/Components/general/Icons";
import {onSaveTheme} from "@/Redux/actions/Theme";

const ModeWidget: React.FC<any> = (props) => {
  const dispatch = useDispatch();
  const {currentTheme}:any = useSelector(({Theme}: any) => Theme);
  function _onClick(){
    // @ts-ignore
    dispatch(onSaveTheme(currentTheme === 'light' ? 'dark' : 'light'));
  }

  return (
    <FloatButton
      onClick={_onClick}
      icon={<Icons type={currentTheme === 'light' ? 'MoonOutlined' : 'SunOutlined'}/>}
      shape="circle"
      style={props?.style ?? { insetInlineEnd: 24}}
      type={currentTheme === 'light' ? 'default' : 'primary'}
    />
  )
};


export default ModeWidget;
