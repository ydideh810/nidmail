import Head from "next/head"
import Footer from "./ui/Footer"
import Navbar from "./ui/Navbar"

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Niddam</title>
                <meta name='description' content="Experience the power of AI without sacrificing your privacy." />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/nid.ico' />
            </Head>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout
