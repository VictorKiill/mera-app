import styles from "../styles/header.module.css"
import Image from "next/image"
import logo from "../assets/imgs/LogoEx.png"
import Link from "next/link"
import Button from "./button"

export default function Header() {
    return (
        <header className={`${styles.container} flex items-center justify-between px-5`}>
            <Link href={"/"}>
                <Image
                    src={logo}
                    height={70}
                    width={244}
                    alt="Logo"
                    className="cursor-pointer"
                />
            </Link>
            <Button route='/sobre' text='Sobre Nós' />
        </header>
    )
}