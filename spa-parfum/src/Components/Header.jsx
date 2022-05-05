import React from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css';

import cart from '../images/cart.png';

const Header = () => (
  <div className="container">
    <header className="header">
      <div className="header_nav">
        <Link to="/" className="header_nav_logo">
          Логотип
        </Link>
        <div className="header_nav_description">
          <div>
            <Link to="/showcase" className="description_btn color1">
              <button type="button" className="description_btn color1">
                Витрина
              </button>
            </Link>
            <Link to="/client" className="description_btn color2">
              <button type="button" className="description_btn color2">
                Как стать клиентом
              </button>
            </Link>
          </div>
          <div>
            <Link to="/women" className="description_btn color3">
              <button type="button" className="description_btn color3">
                Для женщин
              </button>
            </Link>
            <Link to="/men" className="description_btn color4">
              <button type="button" className="description_btn color4">
                Для мужчин
              </button>
            </Link>
            <Link to="/child" className="description_btn color5">
              <button type="button" className="description_btn color5">
                Для детей
              </button>
            </Link>
          </div>
        </div>
        <Link to="/cart" className="cart">
          <img src={cart} alt="Cart" /> {/* <Link to='/cart'><img src={cart} alt="Cart" /></Link> */}
        </Link>
      </div>
    </header>
  </div>
);

export default Header;
