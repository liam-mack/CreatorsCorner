import React, { useState } from "react";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import "./PrimaryComponent.scss";

Modal.setAppElement("#root");

// Fix: clean up this mess of a component
function PrimaryComponent({
  singleImg,
  bgColour,
  topLine,
  lightText,
  lightTextDescription,
  headline,
  body,
  body2,
  body3,
  body4,
  body5,
  buttonLabel,
  buttonColour,
  buttonLink,
  img,
  alt,
  textStart,
  headers,
  logo,
  isLink,
  isBg,
  title,
  subtitle,
  blockText,
  imgLinks,
  footer,
  signature,
  sectionId,
}) {
  return (
    <>
      <div
        className={
          bgColour
            ? `primary__hero-section ${bgColour}`
            : "primary__hero-section "
        }
        id={sectionId}
      >
        <div className="container">
          {topLine && (
            <h1 className={lightText ? "top-line" : "top-line dark"}>
              {topLine}
            </h1>
          )}
          <div
            className={
              blockText
                ? "row primary__hero-row programsRow"
                : "row primary__hero-row"
            }
            style={{
              display: "flex",
              flexDirection: textStart === "start" ? "row-reverse" : "row",
            }}
          >
            {img && (
              <div className="col">
                {img.map(function (image, idx) {
                  return (
                    <div
                      className={
                        singleImg
                          ? "primary__hero-img-single"
                          : "primary__hero-img-multi"
                      }
                      data-aos="flip-down"
                      data-aos-duration="1000"
                      key={idx}
                    >
                      {imgLinks ? (
                        <a
                          href={imgLinks[idx]}
                          target="_blank"
                          aria-label={alt[idx]}
                        >
                          <img
                            src={image}
                            alt={alt[idx]}
                            className={
                              isLink ? "primary__pic-link" : "primary__pic-img"
                            }
                          />
                        </a>
                      ) : (
                        <img
                          src={image}
                          alt={alt[idx]}
                          className={
                            isBg
                              ? "primary__pic-background"
                              : "primary__pic-img"
                          }
                        />
                      )}

                      {title && (
                        <p
                          className={
                            lightText ? "pictureHeading" : "pictureHeading dark"
                          }
                        >
                          {title[idx]}
                        </p>
                      )}
                      {subtitle && (
                        <p
                          className={
                            lightText
                              ? "pictureSubtitle"
                              : "pictureSubtitle dark"
                          }
                        >
                          {subtitle[idx]}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
            {body && (
              <div className={blockText ? "column" : "col"}>
                <div
                  className={
                    body2
                      ? "primary__hero-text-wrapper-paragraph"
                      : "primary__hero-text-wrapper"
                  }
                >
                  {headline && (
                    <h1 className={lightText ? "heading" : "heading dark"}>
                      {headline}
                    </h1>
                  )}
                  {headers && (
                    <h2
                      className={lightText ? "subHeading" : "subHeading dark"} data-aos="fade-down"
                    >
                      {headers[0]}
                    </h2>
                  )}
                  <p
                    className={
                      lightTextDescription
                        ? "primary__hero-body"
                        : "primary__hero-body dark"
                    } data-aos="fade-down"
                  >
                    {body}
                  </p>
                  {headers && (
                    <h2
                      className={lightText ? "subHeading" : "subHeading dark"} data-aos="fade-down"
                    >
                      {headers[1]}
                    </h2>
                  )}
                  <p
                    className={
                      lightText
                        ? "primary__hero-body"
                        : "primary__hero-body dark"
                    } data-aos="fade-down"
                  >
                    {body2}
                  </p>
                  {headers && (
                    <h2
                      className={lightText ? "subHeading" : "subHeading dark"} data-aos="fade-down"
                    >
                      {headers[2]}
                    </h2>
                  )}
                  <p
                    className={
                      lightText
                        ? "primary__hero-body"
                        : "primary__hero-body dark"
                    } data-aos="fade-down"
                  >
                    {body3}
                  </p>
                  {headers && (
                    <h2
                      className={lightText ? "subHeading" : "subHeading dark"} data-aos="fade-down"
                    >
                      {headers[3]}
                    </h2>
                  )}
                  <p
                    className={
                      lightText
                        ? "primary__hero-body"
                        : "primary__hero-body dark"
                    } data-aos="fade-down"
                  >
                    {body4}
                  </p>
                  {headers && (
                    <h2
                      className={lightText ? "subHeading" : "subHeading dark"} data-aos="fade-down"
                    >
                      {headers[4]}
                    </h2>
                  )}
                  <p
                    className={
                      lightText
                        ? "primary__hero-body"
                        : "primary__hero-body dark"
                    } data-aos="fade-down"
                  >
                    {body5}
                  </p>
                  {signature && (
                    <div className="signatureRow">
                    <p className="primary__hero-body dark signature">
                      {signature}
                    </p>
                    <a href="https://www.linkedin.com/in/yasminmehdi/" target="_blank">
                    <img className="signatureImg" src="/images/signatureImg.png"></img>
                    </a>
                    </div>
                  )}
                </div>
              </div>
            )}
            {logo && (
              <div className="primary__hero-img-single">
                <img src={logo} alt={alt[0]} className="primary__hero-img" />
              </div>
            )}
          </div>
          {footer && (
            <div className="primaryFooterWrapper">
              <p className="primaryFooter">{footer}</p>
            </div>
          )}
          {buttonLink && (
            <div className="buttonWrapper">
              <Link to={buttonLink}>
                <Button buttonColour={buttonColour}>{buttonLabel}</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default PrimaryComponent;
