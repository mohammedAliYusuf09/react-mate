import { Caladea } from "next/font/google";

const caladea = Caladea({
  subsets: ["latin"],
  weight: ["700"], // You can also add "italic", "700italic" if needed
  display: "swap",
});


type DarkHeadingProps = {
  children: React.ReactNode;
};

function DarkHeading({ children }: DarkHeadingProps) {
  return (
    <h2 className={`${caladea.className} text-3xl `}>{children}</h2>
  );
}

export default DarkHeading