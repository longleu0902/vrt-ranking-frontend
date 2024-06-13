import React, { useState } from "react";
import "./Home.css";
import { HeaderHome } from "../HeaderHome";
import { HomeContent } from "../HomeContent";

export const Home = () => {
  return (
    <>
    <HeaderHome/>
    <HomeContent/>
    </>
  );
};
