import { Mulish, Saira } from "next/font/google";
import { PortfolioItem } from "./Portfolio";


const mulish = Mulish({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // Add weights you plan to use
  display: 'swap',
});

const saira = Saira({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // Add weights you plan to use
  display: 'swap',
});

function PortfolioCart({info} : {info : PortfolioItem}) {
  return (
    <div className="bg-[#6C63FF] h-[250px] relative rounded-2xl group border border-gray-300 p-4 hover:bg-white hover:shadow-2xl transition-all duration-300 ">


      <h2 className={`${saira.className} absolute text-3xl text-white font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 portfolio-hover-h2 transition-all duration-300`}>{info.title}</h2>

      <p className={`hidden ${mulish.className} font-semibold group-hover:pt-12 text-[#5A5968] group-hover:block transition-all duration-300`}>
        {info.description}
      </p>

    </div>
  )
}

export default PortfolioCart

// bg-[#6C63FF]