import { useState } from "react";
import { LOGO_URL } from "./../utils/constants";
import { Link } from "react-router-dom";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="header">
      <Link to="/"><img className="logo" src={LOGO_URL} /></Link>
      <ul>
       <li> <Link to="/home"> Home</Link> </li>       
       <li><Link to="/about">About Us</Link></li>
       <li><Link to="/contact">Contact Us</Link></li>
       <li><Link to="/cart">Cart</Link></li>
        <button className="login-btn"
          onClick={() => {
            if (btnName === "Login") {
              setBtnName("Logout");
            } else {
              setBtnName("Login");
            }
          }}
        >
          {btnName}
        </button>
      </ul>
    </div>
  );
};

export default Header;
