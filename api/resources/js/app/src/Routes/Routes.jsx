
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import UserFormList from '../views/user/UserFormList';
import UserFormStore from '../views/user/UserFormStore';
import UserFormUpdate from '../views/user/UserFormUpdate';
import UserFormShow from '../views/user/UserFormShow';
import UserFormDestroy from '../views/user/UserFormDestroy';
import Layout from './Layout';
import Dashboard from '../components/Dashboard';
import NotFound from '../views/NotFound';

import Singup from '../views/login/Signup';
import UpdatePassword from '../views/login/UpdatePassword';
import ForgotPassword from '../views/login/ForgotPassword';
import Login from '../views/login/Login';

const Rotas = () => {
  return (
    <Routes>
       <Route path='/' element={<Login/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/register' element={<Singup/>}/>
       <Route path='/forgotpassword' element={<ForgotPassword/>}/>
       <Route path='/updatepassword' element={<UpdatePassword/>}/>
       <Route element={<Layout/>}>
         <Route path='/dashboard' element={<Dashboard/>} />
         <Route path='/user/index' element={<UserFormList/>} />
         <Route path='/user/store' element={<UserFormStore/>} />
         <Route path="/user/update/:id" element={<UserFormUpdate/>}/>
         <Route path="/user/show/:id" element={<UserFormShow/>}/>
         <Route path="/user/destroy/:id" element={<UserFormDestroy/>}/>
       </Route>
       <Route path="*" element={<NotFound/>}/>
    </Routes>
  )
}

export default Rotas;
