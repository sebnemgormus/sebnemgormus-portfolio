"use client";

import { FiLinkedin, FiGithub, FiMail } from "react-icons/fi";
import { SiBentoml } from "react-icons/si"; 
import { motion } from "framer-motion";
import ContactPhoto from "@/components/ContactPhoto";

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
      className="py-8 bg-white text-black dark:bg-[#2C303F]"
    >
      <div className="container mx-auto px-4">
        <div className="relative flex flex-col sm:flex-row items-start">
          {/* Image Container */}
          <div className="w-full sm:w-1/3 mb-8 sm:mb-0 relative z-10">
            <ContactPhoto />
          </div>
          {/* Contact Info Container */}
          <div className="w-full sm:w-2/3 sm:pl-8 absolute lg:relative z-20 flex flex-col items-start sm:items-start text-white md:text-black lg:text-black mt-[8rem] sm:mt-0">
            <h1 className="text-3xl sm:text-5xl font-bold mb-6 text-left  text-white md:text-black lg:text-black dark:text-white">Contact me</h1>
            <ul className="w-full grid grid-cols-1 gap-4 sm:gap-6">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-3 sm:gap-4 border border-gray-300 p-3 sm:p-5  relative">
                  <a href={item.link} className="flex items-center gap-3 sm:gap-4 text-base sm:text-lg hover:underline" target="_blank" rel="noopener noreferrer">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 hover:text-fuchsia-300  flex items-center justify-center">
                      <div className="text-xl sm:text-2xl  text-white md:text-gray-500 lg:text-text-gray-500  hover:text-fuchsia-300">{item.icon}</div>
                    </div>
                    <div className="flex flex-col text-left">
                      <p className="text-xs sm:text-sm font-semibold dark:text-white">{item.title}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Overlay for mobile view */}
          <div className="absolute inset-0 z-0 sm:hidden" />
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
