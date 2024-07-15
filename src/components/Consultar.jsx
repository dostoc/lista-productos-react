import PropTypes from 'prop-types';
import { useEffect, useState } from "react";

function Consultar({producto}) {


    const [consultar, setConsultar] = useState("Agregar");
    
    useEffect(() => {
      console.log("Envio de consluta "+ producto.nombre);
    },[consultar, producto]);


    function solicitudProducto(){
      if(consultar === "Agregar"){
        setConsultar("Eliminar");
        console.log("Agregado a la lista");
      } else {
        setConsultar("Agregar");
        console.log("Quitado de la lista");
      }
    }



  return (
    <button className="btn btn-link m-0 p-0" onClick={solicitudProducto}> {consultar} </button>
  )
}

Consultar.propTypes = {
  producto: PropTypes.shape({
      nombre: PropTypes.string.isRequired
  }).isRequired
};

export default Consultar