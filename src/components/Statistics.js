import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loader from '../loder/loder'
import { Table, TD, TH, TR } from '../styledComponents/SeeAllClient'
import { Heading, InsideWrapper, Wrapper ,Select ,Option, ReportContainer } from '../styledComponents/Statistics'

export const Statistics = () => {
    const [month,setMonth] = useState("")
    const months = [
        {no:1,name:'January'},
        {no:2,name:'February'},
        {no:3,name:'March'},
        {no:4,name:'April'},
        {no:5,name:'May'},
        {no:6,name:'June'},
        {no:7,name:'July'},
        {no:8,name:'August'},
        {no:9,name:'September'},
        {no:10,name:'October'},
        {no:11,name:'November'},
        {no:12,name:'December'},
        
    ]
    const [Clients,setClients]  = useState(null)
    const year = new Date().getFullYear()
    const date = `${year}-${month}`

    useEffect(()=>{
        var fetchAllClient = async()=>{
            const res = await axios.get('https://maxis-holiday.herokuapp.com/client/get-all-client')
            
            setClients(res.data)
        }
        fetchAllClient()
    },[ month])

    
    console.log(Clients ? Clients.map((data,index)=>data.dateOfJoining.includes(month)):null)


  return (
    <>
        <Wrapper>
            <InsideWrapper>
                <Heading>Monthly Sales Report</Heading>
                <Select onChange={(e)=>setMonth(e.target.value)}>
                    <Option>Select Month</Option>
                    {months.map(data=><Option value={data.no}>{data.name}</Option>)}                    
                </Select>
                
                <ReportContainer>
                      
                      <Table>
                        <TR>
                            <TH>Date</TH>
                            <TH>Amount</TH>
                            <TH>City</TH>
                        </TR>
                        {Clients ? "":<div style={{width:'99%',height:'50px',display:'flex',alignItems:'center',justifyContent:'center',position:'absolute'}}><Loader/></div>}
                        
                        {Clients ? Clients.map((data,index)=>data.dateOfJoining.includes(date)?
                            <>
                            <TR key={index}>
                                <TD>{data.dateOfJoining}</TD>
                                <TD>{data.netAmount}</TD>
                                <TD>{data.city}</TD>
                            </TR>
                           {
                            data.usingHolidayPackage.map((Data_2,Index_2)=>
                            
                            <TR key={Index_2}> 
                                <TD>{Data_2.BookingDate}</TD>
                                <TD>{(Data_2.OneDayPrice)*(parseInt(Data_2.Days)+parseInt(Data_2.Nights))}</TD>
                            </TR>
                            )
                              
                           }
                            </>
                            
                        : null) : null}


                      </Table>

                </ReportContainer>

            </InsideWrapper>
        </Wrapper> 
    </>
  )
}
