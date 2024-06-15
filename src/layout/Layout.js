import { Footer } from "../component/Footer/Footer"
import { Nav } from "../component/Nav/Nav"
import { AppRouter } from "../routers/AppRouter"
import "./Layout.css"

export const Layout = () => {

    return (
        <>
            <Nav />
            <div className="layout">
                <AppRouter />
            </div>
            <Footer/>
        </>
    )
}
