import React, { createRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axiosClient from '../../axiosClient';
import { useLogin } from '../../context/ContextProvider';


function Login() {

    const emailRef = createRef();
    const passwordRef = createRef();
    const navigate = useNavigate();
    const { _setToken, _setUser } = useLogin();
    const[message,setMessage] = useState(null);
    
    const onSubmit = (e) => {
        e.preventDefault();

        const login = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }

        axiosClient.post('/login',login)
                    .then(({data})=>{
                        console.log(data);
                        _setToken(data.token);
                        _setUser(data.user);
                        navigate('/dashboard'); 
                    })
                    .catch((erro)=>{
                        console.log(erro);
                    })

        setMessage('Login realizado com sucesso ' + login);
    }
  return (
    <div className='login-signup-form animated fadeInDown'>
        <div className='form'>
            <form onSubmit={onSubmit}>
            <h1 className="tittle margem">Acesso ao Sistema com sua conta</h1>
            {
                message &&
                <div className='alert'>
                    <p>{message}</p>
                </div>    
            }

            <input type="text" 
                placeholder='E-mail' 
                className='p-20'
                ref = {emailRef}
                />
            <input type="password" 
                placeholder='Senha' 
                className='p-20'
                ref = {passwordRef}/>
            <button type="Submit"
            className='btn btn-block margem'>Login</button>
            <p className='p-20'>
                Não está registrado? 
            <Link to ="/register">      Criar nova conta</Link></p>
            </form>
        </div>
    </div>
  )
}

export default Login