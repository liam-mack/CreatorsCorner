import React from 'react';
import "./PortfolioDivider.scss"

function PortfolioDivider({
    text,
    bgColour
}) {
    return (
        <div className="portfolioDivider" data-aos="fade-left" data-aos-duration="1000" style={{backgroundColor: bgColour}}>
            <div className="container">
                <p className="dividerText">{text}</p>    
            </div>            
        </div>
    )
}

export default PortfolioDivider
