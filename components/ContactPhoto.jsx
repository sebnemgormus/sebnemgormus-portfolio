"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ContactPhoto = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.5, duration: 0.4, ease: "easeIn" },
      }}
      className="flex justify-start"
    >
      <Image
        src="/assets/contact.jpg"
        priority
        quality={100}
        width={390}
        height={180}
        alt="Picture of the author"
      />
    </motion.div>
  );
};

export default ContactPhoto;
