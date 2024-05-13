import { Kumbh_Sans } from "next/font/google";
import Header from "./components/Header";

const kumbh_sans = Kumbh_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header/>
      <main
        className={`flex flex-col items-center justify-between p-6 ${kumbh_sans.className}`}
      >
        {/*

          Sneaker Company

          Fall Limited Edition Sneakers

          These low-profile sneakers are your perfect casual wear companion. Featuring a 
          durable rubber outer sole, they’ll withstand everything the weather can offer.

          $125.00
          50%
          $250.00

          0
          Add to cart
        */}
      </main>
    </>
  );
}
