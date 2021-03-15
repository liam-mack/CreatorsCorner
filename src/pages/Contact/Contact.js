import React from "react";
import PrimaryComponent from "../../components/PrimaryComponent/PrimaryComponent";
import BannerImage from "../../components/BannerImage/BannerImage";
import ContactForm from "../../components/ContactForm/ContactForm"
import {contactObjOne} from "./ContactData";
import Footer from "../../components/Footer2/Footer";
import "./Contact.scss";


function Contact(props) {
  return (
    <div className="contactPage">
      <BannerImage name='hero' banner="Contact" alt="Contact banner" title="CONTACT US"/>
      <ContactForm />
      <PrimaryComponent {...contactObjOne} />
      <Footer />
    </div>
  );
}

export default Contact;
