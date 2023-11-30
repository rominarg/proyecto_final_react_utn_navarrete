import "./tituloYTexto.css"


function TituloYTexto({titulo, texto,titulo2, texto2, titulo3, texto3,}) {
  return (
    <div className="containerTituloTexto">
        <h3 className="tituloCafe">{titulo}</h3>
        <p className="parrafoCafe">{texto}</p>
        <br />
        <h3 className="tituloCafe">{titulo2}</h3>
        <p className="parrafoCafe">{texto2}</p>
        <br />
        <h3 className="tituloCafe">{titulo3}</h3>
        <p className="parrafoCafe">{texto3}</p>
        
    </div>
  )
}

export default TituloYTexto