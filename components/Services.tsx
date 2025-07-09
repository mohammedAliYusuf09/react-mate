import {Mulish} from "next/font/google";

const mulish = Mulish({
  subsets: ['latin'],
  weight: ['600'], // Add weights you plan to use
  display: 'swap',
});
function Services() {
  return (
    <div className="h-[900px] bg-grid-blue">
        <div className="responsive-container">
          <h3 className={`${mulish.className} text-3xl text-white text-center py-6`}>What We Do Best</h3>
            <div>
              <div className="flex h-[350px] ">
                <div className="w-[65%] bg-[#F5F5F5]">
                  <div className="flex flex-col gap-3">
                    <h5>SERVICE ONE</h5>
                    <h4>SEO Optimization</h4>
                    <p>Rank higher and get discovered. We optimize your website to show up in search results and drive organic traffic that converts.</p>
                  </div>
                  
                </div>
                <div className="w-[35%]"></div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Services