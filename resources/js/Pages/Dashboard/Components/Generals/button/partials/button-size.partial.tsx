import React, {useState} from 'react';
import DemoCard from "@/Components/util-component/DemoCard";
// @ts-ignore
import ButtonSize, {attributes} from "@/Pages/Dashboard/Components/Generals/button/markdown/Sizes.md";
import {Button, Segmented} from "antd";
import type {SizeType} from "antd/es/config-provider/SizeContext";
import {SearchOutlined} from "@ant-design/icons";

const ButtonSizePartial: React.FC<any> = ()=> {
  const options: SizeType[] = ['large', 'middle', 'small']
  const [size, setSize] = useState<SizeType>('middle');
  function _onChange(size: SizeType){
    setSize(size)
  }
  return (
    <React.Fragment>
      <DemoCard source={<ButtonSize/>} attributes={attributes}>
        <div className="space-y-4">
          <Segmented options={options} value={size} onChange={_onChange} />
          <div className="flex gap-2 flex-wrap items-start">
            <Button type="primary" size={size}>Primary</Button>
            <Button size={size}>Default</Button>
            <Button type="dashed" size={size}>Dashed</Button>
            <Button type="link" size={size}>Link</Button>
            <Button type="text" size={size}>Text</Button>
          </div>
          <div className="flex gap-2 flex-wrap items-start">
            <Button icon={<SearchOutlined/>} type="primary" size={size}>Primary</Button>
            <Button size={size}>Default</Button>
            <Button type="dashed" size={size}>Dashed</Button>
            <Button type="link" size={size}>Link</Button>
            <Button type="text" size={size}>Text</Button>
          </div>
        </div>
      </DemoCard>
    </React.Fragment>
  )
}

export default ButtonSizePartial;
