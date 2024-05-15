import { Kumbh_Sans } from "next/font/google";
import Header from "./components/Header";
import Product from "./components/Product";

const kumbh_sans = Kumbh_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header/>
      <main
        className={`${kumbh_sans.className}`}
      >
        <Product/>
      </main>
    </>
  );
}
