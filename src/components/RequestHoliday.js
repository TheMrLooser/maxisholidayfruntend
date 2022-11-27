import React, { useState } from 'react'
import { BodyWrapper, ElementWrapper, Heading, Title, Wrapper } from '../styledComponents/MakeEntry'
import {Button , Input} from "../styledComponents/Login"
import axios from 'axios';
import { Status } from './Status'
import Loader from '../loder/loder';
import {HOST_NAME} from '../AWS_server_IP'


export const RequestHoliday = ({currentUser}) => {
    const [checkIn,setTo] = useState("")
    const [checkOut,setFrom] = useState("")
    const [city,setCIty] = useState("")
    const [remark,setRemark] = useState("")
    const [noOfAdults,setNoOfAdults] = useState(0)
    const [noOfChilds,setNoOfChilds] = useState(0)
    const todaysDate = `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`
    const [shoStatus,setShowStatus] = useState(false);
    const [message,setMessage] = useState("")
    const [STATUS,setSTATUS] = useState("")

    const [showLoader,setShoLoader] = useState(false)
    const SendRequest = async()=>{
        setShoLoader(true)
       const res =  await axios.post(`${HOST_NAME}/holidays/create-request`,{
            name:currentUser.name,
            email:currentUser.email,
            phone:currentUser.phone,
            clientId:currentUser.clientId,
            checkIn,
            checkOut,
            city,
            remark,
            requestDate:todaysDate,
            noOfAdults,noOfChilds
        });
        setMessage(res.data)
        if(res.status==202){
            setSTATUS('fail')
            setMessage(res.data)

        }
        setShowStatus(true)
        setShoLoader(false)


    }


  return (
    <>
        <Wrapper onSubmit={(e)=>e.preventDefault()}>
            <Heading style={{color:'white'}}>Request Holiday Form</Heading>
            {shoStatus ? <Status status={STATUS} Message={message}/> : null}
            <BodyWrapper>
                <ElementWrapper><Title>Check In</Title><Input required type={'date'} onChange={(e)=>setTo(e.target.value)}/></ElementWrapper>
                <ElementWrapper><Title>Check Out</Title><Input required type={'date'} onChange={(e)=>setFrom(e.target.value)}/></ElementWrapper>
                <ElementWrapper><Title>Location</Title><Input required placeholder='Enter City Name' onChange={(e)=>setCIty(e.target.value)}/></ElementWrapper>
                <ElementWrapper><Title>No. Of Adults</Title><Input required placeholder='Enter No. of Adults ' onChange={(e)=>setNoOfAdults(e.target.value)}/></ElementWrapper>
                <ElementWrapper><Title>No. Of Childs</Title><Input required placeholder='Enter No. of Childs' onChange={(e)=>setNoOfChilds(e.target.value)}/></ElementWrapper>
                <ElementWrapper><Title>Remark</Title><Input placeholder='Enter Remark' onChange={(e)=>setRemark(e.target.value)}/></ElementWrapper>
            </BodyWrapper>
            <Button   onClick={SendRequest}>{showLoader ? <Loader/> : "Send Request"}</Button>
        </Wrapper>
    </>
    )
}
