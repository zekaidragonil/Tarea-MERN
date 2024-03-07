import React from 'react'
import Tarea from './Tarea';


const ListadoTareas = () => {
    const tareas = [
        {nombre: ' Tienda Virtual', estado:true},
        {nombre: ' Tienda PS5', estado: false}
    ]


    return ( 
        <>
        <h2>Proyecto: </h2>

        <ul className='listado-tareas'>
           {tareas.length === 0
             ?(<li className='tarea'><p>No hay tareas</p></li>)
           :(
            tareas.map(item => (
                <Tarea tarea={item}  />
            ))
           )
           }
        <button style={{backgroundColor: 'white'}}
                type='button'
               className='btn btn-secundario'
            >Eliminar Proyecto &times;</button>
        </ul>
        </>
     );
}
 
export default ListadoTareas;