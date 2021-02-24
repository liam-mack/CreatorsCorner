import React from 'react'
import StaffCard from "../StaffCard/StaffCard";

function StaffDirectory({staff}) {
    return (
        staff.map(e => (
            <StaffCard
            key={e.id}
            id={e.id}
            name={e.name}
            image={e.image}
            position={e.position}
            link={e.link} 
            linkedIn={e.linkedIn}/>           
        ))
    )
}

export default StaffDirectory
