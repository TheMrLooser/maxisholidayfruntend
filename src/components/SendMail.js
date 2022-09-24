import axios from 'axios'
import React, { useState } from 'react'
import Loader from '../loder/loder'
import { Button, Input } from '../styledComponents/Login'
import {  Heading, Title } from '../styledComponents/MakeEntry'
import { TextArea } from '../styledComponents/RegisterNewClient'
import { Wrapper , Container ,ElementWrapper, Notify} from '../styledComponents/SendMail'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';



export const SendMail = ({data , setOpeMailPart}) => {

    const [subject,setSubject] = useState("")
    const [message,setMessage] = useState("")
    const [resMessage,setResMessage] = useState("Sending....")
    const [Status,setStatus] = useState(false)
    const [LoaderStatus,setLoaderStatus] = useState(false)
    const sendMail = async ()=>{
        setLoaderStatus(true)
        const res = await axios.post('https://maxis-holiday.herokuapp.com/employee/send-mail',{subject,message,to:data.email});
        if(res.status===200){
            setResMessage(res.data)
            setStatus(true)
            setLoaderStatus(false)

        }
    }
 
  return (
    <>
        <Container>
            <Wrapper> 
            <HighlightOffIcon sx={{color:'red',fontSize:'40px',position:'absolute',right:'30px',top:'10px',cursor:'pointer'}} onClick={()=>setOpeMailPart(false)}/>
                <Heading>Send Email</Heading>
                {Status ? <Notify>{resMessage}</Notify> : null}
                <ElementWrapper><Title>To</Title><Input value={data.email}/></ElementWrapper>
                <ElementWrapper><Title>Subject</Title><Input placeholder='Enter Subject' onChange={(e)=>setSubject(e.target.value)}/></ElementWrapper>
                <ElementWrapper><Title>Body</Title><TextArea style={{minHeight:'200px'}} placeholder=" Enter Message Here.." onChange={(e)=>setMessage(e.target.value)}/></ElementWrapper>
                <Button onClick={sendMail}>{LoaderStatus?<Loader/>:"Send"}</Button>
            </Wrapper>
        </Container>
    </>
  )
}
