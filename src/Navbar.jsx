import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const logoTextStyle = {
    color: "#ff4600",
    fontFamily: "Secular One, sans-serif",
    fontSize: "18px",
    textDecoration:'none',
    marginLeft:'8'
  };

  return (
    <nav className="bg-[#fff]">
      <div className="">
        <div className="flex items-center justify-between py-0.3">
          <div className="flex items-center">
            <img src="noflay3.png" alt="" style={{width:'80px', height:'60px'}}/>
            <a href='#' style={logoTextStyle}>NoflayTravel</a>
          </div>
        </div>

        {/* Ligne centrée plus courte */}
        <hr className="border-t- border-gray-700 my-1 mx-5" />

        {/* Deuxième ligne du navbar */}
        <div id="mobile-menu">
          <div className="flex justify-center space-x-4">
            <Link to='/' style={{textDecoration:'none'}}>
            <a href="" className="text-black block rounded-md px-3 py-2" style={{fontFamily: "Secular One, sans-serif",textDecoration:'none'}}>Accueil</a>
            </Link>
            <Link to='/Destination' style={{textDecoration:'none'}}>
            <a href="" className="text-black block rounded-md px-3 py-2" style={{fontFamily: "Secular One, sans-serif",textDecoration:'none'}}>Destinations</a>
            </Link>
            <Link to='/Reserver' style={{textDecoration:'none'}}>
            <a href="" className="text-black block rounded-md px-3 py-2" style={{fontFamily: "Secular One, sans-serif",textDecoration:'none'}}>Reserver</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
