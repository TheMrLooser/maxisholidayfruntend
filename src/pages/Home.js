import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ClientHome } from '../components/ClientHome'
import { EmployeeHome } from '../components/EmployeeHome'
import Loader from '../loder/loder'
import { LogedInWithCookieUserAction } from '../redux/actions/loginActions'
import { Container } from '../styledComponents/Home'
import { Login } from './Login'

export const Home = () => {
    const {loading,error,currentUser} = useSelector(state => state.currentUser)
    const dispatch = useDispatch()

    useEffect(()=>{
      const autoLogin = async()=>{
        axios.defaults.withCredentials = true
          await  LogedInWithCookieUserAction(dispatch)
      }
      autoLogin() 
  },[ ]) 
    
  return (
    <>  <BrowserRouter>
       <Container>
        {
            loading ?<Login/> : currentUser?.data?.role==="Client" ? <ClientHome/> : (currentUser?.data?.role==="Employee" || currentUser?.data?.role==="Admin" )  ? <EmployeeHome/> : <Login/>
        }
         {/* <Routes><Route path='/login' element={<Login/>}/></Routes> */}
       </Container>
       </BrowserRouter>
    </>
  )
}
