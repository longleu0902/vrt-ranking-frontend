import React, { useEffect, useState } from "react";
import "./Home.css";
import { HeaderHome } from "../HeaderHome";
import { HomeContent } from "../HomeContent";
import { HomeSearch } from "../home-search";
import { useDispatch, useSelector } from "react-redux";
import { setListRanking } from "../../Redux/data-ranking-reducer";
import { fakeData } from "../../Data/fake-data-ranking";
import { HomeTableRanking } from "../home-table-ranking";
import { HomeAbout } from "../home-about";

export const Home = () => {
  const dispatch = useDispatch();

  const getData = () => {
    dispatch(setListRanking(fakeData));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="home-container">
      <HeaderHome />
      <div style={{ marginTop : "0rem"}}>
        <HomeAbout/>
        <HomeContent />
        <HomeSearch />
        <HomeTableRanking />
        <div style={{height : 500}}></div>
      </div>
    </div>
  );
};
