import { CLEARE_ERRORS, LOGIN_USER_FAIL, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS } from "../constant/constants"

export const LoginUserReducers = (state={currentUser:[]} , action)=>{
    switch(action.type){
        case LOGIN_USER_REQUEST:
            return{
                loading:true,
                currentUser:[]
            }
      
        case LOGIN_USER_SUCCESS :
            return{
                loading:false,
                currentUser:action.payload
            }
         
        case LOGIN_USER_FAIL:
            return{
                loading:false,
                error:action.payload
            }
       
        case CLEARE_ERRORS:
            return{
                ...state,
                error:null
            }
    
        default:
            return state;
        
        
        
    }
       
}
 