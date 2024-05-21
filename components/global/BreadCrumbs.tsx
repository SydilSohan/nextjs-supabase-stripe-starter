'use client';
import { usePathname } from 'next/navigation';
import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Link } from 'next-view-transitions';

const BreadCrumbs = () => {
  const paths = usePathname();
  const pathNames = paths.split('/').filter((path) => path);

  let href = '';
  return (
    <Breadcrumb className="w-full capitalize">
      <BreadcrumbList className="flex gap-2 text-xs flex-row">
        {pathNames.slice(0, -1).map((path, index) => {
          href += `/${path}`;
          return (
            <React.Fragment key={index}>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href={href}>{path}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </React.Fragment>
          );
        })}

        <BreadcrumbItem>
          <BreadcrumbPage>{pathNames[pathNames.length - 1]}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};
export default BreadCrumbs;
