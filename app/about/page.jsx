"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaWordpress,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { BsArrowUpRight } from "react-icons/bs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";

const about = {
  title: "About me",
  description:
    "Frontend developer with a multidisciplinary background, currently pursuing a master's degree in Informatics at Istanbul University.",
  info: [
    {
      fieldName: "Email",
      fieldValue: "sebnemgormus@gmail.com",
    },
    {
      fieldName: "Experience",
      fieldValue: "2 Years",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Turkish",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description: "",
  items: [
    {
      company: "AudtEye",
      position: "Frontend Developer",
      duration: "Feb 2023 - April 2024",
    },
    {
      company: "Bahçeşehir College Headquarter",
      position: "Measurement and Evaluation Assistant",
      duration: "Sep 2021 - Sep 2022",
    },
    {
      company: "Bahçeşehir College",
      position: "Robotics and Coding Assistant Teacher",
      duration: "Sep 2019 - Jan 2020",
    },
    {
      company: "Bahçeşehir University",
      position: "Student Assistant",
      duration: "Jan 2019 - Jul 2019",
    },
    {
      company: "Halkbank",
      position: "IT Intern",
      duration: "Summer 2011",
    },
  ],
};

const education = {
  icon: "assets/resume/cap.svg",
  title: "My education",
  description: "",
  items: [
    {
      institution: "İstanbul University",
      department: "MSc. Informatics",
      duration: "Feb 2024 - Present",
    },
    {
      institution: "Re:Coded",
      department: "React Web Development Bootcamp",
      duration: "Jan 2022 - May 2022",
    },
    {
      institution: "Bahçeşehir University",
      department: "BSc. Computer Education and Instructional Technologies",
      duration: "Sep 2016 - Jul 2020",
    },
  ],
};

const skills = {
  title: "My skills",
  description: "",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html",
    },
    {
      icon: <FaCss3 />,
      name: "css",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaWordpress />,
      name: "WordPress",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};

const certificates = {
  title: "My certificates",
  items: [
    {
      institution: "datacamp",
      department: "Working with the OpenAI API",
      link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/eee303dfdef6aa6a5e654d57f99d6d16cdd26057",
    },
    {
      institution: "datacamp",
      department: "Developing AI Systems with the OpenAI API",
      link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/2847ad2fc05771e9ba601753f0f79a3c516500cf",
    },
    {
      institution: "datacamp",
      department: "Explainable Artificial Intelligence (XAI) Concepts",
      link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/ae98019eda752a4f4ff638c64a41e63d6c8bd930",
    },
    {
      institution: "datacamp",
      department: "Generative AI Concepts",
      link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/9a4cb4747d593d85f4a478f4b4b65c85b954a843",
    },
    {
      institution: "datacamp",
      department: "Intermediate SQL",
      link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/6f822ffdf86f9a7355d6ef193f099e617192567f",
    },
    {
      institution: "datacamp",
      department: "Introduction to SQL",
      link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/8ad5994aa706a22977a96e7067e2c02bbf76d818",
    },
    {
      institution: "datacamp",
      department: "Large Language Models (LLMs) Concepts",
      link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/5a626e981a346f004b0dd5a16fd70ad25d12909a",
    },
    {
      institution: "datacamp",
      department: "Understanding Artificial Intelligence",
      link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/ef7648bbbc8018eac9b29dfea241c90d2394b4da",
    },
    {
      institution: "datacamp",
      department: "Understanding Machine Learning",
      link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/8c70cc8fa4d438557e01c8322e72962cdda30798",
    },
    {
      institution: "miuul",
      department: "Introduction to Data Science and Artificial Intelligence",
      link: "https://learning.miuul.com/certificates/ip4ciwiwdd",
    },
    {
      institution: "Re:Coded",
      department: "React Web Development Bootcamp",
      link: "https://www.credential.net/07cfbce2-fe32-479c-a9ac-3a49741173ce#gs.c2vf2k",
    },
    {
      institution: "freecodecamp",
      department: "Javascript Algorithms and Data Structures",
      link: "https://www.freecodecamp.org/certification/sebnem/javascript-algorithms-and-data-structures",
    },
    {
      institution: "Oyster Academy Certified",
      department: "Remote Ready",
      link: "https://oysterhr-oysteracademy.workramp.io/certificate/9F_S4ajlpA",
    },
    {
      institution: "Rice University | Coursera",
      department: "Principles of Computing (Part 1)",
      link: "https://www.coursera.org/account/accomplishments/verify/XYQUGH56XLH4?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
    },
    {
      institution: "Rice University | Coursera",
      department: "Principles of Computing (Part 2)",
      link: "https://www.coursera.org/account/accomplishments/verify/MME8V9T3F27G?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
    },
    {
      institution: "Rice University | Coursera",
      department: "Interactive Programming in Python (Part 1)",
      link: "https://www.coursera.org/account/accomplishments/verify/K5RELKWDL5TW",
    },
    {
      institution: "Rice University | Coursera",
      department: "Interactive Programming in Python (Part 2)",
      link: "https://www.coursera.org/account/accomplishments/verify/X5CRYTYRBYNP",
    },
    {
      institution: "California San Diego University | Coursera",
      department: "Mathematical Thinking in Computer Science",
      link: "https://www.coursera.org/account/accomplishments/verify/EK8B2YUMUPUC?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
    },
    {
      institution: "Stanford University | Coursera",
      department: "Introduction to Mathematical Thinking",
      link: "https://www.coursera.org/account/accomplishments/verify/VL9QYXPWHU6A",
    },
  ],
};

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-[60px] "
        >
          <TabsList
            className="flex flex-col w-full max-w-[380px] mx-auto
          xl:mx-0 gap-6"
          >
            <TabsTrigger value="about">About me</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="certificates">Certificates</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl text-black dark:text-white">{about.title}</h3>
                <p className="max-w-[660px] text-black mx-auto xl:mx-0 dark:text-white">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[680px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-black font-bold dark:text-white">
                          {item.fieldName}:
                        </span>
                        <span className="text-black dark:text-white">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="flex items-center gap-4"></div>
            </TabsContent>
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center text-black xl:text-left ">
                <h3 className="text-4xl text-black dark:text-white">{experience.title}</h3>
                <p className="max-w-[600px] text-black mx-auto xl:mx-0 dark:text-white">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-white border-2 h-[184px] py-6 px-6 flex flex-col justify-center items-center
                        lg:items-start gap-1 dark:bg-white/10 dark:border-white/10 dark:backdrop-blur-sm dark:backdrop-filter
"
                        >
                          <span className="text-blue dark:text-white/70">{item.duration}</span>
                          <h3 className="text-sm max-w-[260px] min-h-[60px] text-center lg:text-left dark:text-white">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] bg-blue rounded-lg dark:bg-fuchsia-400"></span>
                            <p className="text-black/60 text-xs dark:text-white">
                              {item.company}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left text-black">
                <h3 className="text-4xl text-black dark:text-white">{education.title}</h3>
                <p className="max-w-[600px] text-black/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-white border-2 h-[184px] py-6 px-6  flex flex-col justify-center items-center
                        lg:items-start gap-1 dark:bg-white/10 dark:border-white/10 dark:backdrop-blur-sm dark:backdrop-filter
"
                        >
                          <p className="text-blue dark:text-white/70">{item.duration}</p>

                          <h3 className="text-md max-w-[360px] min-h-[60px] text-center lg:text-left text-sm dark:text-white">
                            {item.department}
                          </h3>

                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] bg-blue rounded-lg dark:bg-fuchsia-400"></span>
                            <p className="text-black/60 text-xs dark:text-white">
                              {item.institution}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px] text-black">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl text-black dark:text-white">{skills.title}</h3>
                  <p className="max-w-[600px] text-black/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-white border-2  flex justify-center items-center group dark:bg-white/10 dark:border-white/10 dark:backdrop-blur-sm dark:backdrop-filter
">
                              <div className="text-6xl group-hover:blue transition-all duration-300 dark:text-white">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="certificates" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left text-black">
                <h3 className="text-4xl text-black dark:text-white">{certificates.title}</h3>
                <p className="max-w-[600px] text-black/60 mx-auto xl:mx-0">
                  {certificates.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {certificates.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-white border-2 h-[184px] py-6 px-6  flex flex-col justify-center items-center
                      lg:items-start gap-1 dark:bg-white/10 dark:border-white/10 dark:backdrop-blur-sm dark:backdrop-filter
"
                      >
                        <h3 className="text-md max-w-[360px] min-h-[60px] text-center lg:text-left dark:text-white">
                          {item.department}
                        </h3>
                        <div className="flex items-center justify-between w-full">
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px]  bg-blue rounded-lg dark:bg-fuchsia-400"></span>
                            <p className="text-black/60 text-xs dark:text-white">
                              {item.institution}
                            </p>
                          </div>
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2"
                          >
                            <div className="w-[30px] h-[30px] grid bg-fuchsia-400 hover:bg-fuchsia-500 dark:hover:bg-fuchsia-500 justify-center items-center">
                              <BsArrowUpRight className="text-white text-lg" />
                            </div>
                          </a>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default About;
