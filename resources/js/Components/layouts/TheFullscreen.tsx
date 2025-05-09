import React, {useEffect} from 'react';
import {Button} from "antd";
import {CloseOutlined} from "@ant-design/icons";
import {useDispatch, useSelector} from 'react-redux';
import {onProjectFullScreen} from "@/Redux/actions/project";

interface FullscreenProps {
  children: React.ReactNode;
  isBrowserFullscreen: boolean;
  [k:string]: any;
}
const TheFullScreen: React.FC<FullscreenProps> = ({ children, isBrowserFullscreen, ...props }) => {
  const dispatch = useDispatch();
  const state: any = useSelector((state: any)=> state?.Project);
  useEffect(() => {
    if(isBrowserFullscreen){
      if(state?.setting?.fullscreen === true) {
        document.body.requestFullscreen();
      }else{
        document.exitFullscreen();
      }
    }

  }, [state, isBrowserFullscreen]);

  return (
    <div className={`app-fullscreen ${state?.setting?.fullscreen == true ? "active" : ""}`}>
      {children}
      {
        state?.setting?.fullscreen && isBrowserFullscreen && (
          <div className="absolute bottom-6 right-6 z-10">
            <Button
              type={'primary'}
              //@ts-ignore
              onClick={()=> dispatch(onProjectFullScreen(false))}
              icon={<CloseOutlined/>}>Exit</Button>
          </div>
        )
      }
    </div>
  )
}

export default TheFullScreen;
