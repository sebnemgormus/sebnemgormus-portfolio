"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// const imageStyle = {
//   borderRadius: '62px',
// }

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.4, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[298px] h-[298px] xl:w-[498px]
         xl:h-[498px] mix-blend-lighten"
        >
          <Image
            src="/assets/new.jpg"
            priority
            quality={100}
            fill
            // style={imageStyle}
            alt="Picture of the author"
            className="object-contain "
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photo;
