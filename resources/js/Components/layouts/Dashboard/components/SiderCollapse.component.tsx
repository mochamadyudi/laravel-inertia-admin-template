import React from 'react';
import {Icons} from "@/Components/general/Icons";
import {Button} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {onChangeNavCollapsed} from "@/Redux/actions/Theme";

const SiderCollapseComponent: React.FC<any> = ()=> {
  const dispatch = useDispatch();
  const {navCollapsed}: { navCollapsed: boolean } = useSelector(({Theme}: any) => Theme);
  function _onClick(){
    // @ts-ignore
    dispatch(onChangeNavCollapsed(!navCollapsed))
  }
  return (
    <React.Fragment>
      <Button
        onClick={_onClick}
        shape="circle"
        type="text"
        icon={<Icons type={'MenuOutlined'}/>}
      />
    </React.Fragment>
  )
}

export default SiderCollapseComponent;
