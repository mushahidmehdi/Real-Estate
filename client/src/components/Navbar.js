import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import logo from '../../public/assests/logo/Vector.svg';
import { logout, user_auth_status } from '../state/actions';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {
  const route = useRouter();
  const [openMenu, setOpenMenu] = useState(true);

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
      <div className='header__nav'>
        {/* <div className='header__nav-hamburger'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div> */}
        {openMenu ? (
          <div>
            <h1>Company Name</h1>
            <ul className='header__nav-links'>
              <li>Top Offer</li>
              <li>Search in offer</li>
              <li>Reference</li>
              <li>About Us</li>
              <li>Our Team</li>
            </ul>
            {isAuthenticated && user ? (
              <div>
                <button className='header__nav-btn' onClick={handleLogout}>
                  Logout
                </button>
              </div>
            ) : (
              <div className='header__nav-btns'>
                <button onClick={() => route.push('/login')}>Login</button>
                <button onClick={() => route.push('/signup')}>SignUp</button>
              </div>
            )}
          </div>
        ) : (
          ''
        )}

        {/* <nav>
          <NavLinks />
        </nav> */}
      </div>
    </main>
  );
};

export default Navbar;
