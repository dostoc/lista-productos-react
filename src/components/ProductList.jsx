import { data } from "../recursos/datos/data";
import Consultar from "./Consultar";


export const ProductList = () => {

  return (
    <div className="container"  >
      <h2>Listado de productos</h2>
      <div className='row align-items-start'>
        {

          data.map(producto => (

            <div className='card border border-0 col-sm-4' key={producto.id}  >

              <img className="card-img-top rounded mx-auto d-block"
                src={producto.imageUrl}
                alt={producto.imageAlt}>
              </img>

              <div className='card-body'>
              <div>
              <h4 className='card-title'>{producto.nombre}</h4>
              <h5 className='card-subtitle mb-2 text-body-secondary'>{producto.marca}</h5>

              </div>
                
                <p className='card-text'>{producto.detalle}</p>
                <p className='card-subtitle mb-2 text-body-secondary'>$ {producto.precio}</p>
                <Consultar producto={producto}/>
              </div>

            </div>

          ))

        }

      </div>
    </div>
  )
}
