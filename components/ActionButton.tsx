'use client'
import {motion} from "motion/react" ;
import { Mulish } from "next/font/google";

const mulish = Mulish({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // Add weights you plan to use
  display: 'swap',
});

function ActionButton() {
  return (
    <motion.div 
    className={`${mulish.className} bg-[#6C63FF] text-lg md:text-xl
    text-white px-5 py-2 cursor-pointer`}
    whileHover={{ scale: 1.1 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >Get Free Strategy Cal</motion.div>
  )
}

export default ActionButton