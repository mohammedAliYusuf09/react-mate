"use client"

import { Caladea } from "next/font/google";
import {easeIn, motion} from "motion/react"

const caladea = Caladea({
  subsets: ["latin"],
  weight: ["700"], // You can also add "italic", "700italic" if needed
  display: "swap",
});


type DarkHeadingProps = {
  children: React.ReactNode;
};

function DarkHeading({ children }: DarkHeadingProps) {
  return (
    <motion.h2 
        initial={{
          opacity: 0,
          x: "-100%"
        }}

        whileInView={{
          opacity: 1,
          x: 0
        }}

        transition={{
          ease: easeIn,
          duration: 0.6,
          delay: 0.5
        }}
    
    className={`${caladea.className} text-3xl`}>{children}</motion.h2>
  );
}

export default DarkHeading