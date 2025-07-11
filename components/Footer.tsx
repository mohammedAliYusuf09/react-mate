import { Inter, Mulish } from "next/font/google";

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

function Footer() {
  return (
    <div className="responsive-container">
      <div className={`${mulish.className} `}>
        <div className="border-t border-[#716f9c] flex flex-col gap-3 sm:gap-0 sm:flex-row py-6">
          
          <div className="flex flex-col gap-2 sm:w-[60%] justify-center">
            <p className={`flex items-center ${inter.className}"`}>
            <span className="bg-[var(--color-action)] text-white px-2 rounded-3xl">
              Reach
            </span>
            MATE
            </p>
            <h6 className={`${inter.className} font-semibold`}>reachmate@gmail.com</h6>
            <h6 className={`${inter.className} font-semibold`}>© 2025 Yusuf Ali. All rights reserved.</h6>
          </div>

          <div className="sm:w-[40%] grid grid-cols-2 grid-rows-5 gap-2">
               <a href="hero">Hero</a>
               <a href="services">Services</a>
               <a href="stories">Stories</a>
               <a href="portfolio">Portfolio</a>
               <a href="Pricing">Pricing</a>
               <a href="facebook">Facebook</a>
               <a href="hero">Tweter</a>
               <a href="hero">Instagram</a>
               <a href="hero">Linkdin</a>
               <a href="hero">Redit</a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Footer