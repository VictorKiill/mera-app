import Image from "next/image";
import Layout from "../components/layout";
import Logo from "../assets/imgs/Logo.jpg"
import Carousel from "../components/carousel";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center z-10">
        <div className="">
          <Image
            src={Logo}
            height={490}
            width={490}
            alt="Logo"
            className="rounded-full animate-entering overflow-visible"
            priority
          />
        </div>
        <div className="bg-whithish absolute max-w-xl -z-10 mx-auto p-3 opacity-0 animate-fadeIn"><Carousel /></div>
      </div>
    </Layout>
  )
}
