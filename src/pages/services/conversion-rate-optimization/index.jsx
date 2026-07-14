import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Breadcrumb from "../../../components/breadcrumb";
import SectionI from "./section-i";
import SectionII from "./section-ii";

const ConversationRateOptimization = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Conversion Rate Optimization | Neurix Studio</title>
      </Helmet>
      <Breadcrumb title="Turn More Visitors Into Customers" />
      <SectionI />
      <SectionII />
    </>
  );
};

export default ConversationRateOptimization;
