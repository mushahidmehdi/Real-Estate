import Image from "next/image";
import logo from "../../public/assests/logo/Vector.svg";

const Header = () => {
  return (
    <header className="header__container">
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
        <button className="header__navbar-btn">Contact us</button>
      </div>
    </header>
  );
};

export default Header;
