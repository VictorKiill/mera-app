import Image from "next/image";
import Layout from "../components/layout";
import Logo from "../assets/imgs/Logo.jpg"
import Sabonete from "../assets/imgs/sabonete1.png"

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <div className="">
          <Image
            src={Logo}
            height={490}
            width={490}
            alt="Logo"
            className="rounded-full animate-entering overflow-visible"
            priority
          />
          <div className="bg-whithish absolute top-1/3 left-1/4">
          </div>
        </div>
      </div>
    </Layout>
  )
}
