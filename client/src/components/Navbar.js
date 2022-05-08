import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import logo from '../../public/assests/logo/Vector.svg';
import { logout, user_auth_status } from '../state/actions';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {
  const route = useRouter();
  const [openMenu, setOpenMenu] = useState(false);

  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  useEffect(() => {
    dispatch(user_auth_status());
  }, [dispatch]);

  return (
    <main className='header'>
      <div className='header__logo'>
        <Image src={logo} objectFit='contain' />
      </div>
      <div
        className={`header__hamburger header__hamburger-${openMenu}`}
        onClick={() => setOpenMenu(!openMenu)}
      >
        <span className='line'></span>
        <span className='line'></span>
        <span className='line'></span>
      </div>
      <nav className={`header__nav header__nav-${openMenu}`}>
        <div className='header__nav-sidebar'>
          <h4>Company Name</h4>
          <ul className='header__nav-links'>
            <li>Top Offer</li>
            <li>Search in offer</li>
            <li>Reference</li>
            <li>About Us</li>
            <li>Our Team</li>
          </ul>
          {isAuthenticated && user ? (
            <div className='header__nav-btns'>
              <button className='btn-blue-bg' onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <div className='header__nav-btns'>
              <button
                className='btn-trans-bg'
                onClick={() => route.push('/login')}
              >
                Login
              </button>
              <button
                className='btn-blue-bg'
                onClick={() => route.push('/signup')}
              >
                SignUp
              </button>
            </div>
          )}
        </div>
      </nav>
    </main>
  );
};

export default Navbar;
