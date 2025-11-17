import React from "react";

const About = () => {
  return (
    <section id="about" className="py-24 px-[10%] bg-whitesomke text-center">
      <h2 className="text-[2.2rem] font-bold mb-2">About Me</h2>
      <p className="text-[#555] mb-3">A little bit about who I am</p>
      <div className="w-20 h-[3px] bg-[#6c63ff] mx-auto mb-12 rounded"></div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-10 text-left">
        <div className="flex-1 min-w-[320px]">
          <h3 className="text-2xl font-bold mb-2">
            Developing With Passion While Exploring The World.
          </h3>

          <div className="w-16 h-[3px] bg-[#6c63ff] mb-6 rounded"></div>

          <p className="text-[#555] mb-4 leading-relaxed">
            I’m a developer who loves crafting digital experiences that are
            functional and delightful.
          </p>

          <p className="text-[#555] mb-6 leading-relaxed">
            I design and build modern apps that solve real-world problems.
          </p>

          <a
            href="#contact"
            className="bg-[#6c63ff] text-white px-6 py-2.5 rounded-[10px] hover:bg-[#5a54e6] transition-all"
          >
            Contact Me
          </a>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="p-3 bg-[#6c63ff] rounded-2xl inline-block">
            <img
              src="/profile.jpeg"
              alt="About"
              className="rounded-xl sm:max-w-[350px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
