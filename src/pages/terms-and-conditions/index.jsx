import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Breadcrumb from "../../components/breadcrumb";
import SectionI from "./section-i";

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | Neurix Studio</title>
      </Helmet>
      <Breadcrumb title="Terms & Conditions" />
      <SectionI />
    </>
  );
};

export default TermsAndConditions;
