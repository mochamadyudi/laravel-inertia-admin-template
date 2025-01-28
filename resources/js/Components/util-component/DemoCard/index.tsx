import React, {useEffect, useRef, useState} from 'react';
import {CodeContainer, PreContainer, TokenSpan} from "@/Components/util-component/code-style";
import {Button, Card, Divider, Flex, message} from 'antd';
import {Icons} from "@/Components/general/Icons";
import {CopyToClipboard} from "react-copy-to-clipboard";
import {Utils} from "@/Utils";

interface DemoCardAttr {
  children?: React.ReactNode;
  source: React.ReactNode;
  attributes: any;
}

const DemoCard: React.FC<DemoCardAttr> = ({children, source, attributes}) => {
  const ref = useRef<any>(null);
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    if (ref && ref.current && height === 0) {
      setHeight(ref.current?.clientHeight)
    }
  }, [ref])

  useEffect(() => {
    if (ref && ref.current) {
      if (open) {
        ref.current.style.height = `${height}px`
      } else {
        ref.current.style.height = '0px'
      }


    }
  }, [open, ref]);

  function _onClick() {
    setOpen((prev: boolean) => !prev)
  }

  return (
    <React.Fragment>
      <Card bordered={false} title={attributes?.title ?? ''}>
        <div className="yid-code-box space-y-2">
          <section className="yid-code-box-demo">
            {children}
          </section>
          <section className="yid-code-box-content">
            <Flex justify={'space-between'} className={''}>
              <div/>
              <Flex gap={4}>
                <CopyToClipboard text={attributes?.md_string ?? ''} onCopy={() => message.success('Successfully copy')}>
                  <Button icon={<Icons type={'CopyOutlined'} className={'!text-xl'}/>} type={'text'}/>
                </CopyToClipboard>
                <Button
                  onClick={_onClick}
                  type={'text'}
                  icon={
                    <Icons
                      type={!open ? 'DownSquareOutlined' : 'UpSquareOutlined'}
                      className={'!text-xl'}
                    />}
                  shape={'circle'}/>
              </Flex>
            </Flex>
            <div ref={ref} className={'overflow-hidden transition duration-200 relative'}>
              <PreContainer>
                <CodeContainer>
                  <TokenSpan>
                    {source}
                  </TokenSpan>
                </CodeContainer>
              </PreContainer>
            </div>
          </section>
        </div>
      </Card>
    </React.Fragment>
  )
}

export default DemoCard;
