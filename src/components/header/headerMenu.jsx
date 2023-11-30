import "./styles/headerMenu.css";
import { NavLink } from "react-router-dom";

function HeaderMenu({ name, link, customcss }) {
  return (
    <nav>
      <ul>
        <li className={customcss}>
          <NavLink to={link}>{name}</NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default HeaderMenu;
