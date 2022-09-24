import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Title } from '../styledComponents/MakeEntry'
import { Table, TD, TH, TR } from '../styledComponents/SeeAllClient'
import { Heading, InsideWrapper, Wrapper ,Select ,Option, ReportContainer, ChartContainer } from '../styledComponents/Statistics'
import { Doughnut} from 'react-chartjs-2'

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
    const date = `${month}-${year}`

    useEffect(()=>{
        var fetchAllClient = async()=>{
            const res = await axios.get('https://maxis-holiday.herokuapp.com/client/get-all-client')
            
            setClients(res.data)
        }
        fetchAllClient()
    },[month])



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
                        </TR>
                        {Clients ? Clients.map((data,index)=>data.dateOfJoining.includes(date) ?
                            <>
                            <TR>
                                <TD>{data.dateOfJoining}</TD>
                                <TD>{data.netAmount}</TD>
                            </TR>
                           {
                            data.usingHolidayPackage.map((Data_2,Index_2)=>
                            
                            <TR>
                                <TD>{Data_2.BookingDate}</TD>
                                <TD>{(Data_2.OneDayPrice)*(parseInt(Data_2.Days)+parseInt(Data_2.Nights))}</TD>
                            </TR>
                            )
                              
                           }
                            </>
                            
                        : <Title>No Sales In This Month</Title>) : null}

                        {/* {
                            Clients ? Clients.map((data,index)=>data.usingHolidayPackage?.map((Data_2,Index_2)=>
                            
                            <TR>
                                <TD>{Data_2.BookingDate}</TD>
                                <TD>{(Data_2.OneDayPrice)*(parseInt(Data_2.Days)+parseInt(Data_2.Nights))}</TD>
                            </TR>
                            )
                            
                            )  : null
                        } */}

                      </Table>

                </ReportContainer>

            </InsideWrapper>

            {/* <ReportContainer>
                    <Heading>Chart Visulization</Heading>
                    <ChartContainer>
                        <Doughnut
                            data={{
                                labels:['January','February','March','April','May','June','July','August','September','October','November','December']
                            }}
                            height={400}
                            width={400}
                            options={{
                                maintainAspectRatio:false
                            }}

                        />
                    </ChartContainer>

                </ReportContainer> */}
        </Wrapper> 
    </>
  )
}
