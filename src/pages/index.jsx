import Image from "next/image";
import Layout from "../components/layout";
import Carousel from "../components/carousel";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center z-10">
        <img src="/imgs/Logo.jpg" alt="Logo" className="rounded-full animate-entering max-h-full" />
        <div className="bg-whithish absolute max-w-xl -z-10 mx-auto p-3 opacity-0 animate-fadeIn"><Carousel /></div>
      </div>
    </Layout>
  )
}
