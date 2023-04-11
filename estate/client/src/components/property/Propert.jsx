import React from 'react'
import img from '../../default-image.jpg'
import {Link } from 'react-router-dom'
import VerifiedIcon from '@mui/icons-material/Verified';
import millify from 'millify'

import HotelIcon from '@mui/icons-material/Hotel';
import BathtubRoundedIcon from '@mui/icons-material/BathtubRounded';
import GridViewIcon from '@mui/icons-material/GridView';

const Property = ({property :{ coverPhoto, price,rentFrequency, rooms, title,baths, area, agency, isVerified, externalID} }) => {

  return (
    
    <Link to={`/property/${externalID}`} style={{textDecoration:"none"}} >
     <div className="property">
      <div className="propertyBox">
        <img src={coverPhoto ? coverPhoto.url : img} width={400} height={260} alt="" />
      </div>
      <div className="box2">
          <div>
            {isVerified && <VerifiedIcon />}
            <h1 style={{ color: "gray", fontSize: "32px" }}>AED {millify(price)} {rentFrequency && `${rentFrequency}`}</h1>
          </div>
          
          <img src={agency?.logo?.url} alt="" width={40} height={40} />
      </div>
      <div className="box5">
        <div className="utils">
          {rooms} <HotelIcon color='black'/> | {baths} <BathtubRoundedIcon color='black'/> | {millify(area)} sqft <GridViewIcon />
        </div>
        <h1 style={{fontSize:"18px",color:"gray"}}>{title.length >30 ? `${title.substring(0,30)}...`: title}</h1>
      </div>
     </div>
    </Link>
  )
}

export default Property