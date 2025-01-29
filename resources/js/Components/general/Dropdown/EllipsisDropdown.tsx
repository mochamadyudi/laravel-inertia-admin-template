import React from 'react';
import {Button, Dropdown, Menu, MenuProps} from "antd";
import { Icons } from '../Icons';
import { useSelector } from 'react-redux';

interface EllipsisDropdownProps {
  menu: MenuProps
}
const EllipsisDropdown: React.FC<EllipsisDropdownProps> = ({ menu}) => {
  const {currentTheme} = useSelector((state: any) => state?.Theme);
  const dropdownRender = function () {
    return (
      <div className="min-w-[140px]">
        <Menu {...menu} theme={currentTheme} />
      </div>
    );
  };
  return (
    <React.Fragment>
      <Dropdown
        trigger={['click']}
        placement="bottomRight"
        dropdownRender={() => dropdownRender()}
      >
        <Button
          size={'small'}
          shape={'circle'}
          icon={
            <Icons
              type={'EllipsisOutlined'}
              style={{ transform: 'rotate(90deg)' }}
            />
          }
        />
      </Dropdown>
    </React.Fragment>
  )
};

export default EllipsisDropdown;
