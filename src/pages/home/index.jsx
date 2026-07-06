import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import SectionI from "./section-i";
import SectionII from "./section-ii";
import SectionService from "../services/section-i";
import SectionIII from "./section-iii";
import SectionIV from "./section-iv";
import SectionV from "./section-v";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Neurix Studio</title>
      </Helmet>
      <SectionI />
      <SectionII />
      <SectionService />
      <SectionIII />
      <SectionIV />
      <SectionV />
    </>
  );
};

export default Home;
