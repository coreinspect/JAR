import React from 'react';
import { images } from '../constants';
import './components.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const navRef = React.useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  return (
    <section>
      <header className="header">
        <div className="logo">
          <img src={images.Logo} alt="Logo" />
        </div>

        <div className="groupSearch">
          <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
            <g>
              <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
          </svg>
          <input placeholder="Search" type="search" className="input" />
        </div>
        <div className="buttons">
          <ul>
            <li>
              <a href="/" className="signUP">
                Sign Up
              </a>
            </li>
            <li>
              <a href="/" className="login">
                Login
              </a>
            </li>
          </ul>
          <nav ref={navRef}>
            <a href="/#">Home</a>
            <a href="/#">My work</a>
            <a href="/#">Blog</a>
            <a href="/#">About me</a>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <FaTimes />
            </button>
          </nav>
          <button className="nav-btn" onClick={showNavbar}>
            <FaBars />
          </button>
        </div>
      </header>
    </section>
  );
};

export default Header;
