"use client";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [header, setHeader] = useState(false); 
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  let lastPath: string | null = null;

  if (typeof window !== "undefined") {
    lastPath = localStorage.getItem("lastPath");
  }

  useEffect(() => {
    const handleScroll = () => {
      setHeader(window.scrollY > 2);
    };

    const handlePathChange = () => {
      if (pathname === "/") {
        setHeader(window.scrollY > 2);
      } else {
        setHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("popstate", handlePathChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("popstate", handlePathChange);
    };
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-30 transition-all ${
        header || (lastPath === "/" && pathname !== "/")
          ? "py-3 bg-white shadow-lg dark:bg-accent"
          : "py-6 dark:bg-transparent"
      } ${pathname !== "/" ? "" : "bg-[#F0F6FF]"}`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo theme={theme} />
          <div className="flex items-center gap-x-6">
            {/* nav */}
            <Nav
              containerStyles="hidden xl:flex gap-x-8 items-center"
              linkStyles="relative hover:text-primary transition-all"
              underLineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
            <ThemeToggler theme={theme} setTheme={setTheme} />
            {/* mobile nav */}
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
