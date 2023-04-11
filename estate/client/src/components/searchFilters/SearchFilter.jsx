import React, { useEffect, useState } from 'react'
import { useSearchParams, createSearchParams } from 'react-router-dom'
import "./searchFilter.css"
import { filterData as filters, getFilterValues } from '../../filter'
import { Link, useNavigate } from 'react-router-dom'
import { baseUrl, fetchApi } from '../../fetch/searchFetch'
const SearchFilter = () => {

  // const [filters, setFilters] = useState(filterData);
  const [searchParams, setSearchParams] = useSearchParams()
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('');
  const [locationData, setLocationData] = useState();
  const [showLocations, setShowLocations] = useState(false);
  const navigate = useNavigate()
  const searchProperties = (filterValues) => {

    let url = new URL(window.location.href)
    let params = new URLSearchParams(url.searchParams)

    const values = getFilterValues(filterValues)

    values.forEach((item) => {

      if (item.value) {
        params.delete(item.name)
        params.append(item.name, item.value)
        setSearchParams([...params])
      }
    })
  }
  useEffect(() => {
    if (searchTerm !== "") {
      const fetchData = async () => {
        setLoading(true)
        const data = await fetchApi(`${baseUrl}/auto-complete?query=${searchTerm}`)
        setLoading(false)
        setLocationData(data?.hits)
      }

      fetchData();
    }

  }, [searchTerm])



  return (
    <div className="container1">


      <div className='input_keys'>
        {filters.map((filter) => (
          <div key={filter.queryName} >
            <select
              list={filter.queryName}
              on onChange={(e) => searchProperties({ [filter.queryName]: e.target.value })}>
              {(<option value="" disabled selected hidden>{filter.placeholder}</option>)}
              {filter?.items?.map(item => (<option key={item.value} value={item.value}>{item.name}</option>))}
            </select>
          </div>
        ))}</div>

      <button className='locaton_button' onClick={() => setShowLocations(!showLocations)}>Search Location </button>
      {showLocations && (
        <>
          <input
            className='location_input'
            type='text'
            placeholder='Type Here'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm !== "" && (
            <button style={{ width: "180px", height: "40px", padding: "10px", cursor: "pointer", marginTop: "10px" }} onClick={() => setSearchTerm("")} type="">click me</button>
          )}
          {loading && ""}
          {showLocations && (
            <div className='location_name'>
              {locationData?.map((location) => (
                <div onClick={() => {
                  searchProperties({ locationExternalIDs: location.externalID });
                  setShowLocations(false)
                  setSearchTerm(location.name)
                }}>
                  <h1 style={{ cursor: "pointer", color: "grey", borderBottom: "1px", borderColor: "grey" }}>{location.name}</h1>
                </div>
              ))}
              {!loading && !locationData?.length && (
                <h1>No search</h1>
              )}
            </div>)}

        </>)}


      <button onClick={() => window.location.reload()} style={{ width: "180px", height: "40px", padding: "10px", cursor: "pointer", marginTop: "10px" }}  >submit</button>



    </div>
  )
}

export default SearchFilter