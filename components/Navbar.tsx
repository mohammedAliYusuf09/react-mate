import { Caladea, Mulish, Inter } from "next/font/google";
import { CiMenuBurger } from "react-icons/ci";

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
  weight: ["400", "700"], // You can also add "italic", "700italic" if needed
  display: "swap",
});


function Navbar() {
  return (
    <div className="h-12 xl:h-16 border-b border-[#DF8FD1] items-center" id="top">

      <div className="responsive-container flex justify-between h-full">
         <p className={`flex items-center ${inter.className}"`}>
          <span className="bg-[var(--color-action)] text-white px-2 rounded-3xl">Reach</span>
          MATE
        </p> 

        <div className={`hidden md:flex items-center gap-3 ${mulish.className} text-[var(--color-des)] `}>
          <a className="hover:text-gray-700 transition-colors ease-in duration-100" href="#top" >Hero</a>
          <a className="hover:text-gray-700 transition-colors ease-in duration-100" href="#services" >Services</a>
          <a className="hover:text-gray-700 transition-colors ease-in duration-100" href="#stories" >Stories</a>
          <a className="hover:text-gray-700 transition-colors ease-in duration-100" href="#portfolio" >Portfolio</a>
          <a className="hover:text-gray-700 transition-colors ease-in duration-100" href="#pricing" >Pricing</a>
        </div>

        <div className="hidden h-full md:flex items-center">
           <button className={`${inter.className} text-white px-4 py-[5px] rounded-lg bg-[#6C63FF] hover:bg-[#695997] transition-colors ease-in-out duration-150 cursor-pointer`}>Contact</button>
        </div>

        <div className="md:hidden h-full flex items-center">
          <span className="text-[var(--socendary)] text-2xl"><CiMenuBurger /></span>
        </div>
        
      </div>
    </div>
  )
}

export default Navbar