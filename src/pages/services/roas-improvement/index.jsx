import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Breadcrumb from "../../../components/breadcrumb";
import SectionI from "./section-i";
import SectionII from "./section-ii";

const RoasImprovement = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>ROAS Improvement | Neurix Studio</title>
      </Helmet>
      <Breadcrumb title="ROAS Improvement" />
      <SectionI />
      <SectionII />
    </>
  );
};

export default RoasImprovement;
