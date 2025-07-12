"use client"

import Image from "next/image";
import SEO from "@/public/assets/seo-services.svg"
import PaidAdd from "@/public/assets/paid-add.svg"
import ContentMarketing from "@/public/assets/social-media.svg"
import EmailMarketing from "@/public/assets/emailmarketing.svg"
import { Caladea, Mulish, Inter } from "next/font/google";
import {easeIn, motion} from "motion/react";


const inter = Inter({
  subsets: ['latin'],
  weight: ['600'], // Add weights you plan to use
  display: 'swap',
});


const mulish = Mulish({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // Add weights you plan to use
  display: 'swap',
});

const caladea = Caladea({
  subsets: ["latin"],
  weight: ["400", "700"], // You can also add "italic", "700italic" if needed
  display: "swap",
});


function Services() {
  return (
    <div id="services" className="bg-grid-blue pb-10">
        <div className="responsive-container overflow-hidden">
          <h3 className={`${mulish.className} text-3xl text-white text-center py-6`}>What We Do Best</h3>

            <div className="flex flex-col gap-4">

              <div className="flex flex-col md:flex-row md:h-[350px] gap-4">

                <motion.div 
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
                  duration: 0.5
                }}

                className="flex flex-col gap-2 md:h-full md:w-[65%] bg-[#F5F5F5] p-4 md:relative rounded-xl shadow-custom">

                  <div className="flex flex-col gap-3 md:w-[75%] z-10">
                    <h5 className={`${inter.className}`}>SERVICE ONE</h5>
                    <h4 className={`${caladea.className} text-xl text-[#066FE0]`}>SEO Optimization</h4>
                    <p className={`${mulish.className} text-[#066FE0]`}>Rank higher and get discovered. We optimize your website to show up in search results and drive organic traffic that converts.</p>
                  </div>
                  
                  <div className="flex justify-end z-0">
                    <Image className="md:absolute md:bottom-2 md:right-1" width={350} height={350} src={SEO} alt="seo"/>
                  </div>
                  
                </motion.div>


                <motion.div 
                initial={{
                  opacity: 0,
                  y: "100%"
                }}

                whileInView={{
                  opacity: 1,
                  y: 0
                }}

                transition={{
                  ease: easeIn,
                  duration: 0.8
                }}
                
                className="flex flex-col gap-2 md:h-full md:w-[35%] bg-[#CED754] p-4 md:relative rounded-xl shadow-custom">

                  <div className="flex flex-col gap-3 md:w-[75%] z-10">
                    <h5 className={`${inter.className}`}>SERVICE TWO</h5>
                    <h4 className={`${caladea.className} text-xl text-[#066FE0]`}>Paid Advertising </h4>
                    <p className={`${mulish.className} text-[#066FE0]`}>Reach your ideal customers instantly. We create and manage ad campaigns that bring clicks, leads, and sales — fast.</p>
                  </div>

                  <div className="flex justify-end z-0">
                    <Image className="md:absolute md:bottom-2 md:right-1" width={250} height={250} src={PaidAdd} alt="paid add"/>
                  </div>

                </motion.div>
              </div>

              <div className="flex flex-col md:flex-row md:h-[350px] gap-4">

                <motion.div 
                initial={{
                  opacity: 0,
                  y: "100%"
                }}

                whileInView={{
                  opacity: 1,
                  y: 0
                }}

                transition={{
                  ease: easeIn,
                  duration: 0.5,
                  delay: 0.2
                }}
                
                className="flex flex-col gap-2 md:h-full md:w-[50%] bg-[#066FE0] p-4 md:relative rounded-xl shadow-custom border border-amber-50">

                  <div className="flex flex-col gap-3 md:w-[75%] z-10">
                    <h5 className={`${inter.className} text-white`}>SERVICE THREE</h5>
                    <h4 className={`${caladea.className} text-xl text-white`}>Content Marketing</h4>
                    <p className={`${mulish.className} text-white`}>Engage and educate your audience. We craft high-value blogs, articles, and content strategies that build trust and authority.</p>
                  </div>

                  <div className="flex justify-end z-0">
                    <Image className="md:absolute md:bottom-2 md:right-1" width={250} height={250} src={ContentMarketing} alt="seo"/>
                  </div>

                </motion.div>


                <motion.div 

                initial={{
                  opacity: 0,
                  x: "100%"
                }}

                whileInView={{
                  opacity: 1,
                  x: 0
                }}

                transition={{
                  ease: easeIn,
                  duration: 0.5,
                  delay: 0.4
                }}

                className="bg-[#F5F5F5] flex flex-col gap-2 md:h-full md:w-[50%] p-4 md:relative rounded-xl shadow-custom">

                  <div className="flex flex-col gap-3 md:w-[75%] z-10">
                    <h5 className={`${inter.className}`}>SERVICE FOURE</h5>
                    <h4 className={`${caladea.className} text-xl text-[#066FE0]`}>Email Marketing & Funnels</h4>
                    <p className={`${mulish.className} text-[#066FE0]`}>Turn leads into loyal customers. Our automated email sequences and funnels keep your audience engaged and buying.</p>
                  </div>
                  <div className="flex justify-end z-0">
                    <Image className="md:absolute md:bottom-2 md:right-1" width={180} height={180} src={EmailMarketing} alt="paid add"/>
                  </div>
                  
                </motion.div>
              </div>

            </div>
        </div>
    </div>
  )
}

export default Services