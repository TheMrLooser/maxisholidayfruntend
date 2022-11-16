import React, { useState } from 'react'
import { Button, Container, Input, InputWrapper, LogoImg, LogoImgContainer, Title, Wrapper } from '../styledComponents/Login'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDispatch, useSelector } from 'react-redux'
import { LogedInClientAction, LogedInEmployeeAction } from '../redux/actions/loginActions';
import Loader from '../loder/loder';
import axios from 'axios';
import { Status } from '../components/Status';
import { useNavigate } from 'react-router-dom';


export const Login = () => {
    const dispatch = useDispatch();
    const [userId,setUserId] = useState("");
    const [password,setPassword] = useState("");
    const [empty,setEmpty] = useState(false);
    const {loading,error,currentUser} = useSelector(state=>state.currentUser)

    const nevigate = useNavigate()
   const Login =()=>{
       axios.defaults.withCredentials = true
       setEmpty(true)
    if(userId&&password){
        (userId.includes("MHE")) ? LogedInEmployeeAction(dispatch, userId,password) : LogedInClientAction(dispatch, userId,password)
        nevigate('/')
    }
   }

    

  return ( 
     <>
        <Container>
            <Wrapper>
                <Title>Login</Title>
                {/* <AccountCircleIcon sx={{fontSize: '200px',color:'#fbb03b'}}/> */}
                <LogoImgContainer><LogoImg src='https://maxisholiday.netlify.app/static/media/maxisLogo.e569bb686b8ef40b945f.png' width={'100%'} height={'100%'}/></LogoImgContainer>
                {error ? <Status status={"fail"} Message={error?error.data:null}/> : null}
                <InputWrapper>
                    UserId
                    <Input type={'text'} placeholder="Enter Your Id" onChange={(e)=>setUserId(e.target.value)} />
                </InputWrapper>
                <InputWrapper>
                    Password
                    <Input type={'password'} placeholder="Enter Your Password" onChange={(e)=>setPassword(e.target.value)}/>
                </InputWrapper>
                <Button onClick={Login}>{(loading&&empty) ? <Loader/> : "Login"}</Button>
            </Wrapper>
        </Container>
     </>
  )
}
