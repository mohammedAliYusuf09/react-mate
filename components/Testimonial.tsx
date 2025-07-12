import { StaticImageData } from "next/image";
import { Mulish } from "next/font/google";
import ActionButton from "./ActionButton";
import ContactButton from "./ContactButton";
import DarkHeading from "./DarkHeading"
import TestimonialCart from "./TestimonialCart";

import client1 from "@/public/assets/clients-image/client1.png"
import client2 from "@/public/assets/clients-image/client2.jpg"
import client3 from "@/public/assets/clients-image/client3.jpg"
import client4 from "@/public/assets/clients-image/client4.jpg"
import client5 from "@/public/assets/clients-image/client5.jpg"
import client6 from "@/public/assets/clients-image/client6.jpg"
import client7 from "@/public/assets/clients-image/client7.jpg"
import client8 from "@/public/assets/clients-image/client8.jpg"
import client9 from "@/public/assets/clients-image/client9.jpg"
import client10 from "@/public/assets/clients-image/client10.jpg"
import client11 from "@/public/assets/clients-image/client11.jpg"
import client12 from "@/public/assets/clients-image/client12.jpg"




const mulish = Mulish({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // Add weights you plan to use
  display: 'swap',
});



export interface TestimonialItem {
  image: StaticImageData;
  name: string;
  x_username: string;
  testimonial: string;
  title: string;
  date: string;
}

const testimonials: TestimonialItem[] = [
  {
    image: client1,
    name: "Alice Johnson",
    x_username: "@alicejohnson",
    testimonial: "ReachMate transformed our marketing strategy. Their team is proactive and results-driven.",
    title: "Director",
    date: "2023-08-15"
  },
  {
    image: client2,
    name: "Brian Lee",
    x_username: "@brianlee",
    testimonial: "We saw a 40% increase in leads within three months. Highly recommended!",
    title: "CEO",
    date: "2023-07-22"
  },
  {
    image: client3,
    name: "Cynthia Smith",
    x_username: "@cynthiasmith",
    testimonial: "Professional, creative, and always on time. Our brand visibility skyrocketed.",
    title: "Manager",
    date: "2023-09-10"
  },
  {
    image: client4,
    name: "David Kim",
    x_username: "@davidkim",
    testimonial: "Their insights into digital marketing are unmatched. We love working with them.",
    title: "Growth",
    date: "2023-06-30"
  },
  {
    image: client5,
    name: "Emma Williams",
    x_username: "@emmaw",
    testimonial: "The team at ReachMate is responsive and innovative. Our campaigns have never been better.",
    title: "CMO",
    date: "2023-10-05"
  },
  {
    image: client6,
    name: "Frank Miller",
    x_username: "@frankmiller",
    testimonial: "They truly care about our success. We appreciate their dedication and expertise.",
    title: "Founder",
    date: "2023-05-18"
  },
  {
    image: client7,
    name: "Grace Chen",
    x_username: "@gracechen",
    testimonial: "From strategy to execution, everything was seamless. Results exceeded expectations.",
    title: "VP",
    date: "2023-11-01"
  },
  {
    image: client8,
    name: "Henry Patel",
    x_username: "@henrypatel",
    testimonial: "Their creative approach helped us stand out in a crowded market.",
    title: "Lead",
    date: "2023-04-12"
  },
  {
    image: client9,
    name: "Isabella Garcia",
    x_username: "@isabellag",
    testimonial: "We value their transparency and clear communication. A fantastic partner.",
    title: "Manager",
    date: "2023-03-27"
  },
  {
    image: client10,
    name: "Jack Thompson",
    x_username: "@jackthompson",
    testimonial: "Our ROI improved dramatically after working with ReachMate.",
    title: "Owner",
    date: "2023-08-02"
  },
  {
    image: client11,
    name: "Karen Lopez",
    x_username: "@karenlopez",
    testimonial: "They delivered on every promise. We’re excited for future projects together.",
    title: "Director",
    date: "2023-09-19"
  },
  {
    image: client12,
    name: "Liam Nguyen",
    x_username: "@liamnguyen",
    testimonial: "Their expertise in digital campaigns is second to none. Highly effective team.",
    title: "Head",
    date: "2023-07-11"
  },
];

function Testimonial() {
  return (
    <div id="stories" className="responsive-container mb-8">
      <div className="px-10 md:flex">
        <div className="md:w-[50%]">
          <DarkHeading>
            What Our Clients Say About Working With Us
          </DarkHeading>
          <p className={`${mulish.className} font-semibold`}>Hear from the people we&rsquo;ve helped grow.</p>
        </div>
        <div className="md:w-[50%]">
          <p className={`${mulish.className} font-normal`}>We&rsquo;ve helped businesses grow through smart, results-driven marketing. Here&rsquo;s what they say.</p>
          <div className="flex gap-4 mt-2">
            <ActionButton/>
            <ContactButton/>
          </div>
        </div>
        
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:mt-20 mt-8 items-center justify-center">
        {testimonials.map((testimonial, idx) => (
          <TestimonialCart key={idx} info={testimonial} />
        ))}
      </div>

    </div>
  )
}

export default Testimonial