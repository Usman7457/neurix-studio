import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Breadcrumb from "../../../components/breadcrumb";
import SectionI from "./section-i";
import SectionII from "./section-ii";

const MarketingAutomation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Marketing Automation | Neurix Studio</title>
      </Helmet>
      <Breadcrumb title="Marketing Automation" />
      <SectionI />
      <SectionII />
    </>
  );
};

export default MarketingAutomation;
