import React, { useRef, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/images/favicon.ico';

const mainNav = [
  {
    display: 'Home',
    path: '/',
  },
  {
    display: 'Digimon',
    path: '/digimon',
  },
  {
    display: 'More',
    path: '/more',
  },
  {
    display: 'Contact',
    path: '/contact',
  },
];

const Header = () => {
  const { pathname } = useLocation();
  const activeNav = mainNav.findIndex((e) => e.path === pathname);

  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('shrink');
      } else {
        headerRef.current.classList.remove('shrink');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuLeft = useRef(null);

  const menuToggle = () => {
    menuLeft.current.classList.toggle('active');
    setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle state variable
  };

  return (
    <header className="header">
      <div className="container">
        {/* Logo  */}
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt="Here is Logo" />
          </Link>
        </div>
        {/* Header Menu  */}
        <div className="header__menu">
          <div className="header__menu__mobile-toggle" onClick={menuToggle}>
            <ion-icon name="menu-outline"></ion-icon>
          </div>
          <div className="header__menu__left" ref={menuLeft}>
            <div className="header__menu__left__close" onClick={menuToggle}>
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            {mainNav.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`header__menu__item header__menu__left__item ${
                    index === activeNav ? 'active' : ''
                  }`}
                  onClick={menuToggle}
                >
                  <Link to={item.path}>
                    <span>{item.display}</span>
                  </Link>
                </div>
              );
            })}
          </div>

          {!isMobileMenuOpen && (
            <div className="header__menu__right">
              <div className="header__menu__item header__menu__right__item">
                <ion-icon name="search-outline"></ion-icon>
              </div>
              <div className="header__menu__item header__menu__right__item">
                <Link to="/cart">
                  <ion-icon name="cart-outline"></ion-icon>
                </Link>
              </div>
              <div className="header__menu__item header__menu__right__item">
                <ion-icon name="person-circle-outline"></ion-icon>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
