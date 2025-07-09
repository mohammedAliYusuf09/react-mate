import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // Add weights you plan to use
  display: 'swap',
});

function ContactButton() {
  return (
    <button className={`${inter.className} text-white px-4 py-[5px] rounded-lg bg-[#6C63FF] hover:bg-[#695997] transition-colors ease-in-out duration-150 cursor-pointer`}>Contact</button>
  )
}

export default ContactButton