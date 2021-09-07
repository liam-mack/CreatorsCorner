import React from "react";
import "./CarouselSlide.scss";

function CarouselSlide({ title, body, img, imgAlt }) {
  return (
    <div className={img ? "slideCol" : "slideCol textless"}>
      <div className="slideText">
        <strong className="slideTitle">{title}</strong>
        <br></br>
        <p className="slideBody">{body}</p>
      </div>
      {img && (
        <div className="slideImg">
          <img src={img} alt={imgAlt}></img>
        </div>
      )}
    </div>
  );
}

export default CarouselSlide;
