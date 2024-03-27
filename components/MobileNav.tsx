import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import { useState } from "react";

import Nav from "./Nav";
import Logo from "./Logo";
import Socials from "./Socials";
import { useTheme } from "next-themes";

const MobileNav = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavItemClick = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen}>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Logo theme={theme} />
            <Nav
              containerStyles="flex flex-col items-center gap-y-6"
              linkStyles="text-2xl"
              onClick={handleNavItemClick}
            />
          </div>
            <Socials containerStyles="flex justify-center gap-x-4" iconsStyles="text-2xl"/>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
