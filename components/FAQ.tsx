import { Inter } from "next/font/google";
import DarkHeading from "./DarkHeading"
import FAQCart from "./FAQCart";

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // Add weights you plan to use
  display: 'swap',
});


function FAQ() {
  return (
    <div className="responsive-container py-10">
        <div className="flex flex-col items-center gap-4">
            <span className={`bg-amber-200 px-2 rounded ${inter.className} text-[#6C63FF]`}>MOST ASKED </span>
            <DarkHeading>
            Questions & Answers
            </DarkHeading>
        </div>

        <FAQCart/>


    </div>
  )
}

export default FAQ