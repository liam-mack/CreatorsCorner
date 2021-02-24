import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import "./FauxList.scss";

function FauxList({
  headline,
  headers,
  body,
  body2,
  body3,
  body4,
  buttonLabel,
  buttonColour,
  buttonLink,
  sectionId,
}) {
  return (
    <div className="container">
      <div className="col">
        <div className="primary__hero-text-wrapper-paragraph" id={sectionId}>
          {headline && <h1 className="heading dark">{headline}</h1>}
          <div className="fauxList">
            {headers && (
              <strong className="subHeading dark">{headers[0]}</strong>
            )}
            <p className="primary__hero-body dark">{body}</p>
          </div>
          <div className="fauxList">
            {headers && (
              <strong className="subHeading dark">{headers[1]}</strong>
            )}
            <p className="primary__hero-body dark">{body2}</p>
          </div>
          <div className="fauxList">
            {headers && (
              <strong className="subHeading dark">{headers[2]}</strong>
            )}
            <p className="primary__hero-body dark">{body3}</p>
          </div>
          <div className="fauxList">
            {headers && (
              <strong className="subHeading dark">{headers[3]}</strong>
            )}
            <p className="primary__hero-body dark">{body4}</p>
          </div>
          {buttonLink && (
            <div className="buttonWrapper">
              <p className="contactPrompt">Want to learn more?</p>
              <Link to={buttonLink}>
                <Button buttonColour={buttonColour}>{buttonLabel}</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FauxList;
