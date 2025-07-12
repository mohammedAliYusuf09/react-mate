"use client"
import { Caladea, Mulish } from "next/font/google";
import {motion} from "motion/react";




const mulish = Mulish({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], 
  display: 'swap',
});

const caladea = Caladea({
  subsets: ["latin"],
  weight: ["400", "700"], 
  display: "swap",
});

function ActionSection() {
  return (
    <div className="bg-grid-blue">
      <div className="responsive-container flex flex-col gap-4 items-center justify-center py-20">
        <h2 className={`${caladea.className} text-3xl text-white font-bold text-center`}>Let&rsquo;s Grow Your Business — Together</h2>

        <p className={`${mulish.className} text-white font-medium text-center max-w-96`}>
          Get a high-performing marketing strategy that brings real results. Book your free call and take the first step toward growth today.
        </p>

        <motion.button 
        animate={{ scale: [1, 1.1, 1] }} 
        transition={{
          duration: 1,         
          repeat: Infinity,    
          repeatDelay: 2,      
          type: "tween",       
          ease: "easeInOut",   
        }}
          className={`${mulish.className} bg-white hover:bg-gray-200 text-lg md:text-xl text-[#2F2E41]
          px-5 py-2 rounded-2xl transition-colors ease-in-out duration-150`}>Get Free Strategy Cal</motion.button>



      </div>
    </div>
  )
}

export default ActionSection