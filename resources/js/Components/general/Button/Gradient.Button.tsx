import React from 'react';
import { Button, ConfigProvider } from 'antd';
import { createStyles } from 'antd-style';
import {BaseButtonProps} from "antd/es/button/button";


interface GradientButtonAttr extends BaseButtonProps{
  from: string;
  to: string;
}
const GradientButton: React.FC<GradientButtonAttr> = ({ from, to, ...props }) => {
  const useStyle = createStyles(({ prefixCls, css }: any) => ({
    linearGradientButton: css`
    &.${prefixCls}-btn-primary:not([disabled]):not(.${prefixCls}-btn-dangerous) {
      > span {
        position: relative;
      }

      &::before {
        content: '';
        background: linear-gradient(135deg, ${from ?? '#6253e1'}, ${to ?? '#04befe'});
        position: absolute;
        inset: -1px;
        opacity: 1;
        transition: all .3s;
        border-radius: inherit;
      }

      transition: .3s;
      &:hover::before {
        transition: .3s;
        opacity: 0;
        background: linear-gradient(135deg, ${from ?? '#6253e1'}, ${to ?? '#04befe'});
      }
    }
    `,
  }));
  const { styles } = useStyle();

  return (
    <ConfigProvider
      button={{
        className: styles.linearGradientButton,
      }}
    >
      <Button {...props}>
        {props?.children}
      </Button>
    </ConfigProvider>
  );
};

export default GradientButton;
