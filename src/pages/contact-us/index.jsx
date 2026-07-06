import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Breadcrumb from "../../components/breadcrumb";
import SectionI from "./section-i";
import SectionII from "./section-ii";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Contact Us | Neurix Studio</title>
      </Helmet>
      <Breadcrumb title="Contact Us" />
      <SectionI />
      <SectionII />
    </>
  );
};

export default ContactUs;
