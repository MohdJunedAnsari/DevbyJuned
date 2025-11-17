// import React from "react";
// import { FaLinkedinIn, FaGithub, FaInstagram, FaUser, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

// const Portfolio = () => {
//   const socialLinks = [
//   "https://www.linkedin.com/in/mohd-juned-ansari-aa4783251/",
//   "https://github.com/MohdJunedAnsari",
//   "https://instagram.com/your-username",
//   ]

//   const projectLinks = [
//     "#",
//     "https://hussaini-foundation-5y1p.vercel.app/",
//     "#"
//   ]
//   return (
//     <div className="font-[Poppins] bg-[#f4f4fc] text-[#1e1e2f] scroll-smooth">
//       {/* HEADER */}
//       <header className="sticky top-0 z-50 flex justify-between items-center px-10 md:px-24 py-5 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
//         <div className="text-3xl font-bold text-[#6c63ff]">
//           MJ<span className="text-[#ff6b6b]">.</span>
//         </div>
//         <nav className="hidden md:flex space-x-8 text-[1rem] font-medium">
//           {["Home", "About", "Skills", "Projects", "Contact"].map((link) => (
//             <a
//               key={link}
//               href={`#${link.toLowerCase()}`}
//               className="text-[#1e1e2f] hover:text-[#6c63ff] transition-all"
//             >
//               {link}
//             </a>
//           ))}
//         </nav>
//         <a
//           href="#contact"
//           className="hidden md:inline-block bg-[#6c63ff] text-white px-5 py-2.5 rounded-[10px] hover:bg-[#5a54e6] shadow-md transition-all"
//         >
//           Hire Me
//         </a>
//       </header>

//       {/* HERO SECTION */}
//       <section
//         id="home"
//         className="flex flex-col md:flex-row items-center justify-between py-20 px-[10%] bg-whitesmoke"
//       >
//         <div className="max-w-xl text-center md:text-left space-y-4">
//           <h1 className="text-[2.6rem] font-bold leading-snug">
//             Hi, I'm <span className="text-[#6c63ff]">Mohd Juned Ansari</span>
//           </h1>
//           <h3 className="text-xl text-[#555] font-medium">
//             Full Stack Web Developer | Software Developer
//           </h3>
//           <p className="text-[#555] leading-relaxed">
//             I build modern, responsive, and user-friendly web applications using
//             Django and React.
//           </p>

//           <div className="flex justify-center md:justify-start gap-4 mt-6">
//             <a
//               href="#projects"
//               className="bg-[#6c63ff] text-white px-4.5 py-2.5 rounded-[10px] hover:bg-[#5a54e6] transition-all"
//             >
//               View Projects
//             </a>
//             <a
//               href="#contact"
//               className="border-2 border-[#6c63ff] text-[#6c63ff] px-6 py-2.5 rounded-[10px] hover:bg-[#6c63ff] hover:text-white transition-all"
//             >
//               Contact Me
//             </a>
//           </div>
          

//           <div className="flex justify-center md:justify-start gap-5 mt-6">
//             {[FaLinkedinIn, FaGithub, FaInstagram].map((Icon, i) => (
//               <a
//                 key={i}
//                 href={socialLinks[i]}
//                 target="_blank"
//                 className="text-[#6c63ff] border-2 border-[#6c63ff] p-3 rounded-full hover:bg-[#6c63ff] hover:text-white transform hover:-translate-y-1 transition-all"
//               >
//                 <Icon />
//               </a>
//             ))}
//           </div>
//         </div>

//         <div className="mt-10 md:mt-0">
//           <img
//             src="/profile.jpeg"
//             alt="Profile"
//             className="w-[320px] rounded-full shadow-[0_8px_25px_rgba(0,0,0,0.1)]"
//           />
//         </div>
//       </section>

//       {/* ABOUT SECTION */}
//       <section id="about" className="py-24 px-[10%] bg-whitesomke text-center">
//         <h2 className="text-[2.2rem] font-bold mb-2">About Me</h2>
//         <p className="text-[#555] mb-3">A little bit about who I am</p>
//         <div className="w-20 h-[3px] bg-[#6c63ff] mx-auto mb-12 rounded"></div>

