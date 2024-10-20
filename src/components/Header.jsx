import React from "react";
import { Link } from "react-router-dom";

const Header = ({cart}) => {
  return (
    <>
      <div className="main">
        <nav className="container">
          <div className="logo">
            <h3>Book Cart</h3>
          </div>
          <div className="cart-links">
            <ul>
              <li>
                <Link to={"/"} className="link">
                
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/view-cart"} className="link ">
                  
                  View Cart
                </Link>
               
              </li>
             <li> <span className="badge bg-warning text-dark">{cart.length}</span>  </li> 
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
