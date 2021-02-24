import React from "react";
import PrimaryComponent from "../../components/PrimaryComponent/PrimaryComponent";
import BannerImage from "../../components/BannerImage/BannerImage";
import ContactForm from "../../components/ContactForm/ContactForm"
import {contactObjOne} from "./ContactData";
import ScrollToTopOnMount from "../../components/ScrollToTopOnMount/ScrollToTopOnMount";
import Footer from "../../components/Footer2/Footer";
import "./Contact.scss";


function Contact(props) {
  return (
    <div className="contactPage">
      <ScrollToTopOnMount />
      <BannerImage name='hero' banner="ContactBanner" alt="Contact banner" title="Contact Us"/>
      <ContactForm />
      <PrimaryComponent {...contactObjOne} />
      <Footer />
    </div>
  );
}

export default Contact;
