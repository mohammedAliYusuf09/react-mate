"use client"

import {  Mulish, Inter } from "next/font/google";
import { StaticImageData } from "next/image";
import CartWhy from "./CartWhy";
import Confi from "@/public/assets/confi.png"
import RT from "@/public/assets/relabletrusted.png"
import VAL from "@/public/assets/value.png"
import FP from "@/public/assets/firndlyprofetional.png"
import DarkHeading from "./DarkHeading";
import {easeIn, motion} from "motion/react"

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // Add weights you plan to use
  display: 'swap',
});


const mulish = Mulish({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // Add weights you plan to use
  display: 'swap',
});



export interface WhyCardData {
  image: StaticImageData;
  title: string;
  description: string;
}

export const whyCards: WhyCardData[] = [
  {
    image: Confi,
    title: "Confidentiality",
    description: "Your privacy is our top priority. We ensure all your data and information are handled with the utmost confidentiality.",
  },
  {
    image: RT,
    title: "Relatable & Trust-Building",
    description: "With so many agencies out there, it's hard to know who to trust. Here’s why our clients stick with us.",
  },
  {
    image: VAL,
    title: "Value-Driven",
    description: "We don’t just offer services — we deliver results. Here’s what makes our approach stand out.",
  },
  {
    image: FP,
    title: "Friendly & Professional",
    description: "We're not your typical agency. Here’s what makes working with us different — and better.",
  },
];

function Why() {
  return (
    <div className="responsive-container flex md:flex-row flex-col  py-10 md:h-[700px] overflow-hidden">
      <div className="md:w-[40%]">
        <motion.h4 
        initial={{
          opacity: 0.3,
          scale: 0.2
        }}

        whileInView={{
          opacity: 1,
          scale: 1
        }}

        transition={{
          type: "spring",
          ease: easeIn,
          duration: 0.6,
          delay: 0.5
        }}
        
        className={`${inter.className} text-[#5FA1E7]`}>What Matters</motion.h4>
        <div className="py-4">
          <DarkHeading>
          Why Choose Us
        </DarkHeading>
        </div>
        
        <motion.p 
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
        className={`${mulish.className} text-lg`}>
          We combine strategy, creativity, and data-driven decisions to help your business grow with confidence. Here’s what sets us apart.
        </motion.p>
      </div>

        <div className="md:w-[60%]">
          <div className="flex pt-10 md:pt-32 w-full">
            <div className="pr-3 pt-6 md:pt-20 flex flex-col w-[50%]">
                <motion.div 

                initial={{
                  opacity: 0.4,
                  x: "-100%"
                }}

                whileInView={{
                  opacity: 1,
                  x: 0
                }}

                transition={{
                  ease: easeIn,
                  duration: 0.6,
                  delay: 0.2
                }}
                
                
                className="pb-3 flex gap-2">
                  <CartWhy info={whyCards[0]}/>
                </motion.div>

                <span className="w-full h-[1px] border-left-to-right"/>

                <motion.div 
                initial={{
                  opacity: 0.4,
                  x: "-100%"
                }}

                whileInView={{
                  opacity: 1,
                  x: 0
                }}

                transition={{
                  ease: easeIn,
                  duration: 0.6,
                  delay: 0.2
                }}
                
                className="flex gap-2 mt-2">
                  <CartWhy info={whyCards[1]}/>
                </motion.div>
            </div>

            <span className="w-[1px] h-[400px] border-bg"/>


            <div className="pl-3 w-[50%] flex flex-col">
              <motion.div 
              initial={{
                  opacity: 0.4,
                  x: "-100%"
                }}

                whileInView={{
                  opacity: 1,
                  x: 0
                }}

                transition={{
                  ease: easeIn,
                  duration: 0.6,
                  delay: 0.3
                }}

              className="border-b border-blue-400 pb-3 flex gap-2">
                <CartWhy info={whyCards[2]}/>
              </motion.div>

              <span className="w-full border-right-to-left"/>

              <motion.div 
              initial={{
                  opacity: 0.4,
                  x: "100%"
                }}

                whileInView={{
                  opacity: 1,
                  x: 0
                }}

                transition={{
                  ease: easeIn,
                  duration: 0.6,
                  delay: 0.4
                }}
              className="flex gap-2 mt-2">
                <CartWhy info={whyCards[3]}/>
              </motion.div>
          </div>

        </div>
      </div>
      
    </div>
  )
}

export default Why