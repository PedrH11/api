import { Fragment, useEffect, useState } from "react";
import axiosClient from '../../axiosClient';
import { Link, useNavigate, useParams } from "react-router-dom";

export default function UserFormStore ()
{
    const navigate = useNavigate();

    const [user, setUser] = useState({
        id: null,
        name:"",
        email:"",
        password:"",
    });

    
    const onSubmit = (e) => {
        e.preventDefault();
        
        axiosClient.post(`/user/store/`,user)
        .then(({ }) => {
            setUser();
            console.log("Usuário incluído com sucesso");
            navigate('/user/index');
        })
        .catch((error) => {
            console.log(error);
        });
    }

    console.log(user.name);
    return(
        <Fragment>
            <div className="display">
                <div ClassName="card animated fadeinDown">
                    {<h1>Inserção de usuário: {user.name}</h1>}

                    <form onSubmit={(e)=>onSubmit(e)}>
                        <input 
                        type="text"
                        Value={user.name} 
                        placeholder="Nome" 
                        onChange={
                          e => setUser({
                            ...user,name:e.target.value
                          })
                       }
                        />

                        <input 
                        type="text"
                        Value={user.email} 
                        placeholder="E-mail" 
                        onChange={
                          e => setUser({
                            ...user,email:e.target.value
                          })
                        } 
                        />
                        <input 
                        type="password"
                        Value={user.password} 
                        placeholder="Senha" 
                        onChange={
                          e => setUser({
                            ...user,password:e.target.value
                          })
                        } 
                        />
                        <button className="btn-add">Salvar</button>
                        <Link type="button"
                                className="btn-cancel"
                                to = '/user/index'>
                                Cancelar
                        </Link>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}