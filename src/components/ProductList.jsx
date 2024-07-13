import { data } from './data'


export const ProductList = () => {
  return (
    <div className="container" >
      <div className='row text-center'>
        {

          data.map(producto => (

            <div className='item card row col-4' key={producto.id}  >

              <img className="card-img-top"
                src={producto.urlImage}
                alt={producto.urlImageAlt}>
              </img>

              <div className='card-body'>
                <h5 className='card-title'>{producto.nombre}</h5>
                <p className='card-text'>{producto.detalle}</p>
                <p className='card-precio'>$ {producto.precio}</p>
              </div>

            </div>

          ))

        }

      </div>
    </div>
  )
}
