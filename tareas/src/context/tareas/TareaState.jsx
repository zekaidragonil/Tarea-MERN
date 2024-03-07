

import TareaReducer from './TareaReducer'
import TareaContext from './TareaContext'
import { useReducer } from 'react'
import { TAREA_PROYECTO } from '../../types';


const TareaState = props => {
   const initialState = {
      tarea: [
        {nombre: ' Tienda Virtual', estado:true , proyectoId: 1},
        {nombre: ' Tienda PS5', estado: false, proyectoId: 2}
      ]
   }

   // Dispatch para ejcutar la accion
  const [state, dispatch] = useReducer(TareaReducer, initialState)

   // series de funcion del CRUD

   const ObtnerTarea = proyectoId =>{
    dispatch({
        type:TAREA_PROYECTO,
        pyload: proyectoId

    })
   } 

  return(
    <TareaContext.Provider 
     value={{
        tarea: state.tarea,
        ObtnerTarea
     }}
    >
        {props.children}
    </TareaContext.Provider>
  )
}

export default TareaState