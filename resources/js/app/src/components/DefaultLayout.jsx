import React, { Children } from 'react'
import {Link, Navigate, useNavigate} from 'react-router-dom'
import { useLogin } from '../context/ContextProvider';
import axiosClient from '../axiosClient';


export default function DefaultLayout({children}) {

    const {token, _setUser, _setToken, user} = useLogin();
    if(!token){
        return <Navigate to="/login"/>
    }

    const Navigate = useNavigate();
    const onLogout = (e) => {
        e.preventDefault();
        axiosClient.post('/logout',user.email)
                    .then(()=>{
                        _setUser({});
                        _setToken(null);
                        Navigate('/login');
                    })
                    .catch((error)=>{
                        console.log(error);
                    })
    }

    console.log(token);
    return (
    <div id="defaultLayout">
        <aside>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/user/index">Usuário</Link>
            <Link to="/editora/index">Editora</Link>
            <Link to="/autor/index">Autor</Link>
            <Link to="/livro/index">Livro</Link>
        </aside>
        <div className='content'>
            <header>
                <div classname='header'>
                    Sistema de controle de livros
                </div>
                <div>
                    {user.name} &nbsp; &nbsp;
                    <a onClick={onLogout}className='btn-logout' href="#">Logout</a>
                </div>
            </header>
            <main>
                { children }
            </main>
        </div>
    </div>
  )
}
