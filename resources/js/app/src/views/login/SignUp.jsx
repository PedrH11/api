import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function SignUp() {
    const[message,setMessage] = useState(null);
    
  return (
    <div className='login-signup-form animated fadeInDown'>
        <div className='form'>
            <form>
            <h1 className="tittle">Registre sua conta</h1>
            
            <input type="text" placeholder='Nome'/>
            <input type="text" placeholder='Email'/>
            <input type="password" placeholder='Senha'/>
            <input type="password" placeholder='Confirmado Senha'/>
            <button className='btn btn-block'>Salvar</button>
            <p className='message'>
                Está registrado?
            </p><Link to ="/login">Login</Link>
            </form>
        </div>
    </div>
  )
}

export default SignUp