//         <div className="flex flex-col md:flex-row items-center justify-between gap-10 text-left">
//           <div className="flex-1 min-w-[320px]">
//             <h3 className="text-2xl font-bold mb-2">
//               Developing With Passion While Exploring The World.
//             </h3>
//             <div className="w-16 h-[3px] bg-[#6c63ff] mb-6 rounded"></div>
//             <p className="text-[#555] mb-4 leading-relaxed">
//               I’m a developer who loves crafting digital experiences that are
//               not just functional but delightful. Passion drives me to learn and
//               build scalable solutions every day.
//             </p>
//             <p className="text-[#555] mb-6 leading-relaxed">
//               I combine creativity and logic to design apps that solve real-world
//               problems effectively.
//             </p>
//             <a
//               href="#contact"
//               className="bg-[#6c63ff] text-white px-6 py-2.5 rounded-[10px] hover:bg-[#5a54e6] transition-all"
//             >
//               Contact Me
//             </a>
//           </div>

//           <div className="flex-1 flex justify-center">
//             <div className="p-3 bg-[#6c63ff] rounded-2xl inline-block">
//               <img
//                 src="profile.jpeg"
//                 alt="About"
//                 className="rounded-xl sm:max-w-[350px]"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* SKILLS SECTION */}
//       <section id="skills" className="py-24 px-[10%] bg-[#f4f4fc] text-center">
//         <h2 className="text-[2.2rem] font-bold mb-0">Skills</h2>
//         <div className="w-20 h-[3px] bg-[#6c63ff] mx-auto mb-12 rounded"></div>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
//           {[
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "Python",
//             "Django",
//             "React",
//             "AWS",
//             "Git & GitHub",
//           ].map((skill) => (
//             <div
//               key={skill}
//               className="bg-white py-4 rounded-[10px] shadow-[0_8px_25px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all"
//             >
//               {skill}
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* PROJECTS SECTION */}
//       <section id="projects" className="py-24 px-[10%] bg-[#f8f9fb] text-center">
//         <h2 className="text-[2.2rem] font-bold mb-0">Featured Projects</h2>
//         <div className="w-20 h-[3px] bg-[#6c63ff] mx-auto mb-12 rounded"></div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {[
//             { title: "AI Learning Platform", img: "/AIPoweredELearning.png" },
//             { title: "Donation Web App", img: "/Donation.png" },
//             { title: "Portfolio Website", img: "/portfolio.png" },
//           ].map((proj,i) => (
//             <div
//               key={proj.title}
//               className="relative overflow-hidden rounded-2xl shadow-[0_8px_25px_rgba(0,0,0,0.1)] group"
//             >
//               <img
//                 src={proj.img}
//                 alt={proj.title}
//                 className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
//                 <h3 className="text-white text-xl mb-4">{proj.title}</h3>
//                 <a
//                   href={projectLinks[i]}
//                   target="_blank"
//                   className="bg-[#ff6b6b] hover:bg-[#ff4a4a] text-white px-4 py-2 rounded-[10px] transition-all"
//                 >
//                   View Project
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* CONTACT SECTION */}
//       {/* <section id="contact" className="py-24 px-[10%] bg-whitesmoke text-center">
//         <h2 className="text-[2.2rem] font-bold mb-12">Get In Touch</h2>
//         <form className="max-w-xl mx-auto flex flex-col gap-5">
//           <input
//             type="text"
//             placeholder="Your Name"
//             className="p-3 border border-gray-300 rounded-[10px] focus:ring-2 focus:ring-[#6c63ff] outline-none"
//             required
//           />
//           <input
//             type="email"
//             placeholder="Your Email"
//             className="p-3 border border-gray-300 rounded-[10px] focus:ring-2 focus:ring-[#6c63ff] outline-none"
//             required
//           />
//           <textarea
//             placeholder="Your Message"
//             rows="5"
//             className="p-3 border border-gray-300 rounded-[10px] focus:ring-2 focus:ring-[#6c63ff] outline-none"
//             required
//           ></textarea>
//           <button
//             type="submit"
//             className="bg-[#6c63ff] hover:bg-[#5a54e6] text-white py-2.5 rounded-[10px] transition-all"
//           >
//             Send Message
//           </button>
//         </form>
//       </section> */}
//       <section id="contact" className="w-full py-20 px-[10%] bg-whitesmoke to-white">
//       {/* Heading */}
//       <h2 className="text-center text-5xl font-bold">Contact Us</h2>
//       <p className="text-center text-gray-600 mt-3 text-lg">
//         Have a question or feedback? We'd love to hear from you.
//       </p>
//       <div className="w-20 h-[3px] bg-[#6c63ff] mx-auto mb-12 rounded"></div>

