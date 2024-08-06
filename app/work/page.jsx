"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import {FiGithub} from "react-icons/fi";

const projects = [
  {
    num: "01",
    title: "AuthnTKT",
    description:"Developed for AudtEye company.",
    stack: [{ name: "html" }, { name: "css" }, { name: "javascript" }],
    image: "/assets/work/project1.png",
    live: "https://authntkt.io/",
    github: "",
  },
  {
    num: "02",
    title: "RNTD",
    description: "Worked on the frontend development of this project for the AudtEye company.",
    stack: [{ name: "react.js" }, { name: "next.js" }, { name: "scss" }],
    image: "/assets/work/02.png",
    live: "https://rntd.io/",
    github: "",
  },
  {
    num: "03",
    title: "CV Generator",
    description: "A CV generator application designed to help users create professional resumes quickly and easily.",
    stack: [{ name: "react.js" }, {name: "css"}],
    image: "/assets/work/03.png",
    live: "https://create-cv-ten.vercel.app/",
    github: "https://github.com/sebnemgormus/create-cv",
  },
  {
    num: "04",
    title: "Weather App",
    description: "A weather app that provides real-time weather updates and forecasts.",
    stack: [{ name: "html" }, {name: "css"}, {name: "javascript"}],
    image: "/assets/work/04.png",
    live: "https://weather-app-indol-five-60.vercel.app/",
    github: "https://github.com/sebnemgormus/weather-app",
  },
  {
    num: "05",
    title: "laurenbooth",
    description: "Developed for AudtEye company's customer.",
    stack: [{ name: "wordpress" }],
    image: "/assets/work/05.png",
    live: "https://laurenbooth.co.uk/",
    github: "",
  },
  {
    num: "06",
    title: "Meme Picker",
    description: "An app gives you a cat meme to match your mood.",
    stack: [{ name: "html" }, {name: "css"}, {name: "javascript"}],
    image: "/assets/work/06.png",
    live: "https://meme-picker-with-js.vercel.app/",
    github: "https://github.com/sebnemgormus/meme-picker-with-js",
  },
  {
    num: "07",
    title: "Re:Coded Capstone Project - Paying it Forward",
    description: "A team project designed with Figma and developed with React, to provide a solution to reduce inequality in the education system.",
    stack: [{ name: "react.js" }, {name: "redux"}],
    image: "/assets/work/07.png",
    live: "https://capstone-turkey-react-paying-it-forward.vercel.app/",
    github: "https://github.com/sebnemgormus/capstone-turkey-react-paying-it-forward",
  },
  {
    num: "08",
    title: "Text to Speech",
    description: "A simple text-to-speech converter that lets you input your text and select a language. It then converts the text into spoken words in the chosen language, providing clear and accurate audio output.",
    stack: [{ name: "html" }, {name: "css"}, {name: "javascript"}],
    image: "/assets/work/08.png",
    live: "https://text-to-speech-weld-phi.vercel.app/",
    github: "https://github.com/sebnemgormus/text-to-speech",
  },
  {
    num: "09",
    title: "Cookie Consent",
    description: "A basic cookie consent was created to make practice on some javascript concepts.",
    stack: [{ name: "html" }, {name: "css"}, {name: "javascript"}],
    image: "/assets/work/09.png",
    live: "https://cookie-consent-withjs.vercel.app/",
    github: "https://github.com/sebnemgormus/cookie-consent-with-js",
  },
  {
    num: "10",
    title: "Twimba",
    description: "The purpose of this application is to emulate a number of the features of the real Twitter platform. Among the app's capabilities are the ability to compose and post tweets to a feed, to like or dislike tweets, to retweet or unretweet, and to delete tweets. Additionally, users can access replies to tweets by clicking on the reply icon.",
    stack: [{ name: "html" }, {name: "css"}, {name: "javascript"}],
    image: "/assets/work/10.png",
    live: "https://twitter-clone-with-js-r6l2.vercel.app/",
    github: "https://github.com/sebnemgormus/twitterClone-withJs",
  },
];


const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-black text-outline">
                {project.num}
              </div>

              <h2 className="text-[42px] font-bold leading-none text-black transition-all duration-500 capitalize">
                {project.title}
              </h2>
              <p className="text-black/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-black">
                      {item.name} {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-black/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] grid rounded-lg bg-fuchsia-300 hover:bg-lightPurple justify-center items-center">
                        <BsArrowUpRight className="text-white text-3xl" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {project.github && (
                  <Link href={project.github} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] grid rounded-lg bg-fuchsia-300 hover:bg-lightPurple justify-center items-center group">
                          <FiGithub className="text-white text-3xl" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>GitHub repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover rounded-lg"
                          alt="Project images"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns containerStyles="flex gap-2 absolute rounded-lg right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" 
              btnStyles="bg-fuchsia-300 hover:bg-lightPurple text-white  rounded-lg text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
