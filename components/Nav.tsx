"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavLinkItem {
  path: string;
  id?: string;
  name: string;
}

interface NavProps {
  containerStyles: string;
  linkStyles?: string;
  underLineStyles?: string;
  onItemClick?: () => void;
}

const homeLinks: NavLinkItem[] = [
  { path: "/#hero", id: "hero", name: "Home" },
  { path: "/#about", id: "about", name: "About" },
  { path: "/#service", id: "service", name: "Services" },
  { path: "/#project", id: "project", name: "Projects" },
  { path: "/#contact", id: "contact", name: "Contact" },
];

const generalLinks: NavLinkItem[] = [
  { path: "/", id: "home", name: "Home" },
  { path: "/projects", id: "projects", name: "Projects" },
  { path: "/contact", id: "contact", name: "Contact" },
];

const Nav: React.FC<NavProps> = ({
  containerStyles,
  linkStyles = "",
  underLineStyles = "",
  onItemClick,
}) => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    if (pathname !== "/") return;

    const sectionIds = ["hero", "about", "service", "project", "contact"];
    const elements: HTMLElement[] = [];

    const handleScroll = () => {
      // If at the very top of page, force 'hero' active
      if (window.scrollY < 100) {
        setActiveSection("hero");
        return;
      }

      // Check which section is currently centered in viewport
      const scrollY = window.scrollY + 180;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const links = pathname === "/" ? homeLinks : generalLinks;

  const isActive = (item: NavLinkItem) => {
    if (pathname === "/") {
      return activeSection === item.id;
    }
    return pathname === item.path;
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavLinkItem) => {
    if (pathname === "/" && item.id) {
      const el = document.getElementById(item.id);
      if (el) {
        e.preventDefault();
        setActiveSection(item.id);
        const yOffset = -80; // height of header
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
    if (onItemClick) {
      onItemClick();
    }
  };

  return (
    <nav className={containerStyles}>
      {links.map((item) => {
        const active = isActive(item);
        return (
          <Link
            key={item.path}
            href={item.path}
            onClick={(e) => handleLinkClick(e, item)}
            className={`capitalize ${linkStyles} ${
              active ? "text-primary font-semibold" : "text-foreground/75 hover:text-foreground"
            }`}
          >
            {item.name}
            {active && (
              <motion.span
                layoutId="nav-underline"
                className={underLineStyles}
                transition={{ type: "spring", stiffness: 450, damping: 32 }}
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;