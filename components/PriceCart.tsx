import { Mulish, Inter } from "next/font/google";
import TikMark from "@/public/assets/icon-ticmark.png";
import Image from "next/image";
import { PricePackage } from "./Pricing";

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



function PriceCart({info} : {info: PricePackage}) {
  return (
    <div className="price-bg rounded-2xl p-[2px] hover:pt-3 hover:scale-y-105 shadow-2xs  transition-all ease-in-out duration-200">
          <div className={`${mulish.className} bg-white rounded-2xl h-full p-3 `}>
            <h5 className={`${inter.className} text-[#2F2E41] text-2xl font-bold mt-2`}>{info.package}</h5>

            <p className={`text-[#5A5968] font-semibold text-lg mt-2`}>
              {info.description}
            </p>

            <h6 className={`${inter.className} font-normal text-[#2F2E41] mt-2`}><span className="font-semibold text-xl">{info.price}</span>/month</h6>  

            <h6 className="text-[#39374b] text-lg mt-2 font-semibold">
              Features:
            </h6>

            <div className="mt-1 min-h-[200px] flex flex-col gap-1.5">
              {info.features.map((feature, idx) => (
                <div className="flex gap-2" key={idx}>
                  <div>
                  <Image width={20} height={20} src={TikMark} alt="tic mark" />
                  </div>
                  <p className="text-sm text-[#3D3B4E] font-semibold">{feature}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center mt-2">
              <button className={`${mulish.className} bg-[#6C63FF] text-lg md:text-xl text-white
             px-5 py-2 hover:bg-[#695997] transition-colors ease-in-out duration-150 rounded-2xl cursor-pointer`}>Let’s Get Started</button>
            </div>

          </div>
        </div>
  )
}

export default PriceCart