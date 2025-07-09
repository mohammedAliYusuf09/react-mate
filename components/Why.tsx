import { Caladea, Mulish, Inter } from "next/font/google";
import Image, { StaticImageData } from "next/image";
import CartWhy from "./CartWhy";
import Confi from "@/public/assets/confi.png"
import RT from "@/public/assets/relabletrusted.png"
import VAL from "@/public/assets/value.png"
import FP from "@/public/assets/firndlyprofetional.png"
import DarkHeading from "./DarkHeading";

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

const caladea = Caladea({
  subsets: ["latin"],
  weight: ["700"], // You can also add "italic", "700italic" if needed
  display: "swap",
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
    <div className="responsive-container flex md:flex-row flex-col  py-10 md:h-[700px]">
      <div className="md:w-[40%]">
        <h6 className={`${inter.className} text-[#5FA1E7]`}>What Matters</h6>
        <div className="py-4">
          <DarkHeading>
          Why Choose Us
        </DarkHeading>
        </div>
        
        <p className={`${mulish.className} text-lg`}>We combine strategy, creativity, and data-driven decisions to help your business grow with confidence. Here’s what sets us apart.</p>
      </div>

        <div className="md:w-[60%]">
          <div className="flex pt-10 md:pt-32 w-full">
            <div className="pr-3 pt-6 md:pt-20 flex flex-col w-[50%]">
                <div className="pb-3 flex gap-2">
                  <CartWhy info={whyCards[0]}/>
                </div>

                <span className="w-full h-[1px] border-left-to-right"/>

                <div className="flex gap-2 mt-2">
                  <CartWhy info={whyCards[1]}/>
                </div>
            </div>

            <span className="w-[1px] h-[400px] border-bg"/>


            <div className="pl-3 w-[50%] flex flex-col">
              <div className="border-b border-blue-400 pb-3 flex gap-2">
                <CartWhy info={whyCards[2]}/>
              </div>

              <span className="w-full border-right-to-left"/>

              <div className="flex gap-2 mt-2">
                <CartWhy info={whyCards[3]}/>
              </div>
          </div>

        </div>
      </div>
      
    </div>
  )
}

export default Why