import * as IconsAntd from '@ant-design/icons';

type IconType = {
  type: string;
  [k: string]: any;
};
export const Icons = ({ type, ...rest }: IconType) => {
  // @ts-ignore
  const Component = IconsAntd && typeof IconsAntd[type] !== 'undefined'
    // @ts-ignore
    ? IconsAntd[type]
    : null;
  return Component ? <Component {...rest} /> : null;
};
