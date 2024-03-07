import React, { useContext, useEffect, useState } from 'react'
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';

const Listado = () => {
  const  proyectosContext = useContext(proyectoContext);
  const { proyectos, obtenerProyecto } = proyectosContext;
  
  useEffect(()=>{
    obtenerProyecto()
  },[])


   if(proyectos.length === 0) return null; 


    return ( 
       <ul className='listado-proyectos'>
         {proyectos.map(item => (
          <Proyecto key={item.id} proyecto={item} />
         ))}
         
       </ul> 
     
     );
}
 
export default Listado;