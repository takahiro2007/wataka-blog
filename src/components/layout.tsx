import { css } from "@emotion/react";
import Footer from "./footer";
import Header from "./header";
import type { layoutProps } from "@/types/props";


const Layout = ({children}:layoutProps) => {
    return (
        <div css={containerStyle}>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

const containerStyle = css`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

export default Layout;