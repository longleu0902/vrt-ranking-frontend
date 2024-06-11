import { Route, Routes } from "react-router-dom"
import { Home } from "../component/Home/Home"
import { Ranking } from "../component/\bRanking/Ranking"




export const AppRouter = () => {
    return (
        <>  
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ranking/:id/:slug" element={<Ranking />} />

            </Routes>
        </>
    )
}