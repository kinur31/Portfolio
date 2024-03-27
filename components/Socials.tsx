import { RiLinkedinFill, RiGithubFill } from "react-icons/ri";
import Link from "next/link";

interface Icon {
  path: string;
  name: JSX.Element;
}

interface SocialsProps {
  containerStyles: string;
  iconsStyles: string;
}

const icons: Icon[] = [
  {
    path: "/",
    name: <RiLinkedinFill />,
  },
  {
    path: "/",
    name: <RiGithubFill />,
  },
];

const Socials: React.FC<SocialsProps> = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => (
        <Link href={icon.path} key={index}>
          <div className={`${iconsStyles}`}>{icon.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default Socials;