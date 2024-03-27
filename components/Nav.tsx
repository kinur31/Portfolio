import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

interface Link {
  path: string;
  name: string;
}

interface NavProps {
  containerStyles: string;
  linkStyles?: string;
  underLineStyles?: string;
  onClick?: () => void;
}

const Nav: React.FC<NavProps> = ({
  containerStyles,
  linkStyles,
  underLineStyles,
  onClick,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const [activePath, setActivePath] = useState<string>(pathname);
  const navRef = useRef<HTMLDivElement>(null);
  const timeoutId = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (pathname !== "/") {
      setActivePath(pathname);
    } else {
      setActivePath("/");
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const middleOfPage = scrollPosition + window.innerHeight / 2;
      const newPotentialPaths: string[] = [];

      links.forEach((link) => {
        if (link.path.startsWith("#")) {
          const section = document.querySelector(link.path) as HTMLElement;
          if (section) {
            const sectionMiddle =
              section.offsetTop + section.clientHeight / 2;
            if (
              middleOfPage >=
                sectionMiddle - window.innerHeight / 4 &&
              middleOfPage <
                sectionMiddle + window.innerHeight / 4
            ) {
              newPotentialPaths.push(link.path);
            }
          }
        } else {
          if (link.path === "/") {
            if (scrollPosition === 0) {
              newPotentialPaths.push(link.path);
            }
          } else {
            if (pathname === link.path) {
              newPotentialPaths.push(link.path);
            }
          }
        }
      });

      if (newPotentialPaths.length === 1) {
        setActivePath(newPotentialPaths[0]);
      }

      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }

      timeoutId.current = setTimeout(() => {
        if (newPotentialPaths.length === 1) {
          setActivePath(newPotentialPaths[0]);
        }
      }, 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
    };
  }, [pathname]);

  const handleNavLinkClick = (path: string) => {
    if (path === '/' && pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (path.startsWith('#')) {
      const section = document.querySelector(path) as HTMLElement;
      if (section) {
        const targetOffset = section.offsetTop - 30;
        window.scrollTo({ top: targetOffset, behavior: 'smooth' });
      }
    } else {
      router.push(path);
    }
  };
  

  let links: Link[] = [];
  if (pathname === "/") {
    links = [
      { path: "/", name: "Home" },
      { path: "#about", name: "About" },
      { path: "#service", name: "Service" },
      { path: "#project", name: "My Project" },
      { path: "#contact", name: "Contact" },
    ];
  } else {
    links = [
      { path: "/", name: "Home" },
      { path: "/projects", name: "Projects" },
      { path: "/contact", name: "Contact" },
    ];
  }

  return (
    <nav className={containerStyles} ref={navRef}onClick={onClick}>
      {links.map(({ path, name }) => (
        <div
          key={path}
          onClick={() => handleNavLinkClick(path)}
          className={`capitalize ${linkStyles} cursor-pointer`}
        >
          {name}
          {activePath === path && (
            <motion.span
              key={path}
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              transition={{ type: "tween", ease: "easeOut", duration: 0.5 }}
              layoutId="underline"
              className={underLineStyles}
            />
          )}
        </div>
      ))}
    </nav>
  );
};

export default Nav;