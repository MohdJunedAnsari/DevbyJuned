import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = ({ projectLinks }) => {
  const projects = [
    { title: "AI Learning Platform", img: "/AIPoweredELearning.png" },
    { title: "Donation Web App", img: "/Donation.png" },
    { title: "Portfolio Website", img: "/portfolio.png" },
  ];

  return (
    <section id="projects" className="py-24 px-[10%] bg-[#f8f9fb] text-center">
      <h2 className="text-[2.2rem] font-bold mb-0">Featured Projects</h2>
      <div className="w-20 h-[3px] bg-[#6c63ff] mx-auto mb-12 rounded"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((proj, i) => (
          <ProjectCard
            key={proj.title}
            title={proj.title}
            img={proj.img}
            link={projectLinks[i]}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
