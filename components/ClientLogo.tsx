import LogoA from "@/public/assets/logoa.png"
import LogoB from "@/public/assets/logob.png"
import LogoD from "@/public/assets/logod.png"
import LogoF from "@/public/assets/logof.png"
import LogoG from "@/public/assets/logog.png"
import Image from "next/image"

function ClientLogo() {
  return (
    <div className="responsive-container flex gap-10 items-center justify-center mt-4 md:mt-0 pb-10">
      <Image className="logo-image" src={LogoA} alt="logo a"/>
      <Image className="logo-image" src={LogoB} alt="logo b"/>
      <Image className="logo-image" src={LogoD} alt="logo d"/>
      <Image className="logo-image" src={LogoF} alt="logo f"/>
      <Image className="logo-image" src={LogoG} alt="logo g"/>
    </div>
  )
}

export default ClientLogo