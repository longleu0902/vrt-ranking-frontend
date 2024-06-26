import { Route, Routes } from "react-router-dom"
import { Home } from "../component/Home/Home"
import { Ranking } from "../component/ranking/Ranking"
import { Events } from "../component/Events"
import { About } from "../component/about"
import { Contact } from "../component/contact-us"
import { NewDetail } from "../component/news-detail";
import { ProfileTeam } from "../component/profile-team"



export const AppRouter = () => {
    return (
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ranking/:id/:slug" element={<Ranking />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/news-detail" element={<NewDetail />} />
          <Route path="/events/news-detail" element={<NewDetail />} />
          <Route path="/ranking/:id/:slug/news-detail" element={<NewDetail />} />
          <Route path="/profile-team" element={<ProfileTeam />} />
          
        </Routes>
      </>
    );
}