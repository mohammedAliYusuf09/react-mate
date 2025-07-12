import Image from "next/image"
import { Mulish, Inter } from "next/font/google";
import { WhyCardData } from "./Why";

const inter = Inter({
  subsets: ['latin'],
  weight: ['600', '700'], // Add weights you plan to use
  display: 'swap',
});


const mulish = Mulish({
  subsets: ['latin'],
  weight: ['400'], // Add weights you plan to use
  display: 'swap',
});



function CartWhy({ info }: { info: WhyCardData }) {
  return (
    <>
    <div>
      <Image width={100} height={100} src={info.image} alt="confidence icon"/>
    </div>

      <div>
        <h4 className={`${inter.className} text-[#2F2E41]`}>{info.title}</h4>
        <p className={`${mulish.className} text-[#5A5968]`}>{info.description}</p>
      </div>
    </>
  )
}

export default CartWhy