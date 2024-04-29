// SE debe agregar siempre el prop-types ya sea con yarn o npm y luego de eso se puede importar en el componente
import PropTypes from "prop-types";


export const GifItem = ( { title, url, id } ) => {

  return (
    <div className="card">
      <img src={ url } alt={ title } />
      <p>{ title }</p>
    </div>
  )
}


GifItem.propTypes = { // Leer la 1era linea
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}