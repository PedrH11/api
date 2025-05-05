import React from 'react'
import { Route,Routes } from 'react-router-dom'
import UserFormList from '../views/user/UserFormList'
import UserFormDestroy from '../views/user/UserFormDestroy'
import UserFormStore from '../views/user/UserFormStore'
import UserFormUpdate from '../views/user/UserFormUpdate'
import UserFormShow from '../views/user/UserFormShow'
import Layout from './Layout';
import Dashboard from '../components/Dashboard';

const Rotas = () => {
  return (
    <Routes>
        <Route element={<Layout/>}>
        <Route path='/dashboard' element ={<Dashboard/>}/>
        <Route path='/user/index' element ={<UserFormList/>}/>
        <Route path ='/user/store' element ={<UserFormStore/>}/>
        <Route path ='/user/update/:id' element ={<UserFormUpdate/>}/>
        <Route path ='/user/show/:id' element ={<UserFormShow/>}/>
        <Route path ='/user/destroy/:id' element ={<UserFormDestroy/>}/>
        </Route>
    </Routes>
  )
}

export default Rotas