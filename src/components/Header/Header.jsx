import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/images/favicon.ico';

const mainNav = [
  {
    display: 'Home',
    path: '/',
  },
  {
    display: 'Products',
    path: '/Product',
  },
  {
    display: 'More',
    path: '/More',
  },
  {
    display: 'Contact',
    path: '/Contact',
  },
];

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        {/* Logo  */}
        <div className="header__logo">
          <NavLink to="/">
            <img src={logo} alt="Here is Logo" />
          </NavLink>
        </div>
        {/* Header Menu  */}
        <div className="header__menu">
          <div className="header__menu__mobile-toggle">
            <ion-icon name="menu-outline"></ion-icon>
          </div>
          <div className="header__menu__left">
            <div className="header__menu__left__close">
              <ion-icon name="chevron-back-outline"></ion-icon>
            </div>
            {mainNav.map((item, index) => {
              return (
                <div key={index} className="header__menu__items header__menu__left_items">
                  <NavLink to={item.path}>
                    <span>{item.display}</span>
                  </NavLink>
                </div>
              );
            })}
          </div>

          <div className="header__menu__right">
            <div className="header__menu__items header__menu__right__items">
              <ion-icon name="search-outline"></ion-icon>
            </div>
            <div className="header__menu__items header__menu__right__items">
              <NavLink to="/cart">
                <ion-icon name="cart-outline"></ion-icon>
              </NavLink>
            </div>
            <div className="header__menu__items header__menu__right__items">
              <ion-icon name="person-circle-outline"></ion-icon>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
