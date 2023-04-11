import React, { useContext, useRef } from 'react'
import { Navigate } from 'react-router-dom';
import "./navbar.css"
import ReorderIcon from '@mui/icons-material/Reorder';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
const Navbar = () => {
  const {user} = useContext(AuthContext)
  const cha = useRef()

  const showmenu = () => {
    cha.current.classList.toggle("hidden")

  }
  return (
    <div className='navbar'>
      <div className="menuList">
        <h1 className='navbar_heading' style={{ color: "rgb(128, 128, 223)" }}>Dream Home</h1>
        <div className='list'>
          <Link to="/saves"><button>Saves</button></Link>
          <button className='list_icon' onClick={showmenu}><ReorderIcon /></button>
          <ul className="main_links hidden" ref={cha}>
            <Link  to="/" style={{ textDecoration: "none" }}><li>Home</li></Link>
            <Link  style={{ textDecoration: "none" }} to="/search"><li>Search</li></Link>
            <Link reloadDocument to="/search?purpose=for-sale" style={{ textDecoration: "none" }}><li>Buy</li></Link>
            <Link reloadDocument to="/search?purpose=for-rent" style={{ textDecoration: "none" }}><li>Rent</li></Link>
          </ul>
        </div>
      </div>
      <hr />
    </div>



  )
}

export default Navbar