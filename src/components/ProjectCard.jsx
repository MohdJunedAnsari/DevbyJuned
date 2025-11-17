import React from "react";

const ProjectCard = ({ title, img, link }) => {
  return (
    <div className="relative overflow-hidden rounded-2xl shadow-[0_8px_25px_rgba(0,0,0,0.1)] group">
      <img
        src={img}
        alt={title}
        className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
        <h3 className="text-white text-xl mb-4">{title}</h3>

        <a
          href={link}
          target="_blank"
          className="bg-[#ff6b6b] hover:bg-[#ff4a4a] text-white px-4 py-2 rounded-[10px] transition-all"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
