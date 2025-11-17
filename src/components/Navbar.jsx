import React from "react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 flex justify-between items-center px-10 md:px-24 py-5 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
      <div className="text-3xl font-bold text-[#6c63ff]">
        MJ<span className="text-[#ff6b6b]">.</span>
      </div>

      <nav className="hidden md:flex space-x-8 text-[1rem] font-medium">
        {["Home", "About", "Skills", "Projects", "Contact"].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-[#1e1e2f] hover:text-[#6c63ff] transition-all"
          >
            {link}
          </a>
        ))}
      </nav>

      <a
        href="#contact"
        className="hidden md:inline-block bg-[#6c63ff] text-white px-5 py-2.5 rounded-[10px] hover:bg-[#5a54e6] shadow-md transition-all"
      >
        Hire Me
      </a>
    </header>
  );
};

export default Navbar;
