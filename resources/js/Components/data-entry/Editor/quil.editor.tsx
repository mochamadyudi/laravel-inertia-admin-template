import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {FieldProps} from "rc-field-form/lib/Field";
import {Form, Input} from "antd";


interface IQuilEditor{
  field?: FieldProps;
  onChange?: (val: string) => void;
  defaultValue?: string;
}
const QuilEditor: React.FC<IQuilEditor> = ({ field, ...props })=> {

  function _onChange(e: any){

    if(
      typeof(props?.onChange) !== 'undefined' &&
      typeof(props?.onChange) === 'function'
    ){
      props?.onChange(e);
    }
  }
  return (
    <div className="yid-form-quil">
      {
          field && (
              <Form.Item {...field} hidden>
                <Input />
              </Form.Item>
          )
      }
      <ReactQuill onChange={_onChange} defaultValue={props?.defaultValue}/>

    </div>
  )
};

export default QuilEditor;