//       {/* Main Grid */}
//       <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
//         {/* LEFT SIDE */}
//         <div className="space-y-6">
//           <h3 className="text-3xl font-semibold">Get in Touch</h3>
//           <p className="text-gray-600">
//             Fill out the form and we'll get back to you shortly.
//           </p>

//           <div className="space-y-4 text-gray-700">
//             <p>
//               <strong>Address:</strong> <span className="text-[#6c63ff]">BHOPAL, INDIA</span>
//             </p>

//             <p>
//               <strong>Phone:</strong>{" "}
//               <span className="text-[#6c63ff]"><a href="tel:9039229672">9039229672</a></span>
//             </p>

//             <p>
//               <strong>Email:</strong>{" "}
//               <span className="text-[#6c63ff]"><a href="mailto:ansarikaynat939@gmail.com">ansarikaynat939@gmail.com</a></span>
//             </p>
//           </div>
//         </div>

//         {/* RIGHT SIDE FORM */}
//         <form className="space-y-6">
//           {/* First + Last Name */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <label className="text-gray-700 font-medium">First Name</label>
//               <input
//                 type="text"
//                 className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-[#6c63ff] outline-none"
//                 placeholder="First Name"
//                 required
//               />
//             </div>

//             <div>
//               <label className="text-gray-700 font-medium">Last Name</label>
//               <input
//                 type="text"
//                 className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-[#6c63ff] outline-none"
//                 placeholder="Last Name"
//                 required
//               />
//             </div>
//           </div>

//           {/* Email */}
//           <div>
//             <label className="text-gray-700 font-medium">Email</label>
//             <input
//               type="email"
//               className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-[#6c63ff] outline-none"
//               placeholder="Email Address"
//               required
//             />
//           </div>

//           {/* Phone Number */}
//           <div>
//             <label className="text-gray-700 font-medium">Phone Number</label>
//             <div className="flex gap-3">
//               <select className="w-28 p-3 border rounded-lg focus:ring-2 focus:ring-[#6c63ff] outline-none">
//                 <option>IN</option>
//                 <option>US</option>
//                 <option>UK</option>
//                 <option>CA</option>
//               </select>
//               <input
//                 type="tel"
//                 className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-[#6c63ff] outline-none"
//                 placeholder="123-456-7890"
//                 required
//               />
//             </div>
//           </div>

//           {/* Message */}
//           <div>
//             <label className="text-gray-700 font-medium">Message</label>
//             <textarea
//               rows="5"
//               className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-[#6c63ff] outline-none"
//               placeholder="Write your message..."
//               required
//             ></textarea>
//           </div>
//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-[#6c63ff] hover:bg-[#6c63ff] transition text-white py-4 rounded-lg text-xl font-semibold"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </section>
//       {/* FOOTER */}
//       <footer className="bg-[#6c63ff] text-white text-center py-6 mt-10 tracking-wide">
//         © 2025 Mohd Juned Ansari — All rights reserved.
//       </footer>
//     </div>
//   );
// };

// export default Portfolio;

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Portfolio = () => {
  const socialLinks = [
    "https://www.linkedin.com/in/mohd-juned-ansari-aa4783251/",
    "https://github.com/MohdJunedAnsari",
    "https://instagram.com/your-username",
  ];

  const projectLinks = [
    "#",
    "https://hussaini-foundation-5y1p.vercel.app/",
    "#",
  ];

  return (
    <div className="font-[Poppins] bg-[#f4f4fc] text-[#1e1e2f] scroll-smooth">
      <Navbar />
      <Hero socialLinks={socialLinks} />
      <About />
      <Skills />
      <Projects projectLinks={projectLinks} />
      <Contact />
      <Footer />
    </div>
  );
};

export default Portfolio;
