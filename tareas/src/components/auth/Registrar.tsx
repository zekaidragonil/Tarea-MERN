

import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Registrar = () => {

    const [usuario, setUsuarios ] = useState({
        name: '',
        email: '',
        password: '',
        passwordConfirm: ''
      
    }) 
    
    const { email , password , name, passwordConfirm  } = usuario; 
    
     const Datoslogin = (e:any) => {
        
        setUsuarios({
            ...usuario,
            [e.target.name]: e.target.value,
        })
        }
    
    const  onsubmit = (e:any) =>{
        e.preventDefault();

    
    }
    
    return (
        <>
        <div className="form-usuario">
        <div className="contenedor-form sombra-dark">
            <h1>Iniciar Sesion</h1>
     
        <form action="" 
         onSubmit={onsubmit}
         >
            <div className="campo-form">
               <label htmlFor="name">Nombre</label>
               <input type="text"
                 id='name'
                 name='name'
                 placeholder='Tu Nombre'
                 onChange={Datoslogin}
                 value={name}
               />
            </div>

            <div className="campo-form">
               <label htmlFor="email">Email</label>
               <input type="email"
                 id='email'
                 name='email'
                 placeholder='Tu Email'
                 onChange={Datoslogin}
                 value={email}
               />
            </div>

            <div className="campo-form">
               <label htmlFor="Password">Password</label>
               <input type="password"
                 id='password'
                 name='password'
                 placeholder='Tu password'
                 value={password}
                 onChange={Datoslogin}
               />
            </div>
            <div className="campo-form">
               <label htmlFor="Password-confirm">Confirmar Password</label>
               <input type="password"
                 id='password-confirm'
                 name='password-confirm'
                 placeholder='Tu password confirm'
                 value={passwordConfirm}
                 onChange={Datoslogin}
               />
            </div>
            <div className='compo-form'>
                <input type="submit" value="Login"
                 className='btn btn-primario btn-block'/>
            </div>
        </form>
        <Link to={'/'}  className="enlace-cuenta" >Inicia sesion</Link>
        </div>
    </div>
   </>
 );
}
 
export default Registrar;