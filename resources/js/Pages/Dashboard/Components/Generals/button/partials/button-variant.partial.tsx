import React from 'react';
import DemoCard from "@/Components/util-component/DemoCard";
// @ts-ignore
import MD, { attributes } from "@/Pages/Dashboard/Components/Generals/button/markdown/VariantColor.md";
import {Button, Tooltip} from "antd";
import {Icons} from "@/Components/general/Icons";
import type {ButtonColorType} from "antd/es/button/buttonHelpers";

const ButtonVariantPartial: React.FC<any> = () => {
  const colors:ButtonColorType[] = ['yellow', 'orange','red','pink','magenta', 'purple','geekblue', 'blue', 'cyan', 'green',]
  return (
    <React.Fragment>
      <DemoCard source={<MD/>} attributes={attributes}>
        <div className={'space-y-4'}>
          {
            colors.map((child)=> {
              return (
                <div className="flex gap-4 flex-wrap items-start" key={child}>
                  <Tooltip title={child}>
                    <Button variant={'solid'} color={child}>
                      Solid
                    </Button>
                  </Tooltip>
                  <Tooltip title={child}>
                    <Button variant={'filled'} color={child}>
                      filled
                    </Button>
                  </Tooltip>

                  <Button variant={'outlined'} color={child}>
                    outlined
                  </Button>
                  <Button variant={'dashed'} color={child}>
                    dashed
                  </Button>
                  <Button variant={'link'} color={child}>
                    link
                  </Button>
                  <Button variant={'text'} color={child}>
                    text
                  </Button>
                </div>
              )
            })
          }
        </div>

      </DemoCard>
    </React.Fragment>
  )
}

export default ButtonVariantPartial;
