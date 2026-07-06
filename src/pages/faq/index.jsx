import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Breadcrumb from "../../components/breadcrumb";
import SectionI from "./section-i";

const FAQ = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>FAQ's | Neurix Studio</title>
      </Helmet>
      <Breadcrumb title="FAQ's" />
      <SectionI />
    </>
  );
};

export default FAQ;
