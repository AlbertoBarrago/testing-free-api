import Navbar from './navbar'
import Footer from "./footer";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


// @ts-ignore
export default function Layout({children}) {
    return (
        <>
            <Navbar/>
            <main>{children}</main>
            <Footer/>
        </>
    )
}