"use client"

import Image from "next/image"
import heroImage from "@/public/hero-img.svg"
import { Caladea, Mulish } from "next/font/google";
import ActionButton from "./ActionButton";
import {easeIn, easeOut, motion} from "motion/react";

const caladea = Caladea({
  subsets: ["latin"],
  weight: ["700"], // You can also add "italic", "700italic" if needed
  display: "swap",
});

const mulish = Mulish({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // Add weights you plan to use
  display: 'swap',
});

function Hero() {
  return (
    <div className="bg-grid-white">
      <div className="responsive-container md:flex md:flex-row md:gap-2 md:h-[500px] lg:h-[600px] items-center">

      <div className="md:w-[60%] flex flex-col gap-4 md:gap-8">
        <motion.h1 
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
          ease: easeIn
        }}
        className={`text-[#2F2E41] text-4xl sm:text-5xl md:text-5xl lg:text-6xl text-center md:text-start mt-4 pt-10 md:pt-0 md:mt-0 ${caladea.className} text-bold`}>Grow Your Business with Results-Driven Digital Marketing</motion.h1>
        <motion.h5 
        initial={{
          x: "-100%",
          opacity: 0
        }}
        animate={{
          x: 0,
          opacity: 1
        }}
        transition={{
          duration: 0.5,
          ease: easeIn
        }}
        className={`${mulish.className} text-lg text-center md:text-start`}>We help startups and small businesses increase traffic, leads, and sales through tailored digital strategies</motion.h5>
        <motion.div
        initial={{
          y: "-100%",
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1
        }}
        transition={{
          duration: 0.6,
          ease: easeIn
        }}
        className="flex flex-col md:flex-row gap-4 items-center">
          <ActionButton/>
          <a className={`${mulish.className} border-b border-[#DDEB9D] hover:border-[#a0ac6a]`} href="#portfolio">Scrolls to portfolio</a>
        </motion.div>
      </div>


      <motion.div
      initial={{
        x: 100,
        scale: 3,
        opacity:0
      }}
      animate={{
        x: 0,
        scale: 1,
        opacity:1
      }}
      transition={{
        ease: easeOut,
        duration: 0.8
      }}
      className="md:w-[40%] md:h-[22rem] pt-10 md:pt-0 m-auto"
      >
        <Image 
        className="w-full h-full"  src={heroImage} alt="Hero Image" />
      </motion.div>  
      
    </div>
    </div>
    
  )
}

export default Hero