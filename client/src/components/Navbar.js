import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import logo from "../../public/assests/logo/Vector.svg";
import { logout, user_auth_status } from "../state/actions";
import { useDispatch, useSelector } from "react-redux";
import { AlignRight } from "react-feather";

const Navbar = () => {
  const route = useRouter();
  const [closeMenu, setCloseMenu] = useState(true);

  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const profileName = user?.user;

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  useEffect(() => {
    dispatch(user_auth_status());
  }, [dispatch]);

  const NavLinks = () => (
    <ul className="header__links">
      <li>Top Offer</li>
      <li>Search in offer</li>
      <li>Reference</li>
      <li>About Us</li>
      <li>Our Team</li>
    </ul>
  );

  return (
    <nav className="header">
      <div className="header__logo">
        <Image src={logo} objectFit="contain" />
      </div>
      <div className="header__navbar">
        {closeMenu ? (
          <AlignRight size={32.2} onClick={() => setCloseMenu(!closeMenu)} />
        ) : (
          <div className="header__sidebar">
            <h1>Company Name</h1>
            <NavLinks />
            {isAuthenticated && user ? (
              <div>
                <button className="header__navbar-btn" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            ) : (
              <div className="header__sidebar-btns">
                <button
                  className="header__sidebar-btns-log"
                  onClick={() => route.push("/login")}
                >
                  Login
                </button>
                <button
                  className="header__sidebar-btns-sign"
                  onClick={() => route.push("/signup")}
                >
                  SignUp
                </button>
              </div>
            )}
          </div>
        )}

        {/* <nav>
          <NavLinks />
        </nav> */}
      </div>
    </nav>
  );
};

export default Navbar;
