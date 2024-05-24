import React from 'react'
import "./navbar.scss"
import { Link } from 'react-router-dom'
import { SlBasket } from "react-icons/sl";
import { FaHeart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className='mainNavbar'>
      <div className='Navbarcontainer'>
        <div className='navbarLogo'>DEALERS</div>
        
        <ul className='navlist'>
          <li><Link className='navlinks' to={"basket"}>Basket</Link></li>
          <li><Link className='navlinks' to={"favorite"}>Favorite</Link></li>
          <li>Contact</li>
          <li>About</li>

        </ul>
        <div className='rightsidenav'>
        <Link className='navlinks' to={"favorite"}><FaHeart className='logolinks' /></Link>
        <Link className='navlinks' to={"basket"}><SlBasket  className='logolinks' /></Link>
        <Link className='navlinks' to={"basket"}><CiSearch  className='logolinks' /></Link>
        
      
        </div>

      </div>
      
    </div>
  )
}

export default Navbar