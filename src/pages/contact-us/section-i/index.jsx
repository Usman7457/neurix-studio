import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SectionI = () => {
  const formik = useFormik(
    {
      initialValues: {
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      },

      validationSchema: Yup.object({
        name: Yup.string().required("Name is required"),
        email: Yup.string()
          .email("Invalid email")
          .required("Email is required"),
        phone: Yup.string().required("Phone is required"),
        service: Yup.string().required("Please select a service"),
        message: Yup.string().required("Message is required"),
      }),

      onSubmit: async (values, { resetForm }) => {
        try {
          const formData = new URLSearchParams();

          formData.append("name", values.name);
          formData.append("email", values.email);
          formData.append("phone", values.phone);
          formData.append("service", values.service);
          formData.append("message", values.message);

          const response = await fetch(
            "https://script.google.com/macros/s/AKfycbzeZIPt7aW8WTrNWEQzeJC7j_dT4e6lk_l-vJ3lEwtOO1E63w0UkcUo2ej8AEHkUKfj/exec",
            {
              method: "POST",
              body: formData,
            },
          );

          const text = await response.text();

          if (text === "success") {
            toast.success("Message sent successfully 🚀");
            resetForm();
          } else {
            toast.error("Failed to send message ❌");
          }
        } catch (error) {
          console.log(error);
          toast.error("Network error ❌");
        }
      },
    },
    [],
  );

  return (
    <>
      <div className="contact-area" id="contact">
        <div className="container">
          <div className="faq-one__top">
            <div className="row">
              <div className="col-lg-5">
                <div className="sec-title sec-title--two text-start">
                  <div className="sec-title__tagline justify-content-start wow fadeInUp">
                    <span className="sec-title__tagline__image">
                      <img
                        src="assets/images/shapes/work-process-1-1.png"
                        alt="shape"
                      />
                    </span>
                    Our Contact Us
                  </div>
                </div>
              </div>

              <div className="col-lg-7">
                <div className="sec-title sec-title--two text-start">
                  <h2 className="sec-title__title bw-split-text">
                    Request A Free Quote now Get This Contact us.
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="row gutter-y-30">
            <div className="col-lg-5">
              <div className="contact-area__left">
                <div className="contact-area__big-title">
                  CONTACT <br /> NOW
                </div>

                <div className="contact-area__call wow fadeInLeft">
                  <div className="contact-area__icon">
                    <i className="icon-phone-call"></i>
                  </div>

                  <div className="contact-area__call__content">
                    <span className="contact-area__call__subtitle">
                      Emergency CALL:
                    </span>
                    <a
                      href="tel:+447377578671"
                      className="contact-area__call__link"
                    >
                      + 44 7377 578671
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* FORM (ONLY LOGIC CHANGED) */}
            <div className="col-lg-7">
              <div className="contact-area__content">
                <form
                  onSubmit={formik.handleSubmit}
                  className="contact-area__form contact-form-validated form-one wow fadeInRight"
                >
                  <div className="form-one__group">
                    {/* Name */}
                    <div className="form-one__control form-one__control--full">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name *"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                      />
                    </div>

                    {/* Email */}
                    <div className="form-one__control form-one__control--full">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email Address*"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                      />
                    </div>

                    {/* Phone */}
                    <div className="form-one__control">
                      <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number *"
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                      />
                    </div>

                    {/* Service Dropdown (FIXED) */}
                    <div className="form-one__control">
                      <input
                        type="text"
                        name="service"
                        placeholder="Your Subject *"
                        onChange={formik.handleChange}
                        value={formik.values.service}
                      />
                    </div>

                    {/* Message */}
                    <div className="form-one__control form-one__control--full">
                      <textarea
                        name="message"
                        placeholder="Your Comments *"
                        onChange={formik.handleChange}
                        value={formik.values.message}
                      ></textarea>
                    </div>

                    {/* Submit */}
                    <div className="form-one__control form-one__control--full">
                      <button type="submit" className="bemox-btn">
                        <span className="bemox-btn__text">Submit</span>
                        <i className="icon-arrow-small-down"></i>
                      </button>
                    </div>
                  </div>
                </form>

                <div className="result"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast */}
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default SectionI;
