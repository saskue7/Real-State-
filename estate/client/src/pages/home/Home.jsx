import "./home.css"
import {  useState,useEffect } from 'react'
import axios from "axios"
import Banner from '../../components/banner/Banner.jsx'
import { options1,options2} from "../../fetch/fetch.js"
import Property from "../../components/property/Propert"
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"



const Home = () => {
  const [r,setR] = useState([])
  const [s,setS] = useState([])
  useEffect(() => {
    axios.request(options1).then(function (response) {
      setR(response.data?.hits)
    }).catch(function (error) {
      console.error(error);
    });
    axios.request(options2).then(function (response) {
      setS(response.data?.hits)
    }).catch(function (error) {
      console.error(error);
    });
    },[])
  // console.log(propertyForSale, propertyForRent)
  return (
    <div>

      <Navbar />
      <Banner
        purpose="Rent a house"
        title1="Rental Homes for"
        title2="Everyone"
        desc1="Explore Apartments, Villas,Homes"
        desc2="and more"
        buttonText="Explore Renting"
        LinkName="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/352941065/db97278bed6e4ebcbb3f28be3dbe5cd9"

      />
      <div className="pr">
        {r.map((property) => <Property property={property} key = {property.id}/> )}
      </div>
      <Banner
        purpose="buy a house"
        title1="Find, buy  Homes for"
        title2="Dream Home"
        desc1="Explore Apartments, Villas,Homes"
        desc2="and more"
        buttonText="Explore buying"
        LinkName="/search?purpose=for-sale"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/260965099/e18d616b224c436281fe2e3f7d49f6db"

      />
      <div className="ps">
        {s.map((property) => <Property property={property} key={property.id} />)}
      </div>
      <Footer />
    </div>
  )
}

export default Home