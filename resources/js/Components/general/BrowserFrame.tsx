import React, {useState} from 'react';
import {Button, Flex, Tooltip, Typography} from "antd";
import {useSelector} from "react-redux";
import {FullScreen, useFullScreenHandle} from "react-full-screen";

interface BrowserFrameProps {
  title?: string;
  description?: string | React.ReactNode;
  src: string;
  className?: string;
  extra?: React.ReactNode;
  footer?: React.ReactNode;
}

const BrowserFrame: React.FC<BrowserFrameProps> = ({src, className, extra, footer, title, description}) => {
  const handle = useFullScreenHandle();
  const [isExit, setIsExit] = useState<boolean>(false);
  const [isMinimize, setIsMinimize] = useState<boolean>(false);

  const {currentTheme} = useSelector(({Theme}: any) => Theme);
  return (
    <FullScreen handle={handle}>
      <div className={`yid-frame ${handle.active ? 'fullscreen' : ''}`}>
        {
          !isExit && (
            <div className="yid-frame-toolbar">
              <div className="yid-frame-nav-left">
                <Tooltip title={'Close Frame'}>
                  <div className="yid-frame-action yid-frame-close" onClick={()=> {
                    if(handle.active) {
                      setIsExit(!isExit)
                      handle.exit();
                    }else {
                      setIsExit(!isExit)
                    }
                  }}/>
                </Tooltip>
                <Tooltip title={'Minimize Frame'}>
                  <div className="yid-frame-action yid-frame-minimize" onClick={()=> setIsMinimize(!isMinimize)}/>
                </Tooltip>
                <Tooltip title={'Fullscreen Frame'}>
                  <div className="yid-frame-action yid-frame-fullscreen"
                       onClick={handle.active ? handle.exit : handle.enter}/>
                </Tooltip>

                <div className="px-4">
                  {title && <Typography.Paragraph className={'!text-sm !m-0'}>{title}</Typography.Paragraph>}
                </div>
              </div>
              <div className="yid-frame-nav-right">
                {extra}
              </div>
            </div>
          )
        }

        {
          !isMinimize && (
            <div className={`yid-frame-content ${isExit ? 'flex flex-col items-center justify-center' : ''}`}>
              {
                isExit ? (
                  <Flex align={'center'} justify={'center'} className={'h-full'}>
                    <Button type={'primary'} onClick={() => setIsExit(false)}>Open Frame</Button>
                  </Flex>
                ) : (
                  <React.Fragment>
                    <iframe src={[src, `theme=${currentTheme}`].join(`?`)} className={`${className ?? ''}`}/>
                    <div className="yid-frame-footer relative">
                      {description}
                      {footer}
                    </div>
                  </React.Fragment>
                )
              }
            </div>
          )
        }

      </div>
    </FullScreen>
  )
}

export default BrowserFrame;
