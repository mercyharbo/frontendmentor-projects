import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    const navbarToggleShow = () => {
        const navs = document.querySelectorAll('.Nav_items')
  
        navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
    }

    return (
      <div className="Navbar">
        <div className="Navbar_link_brand">
            <img src="logo.svg" alt="" />
        </div>

        <div className="Navbar_toggle">
            <img src="icon-hamburger.svg" alt="" onClick={navbarToggleShow} />
        </div>
            
        <ul className="Nav_items" >
          <Link to="/"> <span> 00 </span>  Home </Link>
          <Link to="/destination"> <span> 01 </span>  Destination </Link>
          <Link to="/crew"> <span> 02 </span>  Crew </Link>
          <Link to="/technology"> <span> 03 </span>  Technology </Link>
        </ul>

      </div>
     );
}

export default Nav;
