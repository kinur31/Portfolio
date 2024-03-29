import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import { useState } from "react";

import Nav from "./Nav";
import Logo from "./Logo";
import Socials from "./Socials";
import { useTheme } from "next-themes";

const MobileNav = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Logo theme={theme} />
            <SheetClose asChild>
              <Nav
                containerStyles="flex flex-col items-center gap-y-6"
                linkStyles="text-2xl"
              />
            </SheetClose>
          </div>
          <Socials
            containerStyles="flex justify-center gap-x-4"
            iconsStyles="text-2xl"
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
