import styles from "../styles/header.module.css"
import Image from "next/image"
import logo from "../assets/imgs/LogoEx.png"
import Link from "next/link"

export default function Header() {
    return (
        <header className={`${styles.container} flex items-center pl-3`}>
            <Link href={"/"}>
                <Image
                    src={logo}
                    height={70}
                    width={244}
                    alt="Logo"
                    className="cursor-pointer"
                />
            </Link>
        </header>
    )
}