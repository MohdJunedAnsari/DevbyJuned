import React from "react";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

const SocialLinks = ({ socialLinks }) => {
  const icons = [FaLinkedinIn, FaGithub, FaInstagram];

  return (
    <div className="flex justify-center md:justify-start gap-5 mt-6">
      {icons.map((Icon, i) => (
        <a
          key={i}
          href={socialLinks[i]}
          target="_blank"
          className="text-[#6c63ff] border-2 border-[#6c63ff] p-3 rounded-full hover:bg-[#6c63ff] hover:text-white transform hover:-translate-y-1 transition-all"
        >
          <Icon />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
