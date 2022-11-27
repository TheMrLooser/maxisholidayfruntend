import axios from 'axios'
import React, { useState } from 'react'
import Loader from '../loder/loder'
import { Button, Input } from '../styledComponents/Login'
import {  Heading, Title } from '../styledComponents/MakeEntry'
import { TextArea } from '../styledComponents/RegisterNewClient'
import { Wrapper , Container ,ElementWrapper, Notify} from '../styledComponents/SendMail'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import {HOST_NAME} from '../AWS_server_IP'



export const SendMail = ({data , setOpeMailPart}) => {

    const [subject,setSubject] = useState("")
    const [message,setMessage] = useState("")
    const [resMessage,setResMessage] = useState("")
    const [Status,setStatus] = useState(false)
    const [showLoader,setShoLoader] = useState(false)
    const sendMail = async ()=>{
        setShoLoader(true)
        const res = await axios.post(`${HOST_NAME}/employee/send-mail`,{subject,message,to:data.email});
        if(res.status===200){
            setResMessage(res.data)
            setStatus(true)

        }

        setShoLoader(false)

    }
 
  return ( 
    <>
        <Container>
            <Wrapper> 
            <HighlightOffIcon sx={{color:'red',fontSize:'40px',position:'absolute',right:'30px',top:'10px',cursor:'pointer'}} onClick={()=>setOpeMailPart(false)}/>
                <Heading>Send Email</Heading>
                {Status ? <Notify>{resMessage}</Notify> : null}
                <ElementWrapper><Title>To</Title><Input value={data.email}/></ElementWrapper>
                {/* <ElementWrapper><Title>Subject</Title><Input placeholder='Enter Subject' onChange={(e)=>setSubject(e.target.value)}/></ElementWrapper> */}
                {/* <ElementWrapper><Title>Body</Title><TextArea style={{minHeight:'200px'}} placeholder=" Enter Message Here.." onChange={(e)=>setMessage(e.target.value)}/></ElementWrapper> */}
                <Button onClick={sendMail}>{showLoader?<Loader/>:"Send"}</Button>
            </Wrapper>
        </Container>
    </>
  )
}
