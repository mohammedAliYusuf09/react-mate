import {  Inter } from "next/font/google";
import DarkHeading from "./DarkHeading";
import PriceCart from "./PriceCart";

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // Add weights you plan to use
  display: 'swap',
});





export interface PricePackage {
  package: string;
  description: string;
  price: string;
  features: string[];
}

const prices: PricePackage[] = [
  {
    package: "Starter",
    description: "Perfect for small businesses just getting started with digital marketing.",
    price: "$199",
    features: [
      "1 Ad Platform (Google or Facebook)",
      "Monthly Performance Reports",
      "Basic Keyword Research",
      "Landing Page Review",
      "Email Support"
    ]
  },
  {
    package: "Growth",
    description: "Ideal for growing brands ready to expand their reach and optimize campaigns.",
    price: " $499",
    features: [
      "Google + Facebook Ads",
      "Weekly Performance Reports",
      "Weekly Performance Reports",
      "Conversion Tracking Setup",
      "Dedicated Account Manager",
      "Priority Email Support"
    ]
  },
  {
    package: "Scale",
    description: "For businesses ready to scale fast with full-funnel strategy and data-driven insights.",
    price: "$999",
    features: [
      "Multi-Platform Ads",
      "Full Funnel Strategy & A/B Testing",
      "Custom Landing Page Design",
      "Conversion Rate Optimization",
      "Weekly Calls + Live Dashboard Access",
      "Priority Chat & Email Support"
    ]
  }
];


function Pricing() {
  return (
    <div className="responsive-container md:py-16 py-5">
      <div className="flex flex-col items-center gap-4">
        <span className={`bg-amber-200 px-2 rounded ${inter.className} text-[#6C63FF]`}>PACKAGES &</span>
        <DarkHeading>
          Performance-Based Pricing
        </DarkHeading>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:mt-10 mt-6 items-center justify-center mx-12">
          {prices.map((price, idx) => (
            <PriceCart key={idx} info={price} />
          ))}
        </div>

        


      </div>
      
    </div>
  )
}

export default Pricing