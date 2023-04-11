import React, { useContext, useEffect, useState } from 'react'
import { baseUrl,fetchApi } from '../../fetch/searchFetch'
import axios from 'axios'
import { AuthContext } from '../../context/AuthContext'
import Property from '../../components/property/Propert'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

const Data = () => {
  const user = JSON.parse(localStorage.getItem("user"))
  const [props,setProps] = useState([])
  console.log(user)
  console.log(props)

  useEffect(() => {
 
   const fetchSaves = async() => {
    const data = user.saves
    console.log(data)
    let ans = []
    for (var i = 0;i<data?.length;i++){
      let saves = await fetchApi(`${baseUrl}/properties/detail?externalID=${data[i]}`)
      console.log(saves)
      if (saves) ans.push(saves) 
    }
    setProps(ans)
    
   }
   console.log(props)
   fetchSaves()
  },[])
  console.log(props)

  return (
    
    <>
    <Navbar />
      <div style={{ display: "flex", padding: "10px", width:"100%", justifyContent: "center", flexWrap:"wrap" }}> 
        {props.map(prop => (<Property property={prop} />))}
    </div>
    <Footer />
    </>
  )
}

export default Data