import { useSelector } from "react-redux";
import { Footer } from "../component/Footer/Footer";
import { Nav } from "../component/Nav/Nav";
import { AppRouter } from "../routers/AppRouter";
import { CmsRouter } from "../routers/CmsRouter";
import "./Layout.css";

export const Layout = () => {
  const login = useSelector((state) => state.login.payload);

  if (login.isAuthentication) {
    return <CmsRouter/>;
  } else {
    return (
      <>
        <Nav />
        <div className="layout">
          <AppRouter />
        </div>
        <Footer />
      </>
    );
  }
};
