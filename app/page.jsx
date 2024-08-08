import Photo from "@/components/Photo";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { SiBentoml } from "react-icons/si"; // Using the BentoML icon for Bento

const Home = () => {
  return (
    <section className="h-full relative">
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col xl:flex-row items-center justify-between h-full xl:pt-8 xl:pb-24">
          <div className="order-1 xl:order-none mb-8 xl:mb-0 flex-1 w-full h-full relative">
            <Photo className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 p-4">
              <h1 className="text-fuchsia-400 text-4xl md:text-8xl xl:text-[8.5rem] font-bold whitespace-nowrap overflow-visible">
                şebnem görmüş
              </h1>
              <h2 className="text-fuchsia-300 text-2xl md:text-4xl xl:text-6xl font-bold whitespace-nowrap overflow-visible">
                frontend developer
              </h2>
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-row space-x-6 text-gray-500 md:hidden">
              <a href="https://www.linkedin.com/in/sebnemgormus/" target="_blank" rel="noopener noreferrer">
                <FiLinkedin className="text-lg md:text-xl hover:text-fuchsia-300 transition-colors duration-300" />
              </a>
              <a href="https://bento.me/sebnemgormus" target="_blank" rel="noopener noreferrer">
                <SiBentoml className="text-lg md:text-xl hover:text-fuchsia-300 transition-colors duration-300" />
              </a>
              <a href="https://github.com/sebnemgormus" target="_blank" rel="noopener noreferrer">
                <FiGithub className="text-lg md:text-xl hover:text-fuchsia-300 transition-colors duration-300" />
              </a>
            </div>
            <div className="absolute bottom-0 right-24 hidden md:flex flex-col items-left space-y-4 text-gray-500">
              <a href="https://www.linkedin.com/in/sebnemgormus/" target="_blank" rel="noopener noreferrer">
                <FiLinkedin className="text-2xl xl:text-xl hover:text-fuchsia-300" />
              </a>
              <a href="https://bento.me/sebnemgormus" target="_blank" rel="noopener noreferrer">
                <SiBentoml className="text-2xl xl:text-xl hover:text-fuchsia-300" />
              </a>
              <a href="https://github.com/sebnemgormus" target="_blank" rel="noopener noreferrer">
                <FiGithub className="text-2xl xl:text-xl hover:text-fuchsia-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
