import React from "react";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import "./GridComponent.scss";

function GridComponent({
  rows,
  lightText,
  bgColour,
  topLine,
  title,
  img,
  alt,
  body,
  buttonLabel,
  buttonColour,
  buttonLink,
  buttonLinks,
  sectionId,
  externalLink
}) {
  return (
    <div
      className={bgColour ? `gridComponent ${bgColour}` : "gridComponent"}
      id={sectionId}
    >
      <div className="gridContainer">
        {topLine && (
          <h1 className={lightText ? "top-line" : "top-line dark"}>
            {topLine}
          </h1>
        )}
        {rows.map(function (firstRow, idx) {
          return (
            <div className="gridRow">
              <div
                className="gridColumn"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                {img && (
                  <img
                    className="gridImg"
                    src={img[firstRow]}
                    alt={alt[firstRow]}
                  />
                )}
                <div className={lightText ? "columnText" : "columnText dark"}>
                  <div className="columnTitle">{title[firstRow]}</div>
                  <div className="columnBody">{body[firstRow]}</div>
                  {buttonLinks && (
                    <div className="buttonWrapper">
                     {externalLink ? (
                        <a className={buttonColour} href={buttonLinks[firstRow]} target="_blank">
                          {buttonLabel}
                        </a>
                      ) : (
                        <Link to={buttonLinks[firstRow + 1]}>
                          <Button buttonColour={buttonColour}>
                            {buttonLabel}
                          </Button>
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              </div>
              <div
                className="gridColumn"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                {img && (
                  <img
                    className="gridImg"
                    src={img[firstRow + 1]}
                    alt={alt[firstRow + 1]}
                  />
                )}
                <div className={lightText ? "columnText" : "columnText dark"}>
                  <div className="columnTitle">{title[firstRow + 1]}</div>
                  <div className="columnBody">{body[firstRow + 1]}</div>
                  {buttonLinks && (
                    <div className="buttonWrapper">
                      {externalLink ? (
                        <a className={buttonColour} href={buttonLinks[firstRow + 1]} target="_blank">
                          {buttonLabel}
                        </a>
                      ) : (
                        <Link to={buttonLinks[firstRow + 1]}>
                          <Button buttonColour={buttonColour}>
                            {buttonLabel}
                          </Button>
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
        {buttonLink && (
          <div className="buttonWrapper">
            <Link to={buttonLink}>
              <Button buttonColour={buttonColour}>{buttonLabel}</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default GridComponent;
