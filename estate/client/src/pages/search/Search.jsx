import { useState, useEffect, useCallback, useContext } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import "./search.css";
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchFilter from "../../components/searchFilters/SearchFilter";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Property from "../../components/property/Propert";
import img_result from "../../noresult.jpeg";
import { baseUrl, fetchApi } from "../../fetch/searchFetch";
import { AuthContext } from "../../context/AuthContext";


const Search = () => {
  const {user} = useContext(AuthContext)
  const [searchFilters, setSearchFilters] = useState(false);
  const [props, setProps] = useState([])
  const [btnClick, setBtnClick] = useState(false)
  const [searchParams,setSearchParams] = useSearchParams()
  console.log(user)


  const method = async (query) => {
    console.log(query)
    const purpose = query.purpose || 'for-sale';
    const rentFrequency = query.rentFrequency || 'yearly';
    const minPrice = query.minPrice || '0';
    const maxPrice = query.maxPrice || '1000000';
    const roomsMin = query.roomsMin || '0';
    const bathsMin = query.bathsMin || '0';
    const sort = query.sort || 'price-desc';
    const areaMax = query.areaMax || '35000';
    const locationExternalIDs = query.locationExternalIDs || '5002';
    const categoryExternalID = query.categoryExternalID || '4';

    return fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`)
      .then(data => { setProps(data?.hits) })
  }



  useEffect(() => {

    const params = {};
    searchParams.forEach((value, key) => {
      params[key] = value
    })
    method(params)
  }, [])


  return (
    <>
      <Navbar />
      <div className="bx1">
        <div className="bx2">
          <button style={{ border: "none", cursor: "pointer" }} onClick={() => {
          
            setSearchFilters(!searchFilters)
            }}>
            <h3> Search property by filter <FilterListIcon /></h3> </button>
        </div>
        {searchFilters && <SearchFilter />}
        <h2>Properties {searchParams.get("purpose")}</h2>

        <div className="search_results">
          {props.map((property) => <Property property={property} key={property.id} />)}</div >

        <div className="no_results">
          {props.length === 0 && <h1>Loading . . .</h1>}
        </div>
      </div >
      < Footer />
    </>

  )

}

export default Search