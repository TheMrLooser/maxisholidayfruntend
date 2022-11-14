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
import Loader from '../loder/loder'
import {   NavContainer, NavElement } from '../styledComponents/ClientHome'
import { Link } from 'react-router-dom'



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
    const [DMA,setDMA] = useState(0)

   
     
    const {currentUser} = useSelector(state=>state.currentUser)
    const [status,setStatus] = useState("");
    const [Message,setMessage] = useState(null);
    const [STATUS,setSTATUS] = useState(false)

    const [showLoader,setShoLoader] = useState(false)

    const [AmcAmount,setAmcAmount] = useState(0);
    const [AMCYear,setAMCYear] = useState(0);

    const Update = async()=>{
      setShoLoader(true)
        const res  = await axios.put('https://maxis-holiday.herokuapp.com/client/update-client',{clientId:data.clientId, name,email,gender,phone,address,netAmount,state,city,DMA});

        setMessage(res.data)
        if(res.status==202){
            setStatus('fail')
            setMessage(res.data)

        }
        setSTATUS(true)
        setShoLoader(false)

    }
    const UpdateAMC = async()=>{
        setShoLoader(true)
        const res  = await axios.put('https://maxis-holiday.herokuapp.com/client/update-client',{clientId:data.clientId, AMCYear, AmcAmount});

        setMessage(res.data)
        
        if(res.status==202){
            setStatus('fail')
            setMessage(res.data)

        }
        setSTATUS(true)
        setShoLoader(false)

    }


    const [membershipType,setMembershipType] = useState("")
    const UpgradePackage= async()=>{
      setShoLoader(true)
      const res  = await axios.put('https://maxis-holiday.herokuapp.com/client/update-client',{clientId:data.clientId, membershipType});
        setMessage(res.data)
        if(res.status==202){
            setStatus('fail')
            setMessage(res.data)

        }
        setSTATUS(true)
        setShoLoader(false)
    }
     

    const [noOfdays,setNoOfDays] = useState()
    const [noOfNights,setNoOfNights] = useState()
    const UpgradeDays_Nights= async()=>{
      setShoLoader(true) 
      const res  = await axios.put('https://maxis-holiday.herokuapp.com/client/update-client',{clientId:data.clientId, noOfNights,noOfdays});
        setMessage(res.data)
        if(res.status==202){
            setStatus('fail')
            setMessage(res.data)

        }
        setSTATUS(true)
        setShoLoader(false)
    }


    const [openUpdateBasic,setOpenUpdateBasic] = useState(true)
    const [openUpdatePackage,setOpenUpdatePackage] = useState(false)
    const [openUpdateAMC,setOpenUpdateAMC] = useState(false)
    const [openUpdateDays,setOpenUpdateDays] = useState(false)

     
    const changeUpdateSection =(id)=>{
       if(id==1){
        setOpenUpdateBasic(true)
        setOpenUpdateAMC(false)
        setOpenUpdatePackage(false)
        setOpenUpdateDays(false)
       }
       else if(id==2){
        setOpenUpdateBasic(false)
        setOpenUpdateAMC(false)
        setOpenUpdatePackage(true)
        setOpenUpdateDays(false)
       }
       else if(id==3){
        setOpenUpdateAMC(true)
        setOpenUpdateBasic(false)
        setOpenUpdatePackage(false)
        setOpenUpdateDays(false)
       }
       else if(id==4){
        setOpenUpdateDays(true)
        setOpenUpdateBasic(false)
        setOpenUpdateAMC(false)
        setOpenUpdatePackage(false)
       }
        
    }

  return (
     <>
       
        <ClientDetailWrapper style={{alignItems:'center',gap:'20px',position:'relative'}}>
                 <HighlightOffIcon sx={{color:'red',fontSize:'40px',position:'absolute',right:'30px',top:'10px',cursor:'pointer'}} onClick={()=>setOpeUpdatelPart(false)}/>
        
                <Heading style={{color:'white',border:'1px solid gray', padding:'10px',  borderBottomLeftRadius:'5px' ,borderBottomRightRadius:'5px',borderTop: 'none'}}>Update Client Detail</Heading>
                <NavContainer>
                  <NavElement onClick={()=>changeUpdateSection(1)}>Update Client Basic Detail</NavElement>
                   <NavElement onClick={()=>changeUpdateSection(2)}>Update Package</NavElement>
                    <NavElement onClick={()=>changeUpdateSection(3)}>Update AMC</NavElement>
                    <NavElement onClick={()=>changeUpdateSection(4)}>Update Days/Nights</NavElement>
                </NavContainer>
                {STATUS ? <Status Message={Message} status={status}/> : null}
              {
                openUpdateBasic ? 
                <>
                <UpdateContainer>
                  <ElementWrapper><Title style={{color:'gray'}}>Name*</Title><Input required placeholder={data.name} onChange={(e)=>setName(e.target.value)}/></ElementWrapper>
                  <ElementWrapper><Title style={{color:'gray'}}>Email*</Title><Input required placeholder={data.email} onChange={(e)=>setEmail(e.target.value)}/></ElementWrapper>
                  <ElementWrapper><Title style={{color:'gray'}}>Phone*</Title><Input required placeholder={data.phone} onChange={(e)=>setPhone(e.target.value)}/></ElementWrapper>
                  <ElementWrapper><Title style={{color:'gray'}}>Gender*</Title><Input required placeholder={data.gender} onChange={(e)=>setGender(e.target.value)}/></ElementWrapper>
                  <ElementWrapper><Title style={{color:'gray'}}>Address*</Title><TextArea required placeholder={data.address} onChange={(e)=>setAddress(e.target.value)}/></ElementWrapper>
                  <ElementWrapper><Title style={{color:'gray'}}>Net Amount*</Title><Input required placeholder='Enter Net Amount' onChange={(e)=>setNetAmount(e.target.value)}/></ElementWrapper>
                  <ElementWrapper><Title style={{color:'gray'}}>State*</Title><Input required placeholder='Enter State' onChange={(e)=>setState(e.target.value)}/></ElementWrapper>
                  <ElementWrapper><Title style={{color:'gray'}}>City*</Title><Input required placeholder='Enter City' onChange={(e)=>setCity(e.target.value)}/></ElementWrapper>
                  <ElementWrapper><Title style={{color:'gray'}}>Enter New Paid Membership Amount</Title><Input required placeholder='Enter Paid Amount' onChange={(e)=>setDMA(e.target.value)}/></ElementWrapper>
               
              </UpdateContainer>
              <Button onClick={Update}>{showLoader ? <Loader/> : "Update"}</Button>
                </>
                : null
              }

              {
                openUpdatePackage ? 
                <>
                <Heading>Upgrade Premium</Heading>
               
               <ElementWrapper>
                 <Title style={{color:'gray'}}>Select Membership Package</Title>
                 <Select onChange={(e)=>setMembershipType(e.target.value)}>
                     <Option value={'1 years special offer membership'}>1 years special offer membership</Option>
                     <Option value={'3 Years Silver studio'}>3 Years Silver studio </Option>
                     <Option value={'3 years Silver 1BR'}>3 years Silver 1BR </Option>
                     <Option value={'5 Years Gold Studio '}>5 Years Gold Studio </Option>
                     <Option value={'5 Years Gold 1 BR '}>5 Years Gold 1 BR </Option>
                     <Option value={'10 Years Diamond Studio'}>10 Years Diamond Studio </Option>
                     <Option value={'15 Years Platinum Studio'}>15 Years Platinum Studio </Option>
                     <Option value={'15 Years Platinum 1BR'}>15 Years Platinum 1BR </Option>
                     <Option value={'25 Years years Titanium Studio'}>25 Years years Titanium Studio</Option>
                     <Option value={'25 Years Titanium 1BR'}>25 Years Titanium 1BR</Option>
                 </Select>
               </ElementWrapper>
               <Button onClick={UpgradePackage}>{showLoader ? <Loader/>  :  "Upgrade Package"}</Button>
                </>
                :null
              }

              {
                openUpdateAMC ? 
                <>
                <Heading>Update AMC</Heading>
                <UpdateContainer>
                    <ElementWrapper><Title style={{color:'gray'}}>Enter AMC Amount</Title><Input required placeholder='Enter AMC Amount' type={'number'} onChange={(e)=>setAmcAmount(e.target.value)}/></ElementWrapper>
                    <ElementWrapper><Title style={{color:'gray'}}>Enter Year of Paying AMC</Title><Input required placeholder='Enter Year' type={'number'} onChange={(e)=>setAMCYear(e.target.value)}/></ElementWrapper>
                </UpdateContainer>
              <Button onClick={UpdateAMC}>{showLoader ? <Loader/>  :  "Update AMC"}</Button>
                </>
                :null
              }

              {
                openUpdateDays ? 
                <>
                <Heading>Update  Days/Nights</Heading>
                <UpdateContainer>
                    <ElementWrapper><Title style={{color:'gray'}}>Enter No. of Days</Title><Input required placeholder='Enter No. of Days' type={'number'} onChange={(e)=>setNoOfDays(e.target.value)}/></ElementWrapper>
                    <ElementWrapper><Title style={{color:'gray'}}>Enter No. of Nights</Title><Input required placeholder='Enter No. of Nights' type={'number'} onChange={(e)=>setNoOfNights(e.target.value)}/></ElementWrapper>
                </UpdateContainer>
              <Button onClick={UpgradeDays_Nights}>{showLoader ? <Loader/>  :  "Update AMC"}</Button>
                </>
                : null
              }


        </ClientDetailWrapper> 
     </>
  )
}
