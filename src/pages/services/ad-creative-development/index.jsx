import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Breadcrumb from "../../../components/breadcrumb";
import SectionI from "./section-i";
import SectionII from "./section-ii";

const ADCreativeDevelopment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>AD Creative Development | Neurix Studio</title>
      </Helmet>
      <Breadcrumb title="AD Creative Development" />
      <SectionI />
      <SectionII />
    </>
  );
};

export default ADCreativeDevelopment;
