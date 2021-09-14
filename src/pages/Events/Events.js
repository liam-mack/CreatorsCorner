import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import Modal from "react-modal";
import { Button } from "../../components/Button/Button";
import Footer from "../../components/Footer2/Footer";
import UpcomingEvent from "../../components/UpcomingEvent/UpcomingEvent";
import PrimaryComponent from "../../components/PrimaryComponent/PrimaryComponent";
import StaffDirectory from "../../components/StaffDirectory/StaffDirectory";
import speakers from "../../speakerdb/speakerdb.json";
import { eventsObjOne, eventsObjTwo } from "./EventsData.js";
import BannerImage from "../../components/BannerImage/BannerImage";
import "./Events.scss";

Modal.setAppElement("#root");

// Fix: Light text to picture descriptions
function About() {
  const [modalisOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  // const gapi = window.gapi;
  // const CLIENT_ID = "848448063852-m1va03bbkkmj01sjfpomkf8moqsvaspd.apps.googleusercontent.com";
  // const API_KEY = "AIzaSyD2R3k96hTSUteE9ohEWQXYEsNPk86nLls";
  // const SCOPES = "https://www.googleapis.com/auth/calendar.readonly";
  // const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];

  return (
    <div className="eventsPage">
      <BannerImage name='hero' banner="Events" alt="News and Events Page Banner" title="NEWS & EVENTS"/>
      <div className="container">
        <h1 className="newsTitle">Page 3</h1>
      </div>
      {/* <div className="portfolioContainer eventSection" id="upcoming">
        <h1 className="eventSection-header">UPCOMING EVENTS</h1>
        <div className="upcomingWrapper">
          <UpcomingEvent day="16" title="Team Meeting"/>
          <UpcomingEvent day="23" title="Team Meeting"/>
          <UpcomingEvent day="23" title="Jay Andrews/Creator's Corner"/>
        </div>
        <Button
          buttonColour="calendarBtn"
          onClick={openModal}
          style={{ margin: "auto" }}
        >
          Full Calendar
        </Button>
        <Modal
          className="calendarModal"
          isOpen={modalisOpen}
          onRequestClose={() => setModalIsOpen(false)}
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            },
          }}
        >
          <div className="responsiveCal">
            <iframe
              src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FToronto&amp;src=NDdiMWNkMWc2dGk2ZWYxZzc2ZmtuNWxlcDhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%239E69AF&amp;showTitle=0&amp;showNav=1&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;showPrint=0"
              width="800"
              height="600"
              frameborder="0"
              scrolling="no"
              title="Calendar"
            ></iframe>{" "}
          </div>
        </Modal>
      </div> */}
      <PrimaryComponent {...eventsObjOne}/>
      <div className="staffDirectoryWrapper peach">
        <StaffDirectory staff={speakers} />
        <div
        className="buttonWrapper"
        data-aos="flip-left"
        data-aos-duration="1500"
      >
        <p className="workTogether">
          Interested in running an event with our club?
        </p>
        <HashLink to="/Contact#top">
          <Button buttonColour="peachBtn">Contact Us</Button>
        </HashLink>
      </div>
      </div>
        {/* <PrimaryComponent {...eventsObjTwo} /> */}
      <Footer />
    </div>
  );
}

export default About;
