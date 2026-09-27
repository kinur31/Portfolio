import { RiLinkedinFill, RiGithubFill, RiGitlabFill } from "react-icons/ri";
import Link from "next/link";
import { personalInfo } from "@/data/profile";

interface SocialItem {
  label: string;
  path: string;
  icon: React.ReactNode;
}

interface SocialsProps {
  containerStyles: string;
  iconsStyles: string;
}

const icons: SocialItem[] = [
  {
    label: "LinkedIn Profile",
    path: personalInfo.linkedinUrl,
    icon: <RiLinkedinFill />,
  },
  {
    label: "GitHub Profile",
    path: personalInfo.githubUrl,
    icon: <RiGithubFill />,
  },
  {
    label: "GitLab Profile",
    path: personalInfo.gitlabUrl,
    icon: <RiGitlabFill />,
  },
];

const Socials: React.FC<SocialsProps> = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={containerStyles}>
      {icons.map((item, index) => (
        <Link
          href={item.path}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
          key={index}
          className="focus:outline-none focus:ring-2 focus:ring-primary rounded p-1"
        >
          <div className={iconsStyles}>{item.icon}</div>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
