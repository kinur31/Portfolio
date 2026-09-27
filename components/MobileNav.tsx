"use client";

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Nav from "./Nav";
import Logo from "./Logo";
import Socials from "./Socials";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          type="button"
          aria-label="Open navigation menu"
          className="p-2 rounded-md hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <AlignJustify className="w-6 h-6" />
        </button>
      </SheetTrigger>
      <SheetContent side="right">
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-16 w-full">
            <div onClick={() => setOpen(false)}>
              <Logo />
            </div>
            <Nav
              containerStyles="flex flex-col items-center gap-y-6 w-full"
              linkStyles="text-xl font-medium hover:text-primary transition-colors py-1"
              onItemClick={() => setOpen(false)}
            />
          </div>
          <div className="pt-8 border-t border-border/40 w-full flex justify-center">
            <Socials
              containerStyles="flex justify-center gap-x-4"
              iconsStyles="text-2xl text-foreground hover:text-primary transition-colors"
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
