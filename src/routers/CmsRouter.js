import { Route, Routes } from "react-router-dom";
import { CmsHome } from "../component/home-cms";

export const CmsRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<CmsHome />} />
      </Routes>
    </>
  );
};
