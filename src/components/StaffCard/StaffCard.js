import React from "react";
import "./StaffCard.scss";

function StaffCard({
  link,
  image,
  name,
  linkedIn,
  position
}) {
  return (
    <div className="staff-card" data-aos="fade-left" data-aos-duration="1500">
      <div className="staff-content">
        {link ? (
          <span className="teamLink" href={link} target="_blank">
            <img
              className="staff-profile staff-link"
              src={image}
              alt={`${name}-profile`}
            />
            <a className = "linkOverlay" href={link} target="_blank"><img className="linkedOverlay" src={linkedIn ? "/images/linkedInW.png" : "/images/personalSiteW.png"}/></a>
          </span>
        ) : (
          <img
          className="staff-profile"
          src={image}
          alt={`${name}-profile`}
        ></img>
        )}
      </div>
      <strong className="staffMember"> {name} </strong>
      <br />
      <p className="staff-position"> {position} </p>
      <br />
    </div>
  );
}

export default StaffCard;
