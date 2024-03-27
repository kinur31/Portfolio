import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  theme: string | undefined;
}

const Logo: React.FC<LogoProps> = ({theme}) => {
  return (
    <Link href="/">
      <Image src={theme === 'dark' ? "/logo-light.png" : "/logo-dark.png"} width={50} height={50} priority alt="" />
    </Link>
  );
};

export default Logo;
