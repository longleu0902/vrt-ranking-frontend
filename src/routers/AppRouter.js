import { Route, Routes } from "react-router-dom"
import { Home } from "../component/Home/Home"
import { Ranking } from "../component/ranking/Ranking"
import { Events } from "../component/Events"
import { About } from "../component/about"
import { Contact } from "../component/contact-us"
import { NewDetail } from "../component/new-detail"




export const AppRouter = () => {
    return (
        <>  
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ranking/:id/:slug" element={<Ranking />} />
                <Route path="/events" element={<Events />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/new-detail" element={<NewDetail />} />



            </Routes>
        </>
    )
}