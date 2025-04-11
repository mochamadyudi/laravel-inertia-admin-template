import React from 'react';
import {message, Tag, Typography, Upload} from 'antd';
import {RcFile, UploadProps} from "antd/es/upload/interface";
import {CustomIcon} from "@/Components/general/Icons";
import {ImageSvg} from "@/Components/general/svg/icon";
import {LoadingOutlined} from "@ant-design/icons";
import {Utils} from "@/Utils";

const {Dragger} = Upload;

interface UploadMediaInterface {
  className?: string;
  loading: boolean;
  filename?: string | null;
  uploadedImage: string;
  options: UploadProps
}

const UploadMedia: React.FC<UploadMediaInterface> = (props) => {

  const beforeUploads: UploadProps['beforeUpload'] = (file: RcFile) => {
    return Utils.beforeUploadsItem(file, ['image/jpg', 'image/png', 'image/jpeg'], 10);
  }

  return (
    <Dragger
      {...props.options}
      beforeUpload={props?.options?.beforeUpload ?? beforeUploads}
    >
      {
        props.uploadedImage ?
          <div className="w-full overflow-hidden flex flex-col space-y-2 items-center justify-center relative">
            {
              props.loading ?
                <React.Fragment>
                  <div className="h-[200px] flex items-center justify-center">
                    <LoadingOutlined className="text-4xl text-primary"/>
                  </div>
                  <div className="mt-3">Uploading</div>
                </React.Fragment>
                :
                <React.Fragment>
                  <img
                    src={props.uploadedImage}
                    alt="avatar"
                    className="h-[200px] w-full object-cover"/>
                  {/*<span>{props?.filename}</span>*/}

                </React.Fragment>
            }
          </div>
          :
          <div className="flex flex-col space-y-2 items-center justify-center">
            {
              props.loading ?
                <React.Fragment>
                  <div className="h-[200px] flex items-center justify-center">
                    <LoadingOutlined className="text-4xl text-primary"/>
                  </div>
                  <div className="mt-3">Uploading</div>
                </React.Fragment>
                :
                <React.Fragment>
                  <CustomIcon svg={ImageSvg} className="h-[200px] w-[140px]"/>
                  <Typography>Click or Drag file to upload</Typography>
                </React.Fragment>
            }
          </div>
      }
    </Dragger>
  )
};

export default UploadMedia;
