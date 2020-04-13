import React from "react";
import "../assets/styles/components/Header.scss";
import logo from "../assets/static/logo_color.png";
import profile from "../assets/static/profile.png";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="alternet" className="header__img" />
      <div className="header__menu">
        <div className="header__menu--profile">
          <img src={profile} alt="" />
          <p>Perfil</p>
        </div>
        <ul>
          <li>
            <a href="#">Cuenta</a>
          </li>
          <li>
            <a href="index.html">Cerrar Sesión</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
