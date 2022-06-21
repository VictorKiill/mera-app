import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
    return (
        <div className="grid grid-rows-[5rem_1fr_5rem] h-full" >
            <Header />
            {children}
            <Footer />
        </div>
    )
}