import React from 'react';
import {Utils} from "@/Utils";
import {Flex, Menu, Tag, theme} from 'antd';
import {useSelector} from "react-redux";
import {NAV_TYPE_SIDE, SIDE_NAV_LIGHT} from "@/Configs/app.config";
import {Link, usePage} from "@inertiajs/react";
import {setLocale} from "@/Components/general/intl-message";
import {Icons} from "@/Components/general/Icons";
import TheContainer from "@/Components/general/TheContainer";
import type {GlobalToken} from "antd/es/theme/interface";

interface MenuContentAttr {
  type: 'SIDE' | 'TOP';

  [k: string]: any;
}

const SideMenu: React.FC<any> = () => {
  const prop = usePage().props;

  const {sideNavTheme, navCollapsed, currentTheme}: any = useSelector(({Theme}: any) => Theme);

  const formatMenus = (_menus: any[]) => {
    return Array.isArray(_menus) && _menus.length > 0
      ? _menus.map(child => {
        // Create a new menu item with the icon reformatted
        const formattedChild = {
          ...child,
          target: child?.target ?? "_self",
          label: setLocale(true, child?.label),
          icon: <Icons type={child?.icon}/>, // Format the icon
        };
        if (child?.type === 'item' && child?.key) {
          Reflect.set(
            formattedChild,
            'label',
            <Link href={child?.key} target={child?.target ?? "_self"}>{setLocale(true, child?.label)}</Link>
          );
          if (
            typeof child.extra !== 'undefined' &&
            Object.keys(child.extra).length > 0
          ) {
            if (
              typeof child.extra?.component !== 'undefined' &&
              child.extra?.component
            ) {
              switch (child.extra?.component) {
                case 'tag':
                  Reflect.set(
                    formattedChild,
                    'extra',
                    <Tag
                      {...child?.extra?.props}
                      color={child.extra?.color ?? 'cyan'}
                      className={'!m-0'}
                      icon={<Icons type={child?.extra?.icon}/>}
                    >
                      {child.extra?.children}
                    </Tag>
                  );
                  break;
                case 'icon':
                  Reflect.set(
                    formattedChild,
                    'extra',
                    <Icons type={child?.extra?.icon} {...child?.extra?.props}/>
                  );
                  break;
                default:
                  Reflect.set(
                    formattedChild,
                    'extra',
                    <div {...child?.extra?.props}>{child.extra?.children}</div>
                  );
                  break;
              }
            }
          }
        }
        if (child?.type === 'group') {
          Reflect.set(
            formattedChild,
            'label',
            <Flex gap={11}>
              {child?.icon && <Icons type={child?.icon as string}/>}
              <span>{setLocale(true, child?.label)}</span>
            </Flex>
          );
        }

        // Check if the current menu item has children and format them if necessary
        if (Array.isArray(child.children) && child.children.length > 0) {
          formattedChild.children = formatMenus(child.children); // Recursive call for children
        }

        return formattedChild;
      })
      : []; // Return an empty array if no _menus are provided
  };
  const getDefaultOpenKeys = () => {
    const pathSegments = `${prop.ziggy.location}`
      .replace(prop.ziggy.url, '')
      .split('/')
      .filter(Boolean); // Split and remove empty segments
    let currentPath = prop.ziggy.url;

    return pathSegments.map(segment => {
      currentPath += `/${segment}`; // Build path incrementally
      return currentPath;
    });
  };

  return (
    <Menu
      theme={currentTheme === 'light' ? sideNavTheme === SIDE_NAV_LIGHT ? "light" : "dark" : 'dark'}
      defaultOpenKeys={navCollapsed ? [] : getDefaultOpenKeys()}
      defaultSelectedKeys={[prop.ziggy.location as string]}
      activeKey={prop.ziggy.location as string}
      mode={'inline'}
      className="!bg-transparent !tracking-tight !text-sm !font-roboto"
      inlineCollapsed={navCollapsed ?? false}
      // @ts-ignore
      items={formatMenus(prop?.menu?.dashboard ?? []) ?? []}
    />
  )
}
const TopNavMenu: React.FC<any> = (props) => {
  const prop = usePage().props;
  const {token}: { token: GlobalToken } = theme.useToken();
  const {topNavColor, currentTheme}: any = useSelector(({Theme}: any) => Theme);
  const formatMenus = (_menus: any[]) => {
    return Array.isArray(_menus) && _menus.length > 0
      ? _menus
        .filter((child: any) => typeof (child?.type) !== 'undefined' ? child?.type !== 'divider' : true)
        .map(child => {
          // Create a new menu item with the icon reformatted
          const formattedChild = {
            ...child,
            target: child?.target ?? '_self',
            label: setLocale(true, child?.label),
            icon: <Icons type={child?.icon}/>, // Format the icon
          };
          if (child?.type === 'item' && child?.key) {
            Reflect.set(
              formattedChild,
              'label',
              <Link href={child?.key} target={child?.target ?? "_self"}>{setLocale(true, child?.label)}</Link>
            );
            if (
              typeof child.extra !== 'undefined' &&
              Object.keys(child.extra).length > 0
            ) {
              if (
                typeof child.extra?.component !== 'undefined' &&
                child.extra?.component
              ) {
                switch (child.extra?.component) {
                  case 'tag':
                    Reflect.set(
                      formattedChild,
                      'extra',
                      <Tag
                        {...child?.extra?.props}
                        color={child.extra?.color ?? 'cyan'}
                        className={'!m-0'}
                        icon={<Icons type={child?.extra?.icon}/>}
                      >
                        {child.extra?.children}
                      </Tag>
                    );
                    break;
                  case 'icon':
                    Reflect.set(
                      formattedChild,
                      'extra',
                      <Icons type={child?.extra?.icon}/>
                    );
                    break;
                  default:
                    Reflect.set(
                      formattedChild,
                      'extra',
                      child.extra?.children
                    );
                    break;
                }
              }
            }
          }
          if (child?.type === 'group') {
            Reflect.set(
              formattedChild,
              'label',
              <span>{setLocale(true, child?.label)}</span>
            );
            Reflect.set(formattedChild, 'type', 'submenu');
          }

          // Check if the current menu item has children and format them if necessary
          if (Array.isArray(child.children) && child.children.length > 0) {
            formattedChild.children = formatMenus(child.children); // Recursive call for children
          }

          return formattedChild;
        })
      : []; // Return an empty array if no _menus are provided
  };

  return (
    <div className={'h-full yid-menu-horizontal'} style={{backgroundColor: token?.colorPrimary}}>
      <TheContainer className={'!h-full'}>
        <Menu
          mode="horizontal"
          theme={topNavColor ? Utils.ensureColorContrast(topNavColor) : currentTheme}
          className="!bg-transparent !h-full !border-none flex items-center"
          inlineCollapsed={false}
          // @ts-ignore
          items={formatMenus(prop?.menu?.dashboard ?? []) ?? []}
        />
      </TheContainer>
    </div>
  )
}
const MenuContent: React.FC<MenuContentAttr> = (props) => {
  return props.type === NAV_TYPE_SIDE ? (
    <SideMenu {...props} />
  ) : (
    <TopNavMenu {...props} />
  );
};
export default MenuContent;
