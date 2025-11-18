import React from "react";
import SkillCard from "./SkillCard";

const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Python",
    "Django",
    "React",
    "AWS",
    "Git & GitHub",
    "Tailwind Css",
    "Bootstrap",
    "SQL",
    "MongoDB"

  ];

  return (
    <section id="skills" className="py-24 px-[10%] bg-[#f4f4fc] text-center">
      <h2 className="text-[2.2rem] font-bold mb-0">Skills</h2>
      <div className="w-20 h-[3px] bg-[#6c63ff] mx-auto mb-12 rounded"></div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <SkillCard key={skill} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
