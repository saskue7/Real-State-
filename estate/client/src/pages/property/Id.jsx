import React, { useState, useEffect, useContext } from 'react'
import "./id.css"
import { baseUrl, fetchApi } from '../../fetch/searchFetch'
import { useSearchParams, useParams } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import VerifiedIcon from '@mui/icons-material/Verified';
import ImageScroller from '../../components/imageSrcoller/ImageScroller'
import HotelIcon from '@mui/icons-material/Hotel';
import BathtubRoundedIcon from '@mui/icons-material/BathtubRounded';
import GridViewIcon from '@mui/icons-material/GridView';
import millify from 'millify'
import axios from 'axios'
import { AuthContext } from '../../context/AuthContext'
export const PropertyDetails = () => {

  const {user} = useContext(AuthContext)

  const [searchParams, setSearchParams] = useSearchParams()
  const [props, setProps] = useState({})
  const { id } = useParams()
  console.log(id)
  useEffect(() => {
    const fetchprop = async () => {
      const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`)
      setProps(data)
    }
    fetchprop()

  }, [])
  console.log(user)
  const saveProp = async() => {
    await axios.post("/data",{id:user._id,externalID:id})
  }
  const { price, rentFrequency, rooms, title, baths, area, agency, isVerified, description, type, purpose, furnishingStatus, amenities, photos } = props

  console.log(props)
  return (
    <>
      <Navbar />
      <div className="main" style={{ maxWidth: "1000px", margin: "auto", padding: "4px" }}>
        
        {photos && <ImageScroller data={photos} />}
        <div style={{ width: "100%", padding: "6px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <div style={{ paddingTop: "2px", display: "flex", alignItems: "center" }}>
            <div style={{ padding: "4px" }}>
              {isVerified && <VerifiedIcon />}
            </div>
            <h1 style={{ fontWeight: "bold", fontSize: "18px" }}>
              AED {price} {rentFrequency && `/${rentFrequency}`}
            </h1>
          </div>
          <div style={{ display: "flex", padding: "1px", justifyContent: "space-between", width: "250px", color: "blue" }}>{rooms} <HotelIcon /> |  {baths} <BathtubRoundedIcon /> |  {millify(area)} sqft <GridViewIcon /></div>
          <h1  style={{fontSize:"38px",marginBottom:"2px",fontWeight:"bold",color:"black"}} >{title}</h1>
          <button style={{height:"40px",width:"110px",fontWeight:"bold",fontSize:"16px",borderRadius:"5px",border:"none",backgroundColor:"black",color:"white",cursor:"pointer"}} onClick={() => saveProp()} >Save</button>
          <h1 style={{lineHeight:"2",color:"grey",fontSize:"18px"}}>{description}</h1>
          
        </div>
        <div style={{display:"flex",flexWrap:"wrap",textTransform:"uppercase",justifyContent:"space-between"}}>
          <div style={{ display:"flex", justifyContent:"space-between",width:"400px",borderBottom:"1px",borderColor:"gray",padding:"3px"}}>
            <h1 style={{ color: "grey" }}>Type</h1>
            <h1 style={{fontWeight:"bold"}}>{type}</h1>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", width: "400px", borderBottom: "1px", borderColor: "gray", padding: "3px" }}>
            <h1 style={{ color: "grey" }}>Purpose</h1>
            <h1 style={{ fontWeight: "bold" }}>{purpose}</h1>
          </div>
          {furnishingStatus && (
            <div style={{ display: "flex", justifyContent: "space-between", width: "400px", borderBottom: "1px", borderColor: "gray", padding: "3px" }}>
              <h1 style={{color:"grey"}}>Furnishing Status</h1>
              <h1 style={{fontWeight:"bold"}}>{furnishingStatus}</h1>
            </div>
          )}
          <div style={{ display:"flex"}}>
            <p>Facilities</p>
            <div style={{display:"flex",flexWrap:"wrap"}} >
              {amenities?.map((item) => (
                item?.amenities?.map((amenity) => (
                  <h1 style={{fontWeight:"bold",fontSize:"18px",color:"blue",padding:"2px",margin:"2px",borderRadius:"5px"}}>{amenity.text}</h1>
                ))
              ))}
            </div>
          </div>
        </div>
      </div></>

  )
}

