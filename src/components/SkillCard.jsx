import React from "react";

const SkillCard = ({ skill }) => {
  return (
    <div className="bg-white py-4 rounded-[10px] shadow-[0_8px_25px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all">
      {skill}
    </div>
  );
};

export default SkillCard;
