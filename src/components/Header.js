import {LOGO_URL} from "./../utils/constants";
const Header = () => {
    return (
      <div className="header">
        <img
          className="logo"
          src= {LOGO_URL}
        />
        <ul>
          <li> Home </li>
          <li> About US</li>
          <li> Contact US </li>
          <li> Cart </li>
        </ul>
      </div>
    );
  };

  export default Header;