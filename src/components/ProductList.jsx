import { data } from './data'


export const ProductList = () => {
  return (
    <div className="container" >
      <div className='row text-center'>
        {

          data.map(producto => (

            <div className='item card row col-4 border border-0' key={producto.id}  >

              <img className="card-img-top rounded mx-auto d-block"
                src={producto.imageUrl}
                alt={producto.imageAlt}>
              </img>

              <div className='card-body'>
                <h5 className='card-title'>{producto.nombre}</h5>
                <h5 className='card-title  '>{producto.marca}</h5>
                <p className='card-text'>{producto.detalle}</p>
                <p className='badge text-bg-info'>$ {producto.precio}</p>
              </div>

            </div>

          ))

        }

      </div>
    </div>
  )
}
