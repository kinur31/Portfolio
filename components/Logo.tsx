import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      aria-label="Back to Homepage"
      className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
    >
      <div className="relative w-10 h-10">
        <Image
          src="/logo-dark.svg"
          alt="Rizky Noor Logo"
          width={40}
          height={40}
          priority
          className="dark:hidden object-contain"
        />
        <Image
          src="/logo-light.svg"
          alt="Rizky Noor Logo"
          width={40}
          height={40}
          priority
          className="hidden dark:block object-contain"
        />
      </div>
      <span className="font-bold text-lg tracking-tight hidden sm:inline-block group-hover:text-primary transition-colors">
        Rizky Noor
      </span>
    </Link>
  );
};

export default Logo;
