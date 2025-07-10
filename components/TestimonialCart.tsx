import { Mulish } from "next/font/google";
import Image from "next/image";
import { TestimonialItem } from "./Testimonial";

const mulish = Mulish({
  subsets: ['latin'],
  weight: ['200', '400', '600', '700'], // Add weights you plan to use
  display: 'swap',
});



function TestimonialCart({info}: {info: TestimonialItem}) {
  return (
    <div className={`bg-[#ffffff] ${mulish.className} testimonial-shadow p-6 rounded-2xl`}>
                <div className="flex items-center gap-3">
                    <Image className="rounded-full border border-gray-300" width={60} height={60} src={info.image} alt="Client Images" />
          
                    <div>
                      <h6 className="font-semibold text-[#5A5968]">{info.name}</h6>
                      <p className="font-normal text-[#5A5968]">{info.x_username}</p>
                    </div>
              
                </div>
          
                <p className="font-semibold mt-4 text-[#4F4D5E]">
                  {info.testimonial}
                </p>
          
                <div className="flex items-center justify-between pt-4">

                  <p className="font-extralight"> {info.date} </p>

                  <span className="bg-gray-300 px-2 py-1 rounded-2xl text-[#2F2E41]">{info.title}</span>

                </div>
          </div>
  )
}

export default TestimonialCart