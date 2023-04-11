import React from 'react'
import "./banner.css"
import { NavLink } from "react-router-dom"
import { useSearchParams } from 'react-router-dom'

const Banner = ({ purpose, title1, title2, desc1, desc2, buttonText, LinkName, imageUrl }) => {
 return (
  <div className="banner">
   <img src={imageUrl} width={500} height={300} alt="banner" />
   <div className="box">  
    <h1 className='h1_purpose'>{purpose}</h1>
    <h1 className='h1_title'>{title2}</h1>
    <h1 className='h1_desc'>{desc1} <br /> {desc2}</h1>
    
    <NavLink to={LinkName} ><button className='banner_btn'>{buttonText}</button></NavLink>
   </div>

  </div>
 )
}

export default Banner