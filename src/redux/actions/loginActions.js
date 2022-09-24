import { LOGIN_USER_FAIL, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS } from "../constant/constants";
import axios from 'axios'

export const  LogedInClientAction = async (dispatch,userId,password)=>{
      try {

        dispatch({type:LOGIN_USER_REQUEST})
        axios.defaults.withCredentials = true
        const signin =  await axios.post("https://maxis-holiday.herokuapp.com/client/login-client",{clientId:userId,password});
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
        const signin =  await axios.post("https://maxis-holiday.herokuapp.com/employee/login-employee",{employeeId:userId,password});
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
        const signin =  await axios.get("https://maxis-holiday.herokuapp.com/client/login-by-cookies");
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

   
   

 