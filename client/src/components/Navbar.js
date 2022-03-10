import Image from "next/image";
import logo from "../../public/assests/logo/Vector.svg";
import { logout } from "../state/actions";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="header__container">
      <div className="header__logo">
        <Image src={logo} className="header__logo-image" />
      </div>
      <div className="header__navbar">
        <nav>
          <ul className="header__navbar-nav">
            <li>Top Offer</li>
            <li>Search in offer</li>
            <li>Reference</li>
            <li>About Us</li>
            <li>Our Team</li>
          </ul>
        </nav>
        <button className="header__navbar-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
