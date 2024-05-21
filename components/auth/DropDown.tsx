"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlignJustify } from "lucide-react";
import React from "react";
import ScrollLink from "../global/ScrollLink";
type Props = {};
import { navigation } from "@/app/(user)/_components/Header";
import SignInButton from "@/app/(user)/_components/SignInButton";

const DropDown = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <DropdownMenu open={open} onOpenChange={setOpen} modal>
      <DropdownMenuTrigger className="size-6">
        <AlignJustify size={20} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-screen p-2">
        <DropdownMenuSeparator />

        {navigation.map((item, i) => (
          <DropdownMenuItem
            className="hover:text-primary hover:bg-muted"
            onClick={() => setOpen(false)}
            key={i}
          >
            <ScrollLink href={item.path}>{item.title}</ScrollLink>
          </DropdownMenuItem>
        ))}

        <DropdownMenuItem
          className="hover:text-primary bg-muted"
          onClick={() => setOpen(false)}
        >
          <SignInButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDown;
