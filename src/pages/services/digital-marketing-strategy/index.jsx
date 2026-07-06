import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Breadcrumb from "../../../components/breadcrumb";
import SectionI from "./section-i";
import SectionII from "./section-ii";

const DigitalMarketingStrategy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Digital Marketing Strategy | Neurix Studio</title>
      </Helmet>
      <Breadcrumb title="Digital Marketing Strategy" />
      <SectionI />
      <SectionII />
    </>
  );
};

export default DigitalMarketingStrategy;
