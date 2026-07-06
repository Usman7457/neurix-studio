import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Breadcrumb from "../../components/breadcrumb";
import SectionI from "./section-i";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Neurix Studio</title>
      </Helmet>
      <Breadcrumb title="Privacy Policy" />
      <SectionI />
    </>
  );
};

export default PrivacyPolicy;
