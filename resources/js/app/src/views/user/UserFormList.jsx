import React, { useState, useEffect } from 'react';
import axiosClient from '../../axiosClient';
import { Link } from 'react-router-dom';

export default function UserFormList(){
    const [users, setUsers] = useState ([]);

    const getUsers = () => {
        axiosClient.get('/user/index')
                    .then(({data}) => {
                        console.log(data.data);
                        setUsers(data.data);
                    })
                    .catch((error)=>{
                        console.log(error);
                    });
    }

    useEffect(()=>{
        getUsers();
    }, []);

    console.log(users);
    return(
        <div>
            <div className="display">
                <div className="card animated fadeInDown">
                    <div style={{
                        display:'flex',
                        justifyContent:'space-between',
                        alignItems:'center'
                    }}>
                     <h1>Usúarios</h1>
                     <Link to="/user/store" className="btn-add">Store</Link>

                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th className="center actions" colSpan={3} >Actions</th> 
                            </tr>
                        </thead>
                        <tbody>
                        {
                                users.length > 0 ? (

                                    users.map(user => (
                                        <tr key = {user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td className = "center actions">
                                                <Link className = "btn-edit" to={`/user/update/${user.id}`}>Update</Link>
                                            </td>
                                            <td className = "center actions">
                                                <Link className = "btn-delete" to={`/user/destroy/${user.id}`}>Destroy</Link>
                                            </td>
                                            <td className = "center actions">
                                            <Link className="btn-show" to={`/user/show/${user.id}`}>Show</Link>
                                            </td>
                                        </tr>
                                    ))
                                ):(
                                    <tr>
                                        <td>Nenhum registro localizado</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}