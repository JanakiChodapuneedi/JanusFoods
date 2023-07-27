import { useState } from "react";
import { LOGO_URL } from "./../utils/constants";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="header">
      <img className="logo" src={LOGO_URL} />
      <ul>
        <li> Home </li>
        <li> About US</li>
        <li> Contact US </li>
        <li> Cart </li>
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
