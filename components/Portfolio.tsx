import { Caladea } from "next/font/google";
import PortfolioCart from "./PortfolioCart";

const caladea = Caladea({
  subsets: ["latin"],
  weight: ["700"], // You can also add "italic", "700italic" if needed
  display: "swap",
});

export interface PortfolioItem {
  title: string;
  description: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    title: "UrbanThreads",
    description: "We partnered with UrbanThreads to revamp their online presence through a targeted social media campaign and SEO optimization. Our digital marketing strategies increased their website traffic by 60% and boosted online sales.",
  },
  {
    title: "GreenLeaf Organics",
    description: "GreenLeaf Organics approached us to improve their digital footprint. By implementing content marketing, email automation, and paid ads, we helped them grow their subscriber base and achieve a 40% increase in monthly leads, resulting in higher conversions and customer retention.",
  },
  {
    title: "TechNova Solutions",
    description: "TechNova Solutions needed to generate more B2B leads. We developed a LinkedIn outreach strategy and optimized their landing pages, which resulted in a 3x increase in qualified leads and significantly improved their ROI from digital channels.",
  },
  {
    title: "Bella Beauty",
    description: "Bella Beauty wanted to launch a new product line. Our team executed an influencer marketing campaign and managed their PPC ads, leading to a successful product launch with a 75% increase in online engagement and a surge in first-month sales.",
  },
  {
    title: "FitLife Gym",
    description: "FitLife Gym sought to attract new members post-pandemic. We created a local SEO strategy and engaging video content for social media, which drove a 50% increase in membership sign-ups and enhanced their community presence.",
  },
  {
    title: "TravelEase",
    description: "TravelEase needed to recover bookings after travel restrictions eased. We designed a retargeting ad campaign and refreshed their website content, resulting in a 2x increase in bookings and improved customer trust in their brand.",
  },
];

function Portfolio() {
  return (
    <div className="responsive-container py-10">
      <h2 className={`${caladea.className} text-2xl `}>Case Study</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:mt-10 mt-6 items-center justify-center">
        {portfolioItems.map((item, idx) => (
          <PortfolioCart key={idx} info={item} />
        ))}
      </div>
    </div>
  )
}

export default Portfolio