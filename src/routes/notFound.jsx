import "./style/styles.css";
import error from './imagenes/error-404.jpg';

function NotFoundPage() {
  return (
    <div className="containerError">
    <div className="tituloError">
    <h1>Error 404 - Pagina no Encontrada</h1>
    </div>
    <div className="containerImageError">
    <img src={error} alt="" />
    </div>
    </div>
  )
}

export default NotFoundPage