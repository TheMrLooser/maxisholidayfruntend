import axios from 'axios'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {Button , Input} from "../styledComponents/Login"
import { BodyWrapper, ElementWrapper, Heading, Title } from '../styledComponents/MakeEntry'
import { TextArea, Wrapper } from '../styledComponents/RegisterNewClient'
import { Status, Status_2 } from './Status'




 


export const RegisterNewEmployee = () => {

        const [name,setName] = useState("")
        const [email,setEmail] = useState("")
        const [gender,setGender] = useState("")
        const [phone,setPhone] = useState(null)
        const [address,setAddress] = useState("")
        const [state,setState] = useState("")
        const [city,setCity] = useState("")
        const [DOB,setDOB] = useState("")
       
        const [adharCardNumber,setAdharCardNumber] = useState(0)
         

        const {currentUser} = useSelector(state=>state.currentUser)
        const [status,setStatus] = useState("");
        const [Message,setMeaasge] = useState(null);
        const [STATUS,setSTATUS] = useState(false)


        const register = async()=>{
             
                    const res = await axios.post('https://maxis-holiday.herokuapp.com/employee/add-new-employee',
                    {
                        name,email,gender,phone,address,state,city,DOB,adharCardNumber 
                    }
                    );
                    if(res.status===202){
                        setStatus("fail")
                        setSTATUS(true)
                    } 
                    else{
                        setMeaasge(res.data)
                        setStatus("success") 
                        setSTATUS(true)
                    }
            
                    
                }
    
         


  return (
    <>
        <Wrapper onSubmit={(e)=>e.preventDefault()}>
            <Heading>Register New Employee</Heading>
            {STATUS? <Status_2  status={status} Message={Message}/> : null}
            <BodyWrapper>
                <ElementWrapper><Title>Name*</Title><Input required placeholder='Enter Name' onChange={(e)=>setName(e.target.value)}/></ElementWrapper>
                <ElementWrapper><Title>Email*</Title><Input required placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)}/></ElementWrapper>
                <ElementWrapper><Title>Phone*</Title><Input required placeholder='Enter Phone Number' onChange={(e)=>setPhone(e.target.value)}/></ElementWrapper>
                <ElementWrapper><Title>Gender*</Title><Input required placeholder='Enter Gender' onChange={(e)=>setGender(e.target.value)}/></ElementWrapper>
                <ElementWrapper><Title>Address*</Title><TextArea required placeholder='Enter Address' onChange={(e)=>setAddress(e.target.value)}/></ElementWrapper>
                <ElementWrapper><Title>State*</Title><Input required placeholder='Enter State' onChange={(e)=>setState(e.target.value)}/></ElementWrapper>
                <ElementWrapper><Title>City*</Title><Input required placeholder='Enter City' onChange={(e)=>setCity(e.target.value)}/></ElementWrapper>
                <ElementWrapper><Title>DOB*</Title><Input type={'date'} required placeholder='Enter DOB' onChange={(e)=>setDOB(e.target.value)}/></ElementWrapper>
                <ElementWrapper><Title>Adhar Card NO.</Title><Input   placeholder='Enter Adhsr card no.' onChange={(e)=>setAdharCardNumber(e.target.value)}/></ElementWrapper>
                 
                 
            </BodyWrapper>
            <Button onClick={register}>Register</Button>
        </Wrapper>
    </>
  )
}
