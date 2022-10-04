import axios from 'axios'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {Button , Input} from "../styledComponents/Login"
import { BodyWrapper, ElementWrapper, Heading, Title } from '../styledComponents/MakeEntry'
import { TextArea, Wrapper } from '../styledComponents/RegisterNewClient'
import { Status_2 } from './Status'
import styled from 'styled-components'
import Loader from '../loder/loder'




const Select = styled.select`
width:100%;
height:40px;
font-size:18px;
border-radius:5px;

`
const Option = styled.option`

`


export const RegisterNewClient = () => {

        const [name,setName] = useState("")
        const [email,setEmail] = useState("")
        const [gender,setGender] = useState("")
        const [phone,setPhone] = useState(null)
        const [address,setAddress] = useState("")
        const [netAmount,setNetAmount] = useState("")
        const [state,setState] = useState("")
        const [city,setCity] = useState("")
        const [DOB,setDOB] = useState("")
        const [spouseDOB,setSpouseDOB] = useState("")
        const [MAD,setMAD] = useState("")
        const [joiningDate,setJoiningdate] = useState("")
        const [fathersName,setFathersName] = useState("")
        const [mothersName,setMothersName] = useState("")
        const [membershipYear,setMembershipYear] = useState(0)
        const [spouse,setSpouseName] = useState("")
        const [firstChildName,setFirstChildName] = useState("")
        const [firstChildDOB,setFirstChildDOB] = useState("")
        const [secondChildName,setSecondChildName] = useState("")
        const [secondChildDOB,setSecondChildDOB] = useState("")
        const [thirdChildName,setThirdChildName] = useState("")
        const [thirdChildDOB,setThirdChildDOB] = useState("")
        const [AMC,setAMC] = useState(0)
        const [adharCardNumber,setAdharCardNumber] = useState(0)
        const [remark,setRemark] = useState("")
        const [membershipType,setMembershipType] = useState("")

        const {currentUser} = useSelector(state=>state.currentUser)
        const [status,setStatus] = useState("");
        const [Message,setMeaasge] = useState(null);
        const [errorMessage,setErrorMessage] = useState("");
        const [STATUS,setSTATUS] = useState(false)
        const todaysDate = `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`

        const [showLoader,setShoLoader] = useState(false)
        const register = async()=>{
                    setShoLoader(true)
                    const res = await axios.post('https://maxis-holiday.herokuapp.com/client/add-new-client',
                    {
                        name,email,gender,phone,address,netAmount,state,city,DOB,
                        fathersName,mothersName,membershipYear,spouse,firstChildName,firstChildDOB,secondChildDOB,secondChildName,
                        thirdChildDOB,thirdChildName,salesEmployeeId:currentUser.data.employeeId,AMC,adharCardNumber,remark,spouseDOB,marriageAnniversaryDate:MAD,membershipType,
                        dateOfJoining:todaysDate
                    }
                    );
                    if(res.status===202){
                        setStatus("fail")
                        setErrorMessage(res.data)
                        setSTATUS(true)
                    } 
                    else{
                        setMeaasge(res.data)
                        setStatus("success") 
                        setSTATUS(true)
                        const responce = await axios.post('http://localhost:4000/employee/send-mail/default',{to:"ankushsoni.236303@gmail.com",
                         clientId:res.data.clientId,name,email,phone,netAmount, 
                         salesEmployeeId:currentUser.data.employeeId,AMC,membershipType,membershipYear,
                         dateOfJoining:todaysDate
                        
                        });
                        console.log(responce.data)

                    }
            
                    setShoLoader(false)
                    
                }
    
         


  return (
    <>
        <Wrapper onSubmit={(e)=>e.preventDefault()}>
            <Heading>Register New Client</Heading>
            {STATUS? <Status_2  status={status} Message={Message} errorMessage={errorMessage}/> : null}
            <BodyWrapper>
                <ElementWrapper><Title>Name*</Title><Input required placeholder='Enter Name' onChange={(e)=>setName(e.target.value)}/></ElementWrapper>
                <ElementWrapper><Title>Email*</Title><Input required placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)}/></ElementWrapper>
                <ElementWrapper><Title>Phone*</Title><Input required placeholder='Enter Phone Number' onChange={(e)=>setPhone(e.target.value)}/></ElementWrapper>
                <ElementWrapper><Title>Gender*</Title><Input required placeholder='Enter Gender' onChange={(e)=>setGender(e.target.value)}/></ElementWrapper>
                <ElementWrapper><Title>Address*</Title><TextArea required placeholder='Enter Address' onChange={(e)=>setAddress(e.target.value)}/></ElementWrapper>
                <ElementWrapper><Title>Net Amount*</Title><Input required placeholder='Enter Net Amount' onChange={(e)=>setNetAmount(e.target.value)}/></ElementWrapper>
                <ElementWrapper><Title>State*</Title><Input required placeholder='Enter State' onChange={(e)=>setState(e.target.value)}/></ElementWrapper>
                <ElementWrapper><Title>City*</Title><Input required placeholder='Enter City' onChange={(e)=>setCity(e.target.value)}/></ElementWrapper>
                <ElementWrapper><Title>DOB*</Title><Input type={'date'} required placeholder='Enter DOB' onChange={(e)=>setDOB(e.target.value)}/></ElementWrapper>
                <ElementWrapper><Title>Father's Name*</Title><Input required placeholder='Enter Fathers Name' onChange={(e)=>setFathersName(e.target.value)}/></ElementWrapper>
                <ElementWrapper><Title>Mothers's Name*</Title><Input required placeholder='Enter Mothers Name' onChange={(e)=>setMothersName(e.target.value)}/></ElementWrapper>
                <ElementWrapper><Title>Spouse Name</Title><Input   placeholder='Enter Spouse Name' onChange={(e)=>setSpouseName(e.target.value)}/></ElementWrapper>
                <ElementWrapper><Title>Spouse DOB</Title><Input  type={'date'} placeholder='Enter Spouse DOB' onChange={(e)=>setSpouseDOB(e.target.value)}/></ElementWrapper>
                <ElementWrapper><Title>Marriage Anniversary Date</Title><Input type={'date'}  placeholder='Enter Marriage Anniversary Date' onChange={(e)=>setMAD(e.target.value)}/></ElementWrapper>
                <ElementWrapper><Title>First Child Name</Title><Input   placeholder='Enter First Child Name' onChange={(e)=>setFirstChildName(e.target.value)}/></ElementWrapper>
                <ElementWrapper><Title>First Child DOB</Title><Input  type={'date'} placeholder='Enter First Child DOB' onChange={(e)=>setFirstChildDOB(e.target.value)}/></ElementWrapper>
                <ElementWrapper><Title>Second Child Name</Title><Input   placeholder='Enter Second Child Name' onChange={(e)=>setSecondChildName(e.target.value)}/></ElementWrapper>
                <ElementWrapper><Title>Second Child DOB</Title><Input  type={'date'} placeholder='Enter Second Child DOB' onChange={(e)=>setSecondChildDOB(e.target.value)}/></ElementWrapper>
                <ElementWrapper><Title>Third Child Name</Title><Input   placeholder='Enter Third Child Name' onChange={(e)=>setThirdChildName(e.target.value)}/></ElementWrapper>
                <ElementWrapper><Title>Third Child DOB</Title><Input type={'date'}  placeholder='Enter Third Child DOB' onChange={(e)=>setThirdChildDOB(e.target.value)}/></ElementWrapper>
                <ElementWrapper><Title>AMC</Title><Input required placeholder='Enter AMC' onChange={(e)=>setAMC(e.target.value)}/></ElementWrapper>
                <ElementWrapper><Title>Remark</Title><TextArea   placeholder='Enter Remark' onChange={(e)=>setRemark(e.target.value)}/></ElementWrapper>
                <ElementWrapper><Title>Adhar Card NO.</Title><Input   placeholder='Enter Adhsr card no.' onChange={(e)=>setAdharCardNumber(e.target.value)}/></ElementWrapper>
                <ElementWrapper><Title>MembershipYear</Title><Input required placeholder='Enter MembershipYear' onChange={(e)=>setMembershipYear(e.target.value)}/></ElementWrapper>
                <ElementWrapper><Title>Membership Type</Title>
                <Select onChange={(e)=>setMembershipType(e.target.value)}>
                    <Option>Select Membership Type</Option>
                    <Option value={'1 years special offer membership'}>1 years special offer membership</Option>
                    <Option value={'3 Years Silver studio'}>3 Years Silver studio </Option>
                    <Option value={'3 years Silver 1BR'}>3 years Silver 1BR </Option>
                    <Option value={'5 Years Gold Studio '}>5 Years Gold Studio </Option>
                    <Option value={'5 Years Gold 1 BR '}>5 Years Gold 1 BR </Option>
                    <Option value={'10 Years Diamond Studio'}>10 Years Diamond Studio </Option>
                    <Option value={'10 Years Diamond 1BR'}>10 Years Diamond 1BR </Option>
                    <Option value={'25 Years years Titanium Studio'}>25 Years years Titanium Studio</Option>
                    <Option value={'25 Years Titanium 1BR'}>25 Years Titanium 1BR</Option>
                </Select>
                </ElementWrapper>
                 
            </BodyWrapper>
            <Button onClick={register}>{showLoader ? <Loader/> : "Register"}</Button>
        </Wrapper>
    </>
  )
}
