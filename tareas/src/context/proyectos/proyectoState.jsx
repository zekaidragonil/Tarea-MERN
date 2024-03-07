import React, { useReducer } from 'react'

import proyectoContext from './proyectoContext';
import proyectoreducer from './proyectoreducer';
import { 
  FORMULARIO_PROYECTO, 
  OBTENER_PROYECTO,
  AGREGAR_PROYECTO,
  VALIDAR_FORMULARIO,
  ELIMINAR_PROYECTO
} from '../../types';

const ProyectoState = props => {
  const proyectos = [
    {id: 1 , nombre: ' Tienda Virtual'},
    {id: 2 , nombre: ' Tienda PS5'}
  ]
  


   const initialState = {
     proyectos : [], 
     formulario : false
   }

   // Dispatch para ejcutar la accion
  const [state, dispatch] = useReducer(proyectoreducer, initialState)

   // series de funcion del CRUD
   const mostrarFormulario = () =>{
    dispatch({
        type:FORMULARIO_PROYECTO
    })
   }

const  obtenerProyecto = () =>{
    dispatch({
      type:OBTENER_PROYECTO,
      payload: proyectos
    })
}

  return(
    <proyectoContext.Provider 
     value={{
        proyectos: state.proyectos,
        formulario : state.formulario,
        mostrarFormulario,
        obtenerProyecto,
    
     }}
    >
        {props.children}
    </proyectoContext.Provider>
  )
}

export default ProyectoState