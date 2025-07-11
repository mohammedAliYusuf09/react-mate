"use client"

import { Inter, Mulish } from "next/font/google";
import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Add weights you plan to use
  display: "swap",
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Add weights you plan to use
  display: "swap",
});


type FAQItem = {
  title: string;
  description: string;
};

const faqData: FAQItem[] = [
  {
    title: "How long until I start seeing results?",
    description:
      "That depends on the service. Paid ad campaigns can show results within 1–2 weeks, while SEO and content strategies typically take 1–3 months to gain traction. We’ll give you a realistic timeline before we begin.",
  },
  {
    title: "Do you work with small businesses or startups?",
    description:
      "Absolutely! We love helping small teams grow. Whether you’re a solo founder or a team of five, we tailor our services to your budget and goals.",
  },
  {
    title: " What if I don’t know which service I need?",
    description:
      "No problem at all. Book a free strategy call, and we’ll walk you through what fits your business best — no pressure, just clear guidance.",
  },
  {
    title: "What’s included in your monthly packages?",
    description:
      "Each package includes campaign setup, strategy, performance tracking, and regular reporting. Higher-tier plans offer multichannel ads, landing page optimization, and funnel building.",
  },
  {
    title: "Can I cancel or pause my plan anytime?",
    description:
      "Yes! All plans are month-to-month with no long-term contracts. You can cancel or pause anytime — just give us a 7-day notice.",
  },
  {
    title: "How do you measure success for your clients?",
    description:
      "We track what matters: conversions, leads, ROI, and traffic growth. You’ll receive detailed reports and insights so you can see exactly how your business is growing.",
  },
];

function FAQCart() {

  const [open, setOpen] = useState<number | null>(3);

  const handleAddButtonClick = (idx: number) => {
    setOpen(open === idx ? null : idx);
  };

  return (
    <div className="mx-10 py-10 flex flex-col gap-4">

      {faqData.map((faq, idx) => (
        <div
          key={idx}
          className={`flex flex-col gap-3 border ${open == idx ? "bg-[#EAEEDA] border-[#A99292]" : "bg-[#D4E7E9] border-[#A99292]"}  p-4 rounded-2xl transition-all ease-in-out duration-300`}
        >
          <div className="flex items-center justify-between">
        <h5
          className={`${inter.className} font-semibold text-[#2F2E41] text-xl`}
        >
          {faq.title}
        </h5>
        <span
          className="text-3xl cursor-pointer hover:text-gray-400 transition-colors ease-in duration-150"
          onClick={() => handleAddButtonClick(idx)}
        >
          {open === idx ? <CiCircleMinus /> : <CiCirclePlus />}
        </span>
          </div>
          <p
        className={`${mulish.className} font-semibold text-[#5A5968] text-lg transition-all ease-in-out duration-300 ${open == idx ? "block" : "hidden"}`}
          >
        {faq.description}
          </p>
        </div>
      ))}

    </div>
  );
}

export default FAQCart;

{
  /* <CiCirclePlus /> */
}
