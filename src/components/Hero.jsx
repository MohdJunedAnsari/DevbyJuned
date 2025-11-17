import React from "react";
import SocialLinks from "./SocialLinks";

const Hero = ({ socialLinks }) => {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-between py-20 px-[10%] bg-whitesmoke"
    >
      <div className="max-w-xl text-center md:text-left space-y-4">
        <h1 className="text-[2.6rem] font-bold leading-snug">
          Hi, I'm <span className="text-[#6c63ff]">Mohd Juned Ansari</span>
        </h1>

        <h3 className="text-xl text-[#555] font-medium">
          Full Stack Web Developer | Software Developer
        </h3>

        <p className="text-[#555] leading-relaxed">
          I build modern, responsive, and user-friendly web applications using
          Django and React.
        </p>

        <div className="flex justify-center md:justify-start gap-4 mt-6">
          <a
            href="#projects"
            className="bg-[#6c63ff] text-white px-4.5 py-2.5 rounded-[10px] hover:bg-[#5a54e6] transition-all"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border-2 border-[#6c63ff] text-[#6c63ff] px-6 py-2.5 rounded-[10px] hover:bg-[#6c63ff] hover:text-white transition-all"
          >
            Contact Me
          </a>
        </div>

        <SocialLinks socialLinks={socialLinks} />
      </div>

      <div className="mt-10 md:mt-0">
        <img
          src="/profile.jpeg"
          alt="Profile"
          className="w-[320px] rounded-full shadow-[0_8px_25px_rgba(0,0,0,0.1)]"
        />
      </div>
    </section>
  );
};

export default Hero;
