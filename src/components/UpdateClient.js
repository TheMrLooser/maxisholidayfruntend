import React, { useState } from 'react'
import { ClientDetailWrapper } from '../styledComponents/SeeAllClient'
import { useSelector } from 'react-redux'
import {Button , Input} from "../styledComponents/Login"
import { BodyWrapper, ElementWrapper, Heading, Title } from '../styledComponents/MakeEntry'
import { TextArea, Wrapper } from '../styledComponents/RegisterNewClient'
import { Status, Status_2 } from './Status';
import styled from 'styled-components'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import axios from 'axios'


const UpdateContainer = styled.div`
width:100%;
max-width:600px;
display:flex;
flex-wrap:wrap;
align-items:center;
justify-content:center;
@media only screen and (max-width:500px){
max-width:100%;
}

`
const Select = styled.select`
width:100%;
height:30px;
font-size:18px;
border-radius:5px;

`
const Option = styled.option`

`
 

export const UpdateClient = ({setOpeUpdatelPart , data}) => {

    const [name,setName] = useState(data.name)
    const [email,setEmail] = useState(data.email)
    const [gender,setGender] = useState(data.gender)
    const [phone,setPhone] = useState(data.phone)
    const [address,setAddress] = useState(data.address)
    const [netAmount,setNetAmount] = useState(data.netAmount)
    const [state,setState] = useState(data.state)
    const [city,setCity] = useState(data.city)
   
     
    const {currentUser} = useSelector(state=>state.currentUser)
    const [status,setStatus] = useState("");
    const [Message,setMessage] = useState(null);
    const [STATUS,setSTATUS] = useState(false)


    const Update = async()=>{
        const res  = await axios.put('https://maxis-holiday.herokuapp.com/client/update-client',{clientId:data.clientId, name,email,gender,phone,address,netAmount,state,city});

        setMessage(res.data)
        if(res.status==202){
            setStatus('fail')
            setMessage(res.data)

        }
        setSTATUS(true)
    }


    const [membershipType,setMembershipType] = useState("")
    const UpgradePackage= async()=>{
        const res  = await axios.put('https://maxis-holiday.herokuapp.com/client/update-client',{clientId:data.clientId, membershipType});

        setMessage(res.data)
        if(res.status==202){
            setStatus('fail')
            setMessage(res.data)

        }
        setSTATUS(true)
    }
     

  return (
     <>
        <ClientDetailWrapper style={{justifyContent:'center',alignItems:'center',gap:'20px'}}>
                 <HighlightOffIcon sx={{color:'red',fontSize:'40px',position:'absolute',right:'30px',top:'10px',cursor:'pointer'}} onClick={()=>setOpeUpdatelPart(false)}/>
        
                <Heading>Update Client Detail</Heading>
                {STATUS ? <Status Message={Message} status={status}/> : null}
              <UpdateContainer>
                <ElementWrapper><Title>Name*</Title><Input required placeholder={data.name} onChange={(e)=>setName(e.target.value)}/></ElementWrapper>
                <ElementWrapper><Title>Email*</Title><Input required placeholder={data.email} onChange={(e)=>setEmail(e.target.value)}/></ElementWrapper>
                <ElementWrapper><Title>Phone*</Title><Input required placeholder={data.phone} onChange={(e)=>setPhone(e.target.value)}/></ElementWrapper>
                <ElementWrapper><Title>Gender*</Title><Input required placeholder={data.gender} onChange={(e)=>setGender(e.target.value)}/></ElementWrapper>
                <ElementWrapper><Title>Address*</Title><TextArea required placeholder={data.address} onChange={(e)=>setAddress(e.target.value)}/></ElementWrapper>
                <ElementWrapper><Title>Net Amount*</Title><Input required placeholder='Enter Net Amount' onChange={(e)=>setNetAmount(e.target.value)}/></ElementWrapper>
                <ElementWrapper><Title>State*</Title><Input required placeholder='Enter State' onChange={(e)=>setState(e.target.value)}/></ElementWrapper>
                <ElementWrapper><Title>City*</Title><Input required placeholder='Enter City' onChange={(e)=>setCity(e.target.value)}/></ElementWrapper>
               
              </UpdateContainer>
              <Button onClick={Update}>Update</Button>

              <Heading>Upgrade Premium</Heading>
              
              <ElementWrapper>
                <Title>Select Membership Package</Title>
                <Select onChange={(e)=>setMembershipType(e.target.value)}>
                    <Option value={'1 years special offer membership'}>1 years special offer membership</Option>
                    <Option value={'3 Years Silver studio'}>3 Years Silver studio </Option>
                    <Option value={'3 years Silver 1BR'}>3 years Silver 1BR </Option>
                    <Option value={'5 Years Gold Studio '}>5 Years Gold Studio </Option>
                    <Option value={'5 Years Gold 1 BR '}>5 Years Gold 1 BR </Option>
                    <Option value={'10 Years Diamond Studio'}>10 Years Diamond Studio </Option>
                    <Option value={'25 Years years Titanium Studio'}>25 Years years Titanium Studio</Option>
                    <Option value={'25 Years Titanium 1BR'}>25 Years Titanium 1BR</Option>
                </Select>
              </ElementWrapper>
              <Button onClick={UpgradePackage}>Upgrade Package</Button>
        </ClientDetailWrapper> 
     </>
  )
}
