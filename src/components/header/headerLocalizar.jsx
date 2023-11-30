
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const iconoLocalizar=<FontAwesomeIcon icon={faLocationDot} />


function HeaderLocalizar() {
  return (
    <div className="containerLocalizar">
      <NavLink to="/localizarTienda">
        <div className="contIcono">{iconoLocalizar}</div>
        Localizar Tienda
      </NavLink>
    </div>
  );
}

export default HeaderLocalizar;