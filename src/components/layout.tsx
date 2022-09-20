import { FormControl } from "@chakra-ui/react"
import Footer from "./footer";
import Header from "./header";
import type { layoutProps } from "@/types/props";


const Layout = ({children}:layoutProps) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout;