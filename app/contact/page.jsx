"use client";

import { FiLinkedin, FiGithub, FiMail } from "react-icons/fi";
import { SiBentoml } from "react-icons/si"; 
import { motion } from "framer-motion";

const info = [
  {
    icon: <FiMail />,
    title: "Email",
    link: "mailto:sebnemgormus@mail.com",
  },
  {
    icon: <FiLinkedin />,
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/sebnemgormus/",
  },
  {
    icon: <FiGithub />,
    title: "GitHub",
    link: "https://github.com/sebnemgormus",
  },
  {
    icon: <SiBentoml />,
    title: "Bento",
    link: "https://bento.me/sebnemgormus",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.6, ease: "easeInOut" },
      }}
      className="py-8 bg-white text-black"
    >
      <div className="container mx-auto px-4">
        <h1 className="text-5xl sm:text-4xl font-bold mb-8 text-left text-black">Contact me</h1>
        <ul className="grid grid-cols-2 gap-6">
          {info.map((item, index) => (
            <li key={index} className="flex items-center gap-4 border border-gray-300 p-4 rounded-lg">
              <a href={item.link} className="flex items-center gap-4 text-lg hover:underline" target="_blank" rel="noopener noreferrer">
                <div className="w-12 h-12 hover:text-fuchsia-300 rounded-lg flex items-center justify-center">
                  <div className="text-2xl text-gray-500 hover:text-fuchsia-300">{item.icon}</div>
                </div>
                <div className="flex flex-col text-left">
                  <p className="text-sm font-semibold">{item.title}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
};

export default Contact;
