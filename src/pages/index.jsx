import Image from "next/image";
import Layout from "../components/layout";
import Logo from "../assets/imgs/Logo.jpg"
import Button from "../components/button";

export default function Home() {
  return (
    <Layout>
      <div className="md:grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] flex flex-col items-center justify-around">
        <div className="md:pt-8 md:pl-20">
          <Image
            src={Logo}
            height={300}
            width={300}
            layout='fixed'
            alt="Logo"
            className="rounded-full"
            priority
          />
        </div>
        <div></div>
        <div></div>
        <div className="flex items-center justify-evenly gap-16 mb-10 lg:justify-center lg:gap-[8rem]">
          <Button text="Produtos" route="/produtos" />
          <Button text="Sobre Nós" route="/sobre" />
        </div>
      </div>
    </Layout>
  )
}
