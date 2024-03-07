import React, { useContext } from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext'
import TareaContext from '../../context/tareas/TareaContext';
const Proyecto = ({ proyecto}) => {
  const proyectosContext = useContext(proyectoContext);
  const tareasContext = useContext(TareaContext);
  const { proyectoActual } = proyectosContext;
  const { ObtnerTarea } = tareasContext;


 const selecionarProyecto = id =>{
  proyectoActual(id);
  ObtnerTarea(id);
 }


    return ( 
      <>
        <li>
            <button type='buttton' 
            className='btn btn-blank'
            onClick={()=>selecionarProyecto(proyecto.id)}
            >
                 {proyecto.nombre}
            </button>
        </li>   
   
      </>
     );
}
 
export default Proyecto;