import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Login() {
    const[message,setMessage] = useState(null);
    
  return (
    <div className='login-signup-form animated fadeInDown'>
        <div className='form'>
            <form>
            <h1 className="tittle margem">Acesso ao Sistema com sua conta</h1>
            {
                message &&
                <div className='alert'>
                    <p>{message}</p>
                </div>    
            }

            <input type="text" placeholder='E-mail' className='p-20'/>
            <input type="password" placeholder='Senha' className='p-20'/>
            <button className='btn btn-block margem'>Login</button>
            <p className='p-20'>
                Não está registrado
            </p><Link to ="/register">Criar nova conta?</Link>
            </form>
        </div>
    </div>
  )
}

export default Login