// components/ScrollLink.tsx
"use client"
import Link, { LinkProps } from "next/link";
import React, { PropsWithChildren } from "react";
// mirror the props of next/link component
import { usePathname, useRouter } from "next/navigation";
type AnchorProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof LinkProps
>;
type ScrollLinkProps = AnchorProps & LinkProps & PropsWithChildren;
// component definition
const ScrollLink = ({ children, ...props }: ScrollLinkProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    if (pathname !== "/") {
      router.push(e.currentTarget.href);
    }

    //remove everything before the hash
    const targetId = e.currentTarget.href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    // window.scrollTo({
    //   top: elem?.getBoundingClientRect().top,
    //   behavior: "smooth",
    // });
    elem?.scrollIntoView({ behavior: "smooth" , block : 'end', inline : 'nearest'});
    console.log(pathname)
  };
  return (
    <Link scroll={false}  {...props} onClick={handleScroll}>
      {children}
    </Link>
  );
};
export default ScrollLink;