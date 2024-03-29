import React from 'react'

const Tarea = ({tarea}) => {
    return ( 
        <>
        <li className='tarea sombra'>
        <p>{tarea.nombre}</p>
      
        <div className="estado">
          {tarea.estado
          ? (
            <button type='button'
             className='completo'

            > completo
            </button>
          ) : (
            <button type='button'
            className='incompleto'

           > incompleto
           </button>
          ) }
        
        </div>

          <div className="acciones">
            <button type='button'
             className='btn btn-primario'
            >Editar</button>
            <button
                type='button'
               className='btn btn-secundario '
            >Eliminar &times;</button>
          </div>
        </li>
        
        </>
     );
}
 
export default Tarea;