import React from "react";
import "./ContactForm.scss";

// Formspree currently has a form handler & Thank You page, but it should be redirected
function Contact() {
  return (
    <div className="container contact">
      <div className="row primary__hero-row">
        <div className="contactCol">
          <form
            id="contactForm"
            action="https://formspree.io/xqkyrlvg"
            method="POST"
          >
            <h2>Say Hello!</h2>
            <input
              className="contactData"
              type="text"
              id="name"
              name="Name"
              placeholder="Name"
              required
            />
            <input
              className="contactData"
              type="email"
              id="Email"
              name="Email"
              placeholder="Email Address"
              required
            />
            <textarea
              className="contactData"
              id="elaborate"
              name="elaborate"
              placeholder="Message"
              cols="20"
              rows="10"
              required
            ></textarea>
            <h6 className="contactEmail"><i className="fa fa-envelope-o" aria-hidden="true"></i> creatorscornercu@gmail.com</h6>
            <input className="btn pinkBtn" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
