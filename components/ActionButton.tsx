import { Mulish } from "next/font/google";

const mulish = Mulish({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // Add weights you plan to use
  display: 'swap',
});

function ActionButton() {
  return (
    <button className={`${mulish.className} bg-[#6C63FF] text-lg md:text-xl text-white
          px-5 py-2 hover:bg-[#695997] transition-colors ease-in-out duration-150`}>Get Free Strategy Cal</button>
  )
}

export default ActionButton