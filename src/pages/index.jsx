import Image from "next/image";
import Layout from "../components/layout";
import Logo from "../assets/imgs/Logo.jpg"
import Button from "../components/button";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <div className="p-10">
          <Image
            src={Logo}
            height={450}
            width={450}
            alt="Logo"
            className="rounded-full animate-entering"
            priority
          />
        </div>
      </div>
    </Layout>
  )
}
