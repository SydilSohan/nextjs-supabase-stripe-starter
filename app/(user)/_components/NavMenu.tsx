"use client";
import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import ScrollLink from "@/components/global/ScrollLink";
import { navigation } from "./Header";

export default function NavigationMenuNew() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-8 mr-4">
        {navigation.map((item, i) => (
          <NavigationMenuItem
            className="hover:text-primary transition-colors ease-linear uppercase font-semibold text-gray-600 "
            key={i}
          >
            <ScrollLink href={item.path}>{item.title}</ScrollLink>
          </NavigationMenuItem>
        ))}

        <NavigationMenuItem></NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink>
        <Link
          scroll={false}
          href={props.href as any}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
