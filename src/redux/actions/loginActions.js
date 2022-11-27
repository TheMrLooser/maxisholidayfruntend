import { LOGIN_USER_FAIL, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS } from "../constant/constants";
import axios from 'axios'
import {HOST_NAME} from '../../AWS_server_IP'

export const  LogedInClientAction = async (dispatch,userId,password)=>{
      try {

        dispatch({type:LOGIN_USER_REQUEST})
        axios.defaults.withCredentials = true
        const signin =  await axios.post(`${HOST_NAME}/client/login-client`,{clientId:userId,password});
         dispatch({
          type:LOGIN_USER_SUCCESS,
          payload:signin
        })
      } catch (error) {
        dispatch({
          type:LOGIN_USER_FAIL,
          payload:error.response
  
        })
      }
    
  }    
export const  LogedInEmployeeAction = async (dispatch,userId,password)=>{
      try {

        dispatch({type:LOGIN_USER_REQUEST})
        axios.defaults.withCredentials = true
        const signin =  await axios.post(`${HOST_NAME}/employee/login-employee`,{employeeId:userId,password});
         dispatch({
          type:LOGIN_USER_SUCCESS,
          payload:signin
        })
      } catch (error) {
        dispatch({
          type:LOGIN_USER_FAIL,
          payload:error.response
  
        })
      }
    
  }    
export const  LogedInWithCookieUserAction = async (dispatch)=>{
     
      try {

        dispatch({type:LOGIN_USER_REQUEST}) 
        const signin =  await axios.get(`${HOST_NAME}/client/login-by-cookies`);
         dispatch({
          type:LOGIN_USER_SUCCESS,
          payload:signin
        })
      } catch (error) {
        dispatch({
          type:LOGIN_USER_FAIL,
          payload:error.response
  
        })
      }
    
  }    

   
   

 