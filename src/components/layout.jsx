import Footer from "./footer";
import Header from "./header";
import Head from 'next/head'

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Mera Cosméticos</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="grid grid-rows-[5rem_1fr_5rem] min-h-screen" >
                <Header />
                {children}
                <Footer />
            </div>
        </>
    )
}