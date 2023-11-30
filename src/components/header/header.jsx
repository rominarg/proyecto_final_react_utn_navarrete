import { useState } from "react";
import HeaderMenu from "./headerMenu.jsx";
import HeaderLogo from "./headerLogo.jsx";
import HeaderLocalizar from "./headerLocalizar.jsx";
import "./styles/header.css";

const menuList = [
  {
    name: "MENÚ",
    link: "menu",
    customcss: "",
  },
  {
    name: "CAFÉ",
    link: "cafe",
    customcss: "",
  },
  {
    name: "EXPERIENCIA STARBUCKS",
    link: "experienciaStarbucks",
    customcss: "",
  },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <div className="containerLogooo">

      <HeaderLogo />
      </div>
      <div className="header__container">
        <div className={`container__menu ${isOpen && "open"}`}>
        {menuList.map((aMenuLista, index) => {
          return (
            <HeaderMenu
              key={index}
              name={aMenuLista.name}
              link={aMenuLista.link}
              customcss={aMenuLista.customcss} />
          );
        })}
      </div>
      </div>
      <div className="headerLocalizar">
          <HeaderLocalizar />
      </div>

    <div className={`nav_toggle ${isOpen && "open"}`} onClick={()=> setIsOpen(!isOpen)}>
    <span></span>
    <span></span>
    <span></span>
    </div>
    </header>
  );
}

export default Header;
