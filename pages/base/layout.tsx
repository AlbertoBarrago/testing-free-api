import Navbar from './navbar'
import Footer from "./footer";


// @ts-ignore
export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}