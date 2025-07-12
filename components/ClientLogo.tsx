"use client"
import {easeIn, motion} from "motion/react"

import LogoA from "@/public/assets/logoa.png"
import LogoB from "@/public/assets/logob.png"
import LogoD from "@/public/assets/logod.png"
import LogoF from "@/public/assets/logof.png"
import LogoG from "@/public/assets/logog.png"
import Image from "next/image"

function ClientLogo() {
  return (
    <motion.div 
    initial={{
      opacity:0,
      scale:0
    }}

    animate={{
      opacity:1,
      scale:1
    }}

    transition={{
      ease: easeIn,
      duration: 0.5
    }}

    
    className="responsive-container flex gap-4 md:gap-10 items-center justify-center mt-4 md:mt-0 pb-10 overflow-hidden">
      <Image className="logo-image" src={LogoA} alt="logo a"/>
      <Image className="logo-image" src={LogoB} alt="logo b"/>
      <Image className="logo-image" src={LogoD} alt="logo d"/>
      <Image className="logo-image" src={LogoF} alt="logo f"/>
      <Image className="logo-image" src={LogoG} alt="logo g"/>
    </motion.div>
  )
}

export default ClientLogo