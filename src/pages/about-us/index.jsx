import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Breadcrumb from "../../components/breadcrumb";
import SectionI from "./section-i";
import SectionII from "./section-ii";
import SectionIII from "./section-iii";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>About Us | Neurix Studio</title>
      </Helmet>
      <Breadcrumb title="About Us" />
      <SectionI />
      <SectionII />
      <SectionIII />
    </>
  );
};

export default AboutUs;
