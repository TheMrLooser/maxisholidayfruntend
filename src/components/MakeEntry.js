import React, { useRef, useState } from 'react'
import { BodyWrapper, ElementWrapper, Heading, Title, Wrapper } from '../styledComponents/MakeEntry'
import {Button , Input} from "../styledComponents/Login"
import axios from 'axios'
import { Status } from './Status'
import Loader from '../loder/loder'
import { TextArea } from '../styledComponents/RegisterNewClient'

export const MakeEntry = () => {

    const [city,setCity] = useState("")
    const [clientId,setClientId] = useState("")
    const [checkIn,setCheckIn] = useState("")
    const [checkOut,setCheckOut] = useState("")
    const [days,setDays] = useState(0)
    const [nights,setNights] = useState(0) 
    // const [oneDayPrice,setOneDayPrice] = useState(0)
    const [remark,setRemark] = useState("")
    const BookingDate = `${new Date().getDate() }-${new Date().getMonth()}-${new Date().getFullYear()}`
    const [shoStatus,setShowStatus] = useState(false);
    const [message,setMessage] = useState("")
    const [STATUS,setSTATUS] = useState("")

    const [showLoader,setShoLoader] = useState(false)
    const submitData = async()=>{
         setShoLoader(true)
        const data = {ClientId:clientId , City:city, CheckIn:checkIn,CheckOut:checkOut,Days:days,Nights:nights,Remark:remark , BookingDate:BookingDate}
        const res = await axios.put('https://maxis-holiday.herokuapp.com/client/update-client',{usingHolidayPackage:data ,clientId})
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
            <Heading>Book Holiday</Heading>
            {shoStatus ? <Status status={STATUS} Message={message}/> : null}
            <BodyWrapper>
                <ElementWrapper>
                    <Title>Client Id*</Title>
                    <Input required placeholder='Enter ClientId' onChange={(e)=>setClientId(e.target.value)}/>
                </ElementWrapper>
                <ElementWrapper>
                    <Title>City*</Title>
                    <Input required placeholder='Enter City'  onChange={(e)=>setCity(e.target.value)}/>
                </ElementWrapper>
                <ElementWrapper>
                    <Title>CheckIn*</Title>
                    <Input type={'date'} required placeholder='Enter Start Date'  onChange={(e)=>setCheckIn(e.target.value)}/>
                </ElementWrapper>
                <ElementWrapper>
                    <Title>CheckOut*</Title>
                    <Input type={'date'} required placeholder='Enter End Date'  onChange={(e)=>setCheckOut(e.target.value)}/>
                </ElementWrapper>
                <ElementWrapper>
                    <Title>Days*</Title>
                    <Input required placeholder='Enter No. of Days'  onChange={(e)=>setDays(e.target.value)}/>
                </ElementWrapper>
                <ElementWrapper>
                    <Title>Nights</Title>
                    <Input   placeholder='Enter No. of Nights'  onChange={(e)=>setNights(e.target.value)}/>
                </ElementWrapper>
                {/* <ElementWrapper>
                    <Title>One Day Price*</Title>
                    <Input required placeholder='Enter One Day Price'  onChange={(e)=>setOneDayPrice(e.target.value)}/>
                </ElementWrapper> */}
                <ElementWrapper>
                    <Title>Remark</Title>
                    <TextArea   placeholder='Remark'  onChange={(e)=>setRemark(e.target.value)}/>
                </ElementWrapper>

            </BodyWrapper>
                <Button onClick={submitData}>{showLoader ? <Loader/> : "Book" }</Button>
                
        </Wrapper>
    </>
  )
}
