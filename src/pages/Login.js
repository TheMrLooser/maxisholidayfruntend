import React, { useState } from 'react'
import { Button, Container, Input, InputWrapper, Title, Wrapper } from '../styledComponents/Login'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDispatch, useSelector } from 'react-redux'
import { LogedInClientAction, LogedInEmployeeAction } from '../redux/actions/loginActions';
import Loader from '../loder/loder';
import axios from 'axios';
import { Status } from '../components/Status';


export const Login = () => {
    const dispatch = useDispatch();
    const [userId,setUserId] = useState("");
    const [password,setPassword] = useState("");
    const [empty,setEmpty] = useState(false);
    const {loading,error,currentUser} = useSelector(state=>state.currentUser)

   const Login =()=>{
       axios.defaults.withCredentials = true
    if(userId&&password){
        (userId.includes("MHE")) ? LogedInEmployeeAction(dispatch, userId,password) : LogedInClientAction(dispatch, userId,password)
    }
   }

    

  return (
     <>
        <Container>
            <Wrapper>
                <Title>Login</Title>
                <AccountCircleIcon sx={{fontSize: '200px',color:'#fbb03b'}}/>
                {error ? <Status status={"fail"} Message={error?error.data:null}/> : null}
                <InputWrapper>
                    UserId
                    <Input type={'text'} placeholder="Enter Your Id" onChange={(e)=>setUserId(e.target.value)} />
                </InputWrapper>
                <InputWrapper>
                    Password
                    <Input type={'password'} placeholder="Enter Your Password" onChange={(e)=>setPassword(e.target.value)}/>
                </InputWrapper>
                <Button onClick={Login}>{loading ? <Loader/> : "Login"}</Button>
            </Wrapper>
        </Container>
     </>
  )
}
