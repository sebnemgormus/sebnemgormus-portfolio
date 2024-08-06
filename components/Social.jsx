import Link from "next/link";

import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/sebnemgormus" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/sebnemgormus/" },
  { icon: <FaGlobe />, path: "https://bento.me/sebnemgormus" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles} target="_blank">
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
