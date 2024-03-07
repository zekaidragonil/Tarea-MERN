import React, { useContext, useState } from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext';


const NuevoProyecto = () => {

const  proyectosContext = useContext(proyectoContext);
const { formulario, mostrarFormulario } = proyectosContext;


const [proyecto , setGuardar] = useState({
    nombre: ''
});


const { nombre } = proyecto;

const onChangeproyecto = (e) =>{
    setGuardar({
        ...proyecto,
         [e.target.name]: e.target.value
    })
} 

 const Onsubmit = () => {
   e.preventDefault();

   // Validar al state

   // agregar al state

   //Reiniciar el form
   

}


    return ( 
       <>
        <button onClick={()=> mostrarFormulario()}
         type='button'
         className='btn btn-block btn-primario'
        >Nuevo Proyecto
        </button>
        {
            formulario ? 
            (
            <form action=""
         onSubmit={Onsubmit}
        className='formulario-nuevo-proyecto'>
          <input type="text"
           className='input-text'
           placeholder='Nombre Proyecto'
           name='nombre'
           onChange={onChangeproyecto}
           value={nombre}
          />
           <input type="submit"
             className='btn btn-primario btn-block'
             value='Agregar Proyecto'
            />
        </form>
            ):null
        }
        
        </>
     );
}
 
export default NuevoProyecto;