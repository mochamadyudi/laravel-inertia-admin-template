import React from 'react';
import { Breadcrumb } from 'antd';
import { usePage } from '@inertiajs/react';

type BreadcrumbsType = {
  href?: string | null;
  label: string;
}
const autoGenerateBreadcrumbs = (url: string): BreadcrumbsType[] => {
  const parts = url.split('/').filter(Boolean);
  const breadcrumbs: BreadcrumbsType[]= [];

  let accumulatedPath = '';
  parts.forEach((part, index) => {
    accumulatedPath += '/' + part;
    const isLast = index === parts.length - 1;

    breadcrumbs.push({
      label: decodeURIComponent(part.replace(/-/g, ' ')).replace(/\b\w/g, l => l.toUpperCase()),
      href: isLast ? null : accumulatedPath,
    });
  });

  return breadcrumbs;
};

const TheBreadCrumbs: React.FC = () => {
  const { url } = usePage(); // dari Inertia
  const items = autoGenerateBreadcrumbs(url);

  return (
    <Breadcrumb style={{ marginBottom: 16 }}>
      {items.map((item, idx) => (
        <Breadcrumb.Item key={idx}>
          {item.href ? <a href={item.href}>{item.label}</a> : item.label}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default TheBreadCrumbs;
