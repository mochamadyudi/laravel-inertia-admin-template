import React, {useState} from 'react';
import TheDashboard from "@/Components/layouts/Dashboard/TheDashboard";
import {Card, Descriptions, message, Segmented, Typography} from "antd";
import {CopyToClipboard} from "react-copy-to-clipboard";
import PageHeaderAlt from "@/Components/general/PageHeaderAlt";
import data from './handler/data.json'
import {Icons} from "@/Components/general/Icons";

type IconType = 'outlined' | 'filled' | 'two-tone'
const Page = () => {
  const options: IconType[] = ['outlined', 'filled', 'two-tone']
  const [active, setActive] = useState<IconType>('outlined')

  function _onChange(e: IconType) {
    setActive(e)
  }

  return (
    <React.Fragment>
      <PageHeaderAlt
        title={'Icon'}
        addonAfter={
          <div>
            <Typography.Paragraph>To trigger an operation.</Typography.Paragraph>
            <Descriptions colon={false}>
              <Descriptions.Item label="npm" span={4}>
                <CopyToClipboard text={"npm install @ant-design/icons --save'"} onCopy={() => {
                  message.success("Successfully copied")
                }}>
                  <span
                    className="flex flex-nowrap w-auto items-center gap-2 !text-base !font-bold bg-slate-100 dark:bg-slate-700 px-2 rounded-lg cursor-pointer">
                    <span className={'text-[#ba3976]'}>npm</span>
                    <span className={'text-slate-700 dark:text-white'}>{'install'}</span>
                    <span className={'text-[#ba3976]'}>@ant-design/icons</span>
                    <span className={'text-[#5bac2c] dark:text-[#86d658]'}>--save</span>
                  </span>
                </CopyToClipboard>
              </Descriptions.Item>
            </Descriptions>
          </div>
        }
        container
        contentClassName={'mt-6'}
        type={'default'}
      >
        <Card>
          <div className="space-y-6">
            <Segmented options={options} value={active} onChange={_onChange}/>

            <div className="space-y-6">
              {
                data
                  .filter((item: { type: string }) => item.type === active)
                  .map((item: { type: string; data: Array<string>; category: string; }, index: number) => {
                    return (
                      <div className="space-y-4">
                        <Typography.Title level={3} className={'capitalize'}>{item.category}</Typography.Title>
                        <div className={'grid grid-cols-2 sm:grid-cols-3  xl:grid-cols-5 gap-4'}>

                          {
                            item.data.map((child: string) => {
                              return (
                                <CopyToClipboard text={`<${child}/>`} onCopy={()=> message.success('Successfully copy')}>
                                  <div key={`${item.type}-${item.category}-${child}`}
                                       className={'border border-transparent col-span-1 flex flex-col items-center justify-center hover:bg-[--ant-color-primary-bg-hover] rounded-lg group hover:border hover:border-[--ant-color-primary] transition duration-200 cursor-pointer'}>
                                    <div className={'flex flex-col items-center justify-center'}>
                                      <div className={' p-4 flex flex-col space-y-4 items-center justify-center'}>
                                        <Icons type={child}
                                               className={'dark:text-slate-300 text-4xl group-hover:text-[--ant-color-primary]'}/>
                                        <Typography
                                          className={'!text-sm group-hover:text-[--ant-color-primary]'}>{child}</Typography>
                                      </div>
                                    </div>
                                  </div>
                                </CopyToClipboard>
                              )
                            })
                          }

                        </div>
                      </div>
                    )
                  })
              }
            </div>
          </div>
        </Card>
      </PageHeaderAlt>

    </React.Fragment>
  )
}

Page.layout = (children: React.ReactNode) => <TheDashboard children={children}/>

export default Page;
