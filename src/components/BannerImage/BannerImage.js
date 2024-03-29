import React from 'react'
import "./BannerImage.scss"

const BannerImage = (props) => {

  return (
    <div className= {`${props.banner}Banner`} alt={props.banner} id={props.banner}>
      <h1 className="BannerTitle">{props.title}</h1>
      <p className="BannerDescription">{props.desc}</p>
    </div>
  )
}



export default BannerImage
