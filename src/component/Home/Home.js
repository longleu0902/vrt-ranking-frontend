import React, { useEffect, useState } from "react";
import "./Home.css";
import { HeaderHome } from "../HeaderHome";
import { HomeContent } from "../HomeContent";
import { HomeSearch } from "../home-search";
import { useDispatch, useSelector } from "react-redux";
import { setListRanking } from "../../Redux/data-ranking-reducer";
import { fakeData } from "../../Data/fake-data-ranking";


export const Home = () => {
  const dispatch = useDispatch()

  const getData = () => {
    dispatch(setListRanking(fakeData))
  }
  useEffect(()=> {
    getData();
  },[])

  return (
    <>
    <HeaderHome/>
    <HomeContent/>
    <HomeSearch/>

    </>
  );
};
