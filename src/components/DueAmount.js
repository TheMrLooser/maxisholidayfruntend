import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ClientDetailWrapper, Search, SearchBTN, SearchContainer, SearchWrapper, Table, TD, TH, TR, Wrapper } from '../styledComponents/SeeAllClient'
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import EmailIcon from '@mui/icons-material/Email';
import { ClientDetail } from './ClientDetail';
import { Heading } from '../styledComponents/MakeEntry';
import { UpdateClient } from './UpdateClient';
import { Input } from '../styledComponents/Login';
import {Link}from 'react-router-dom'
import { SendMail } from './SendMail';
import { DownloadInvoice } from './DownloadInvoice';





 
const filterdata = (user,searchText)=>{
    if (!searchText) {
        return user;  
    }
  
    return user.filter((data)=>{
        const dataname = data.name.toLowerCase() ;
        const clientId = data.clientId.toLowerCase() ;
        const email = data.email.toLowerCase() ;
        return  dataname.includes(searchText.toLowerCase()) ||email.includes(searchText.toLowerCase()) || clientId.includes(searchText.toLowerCase())
    })
  
  }



export const DueAmount = () => {
    const [Clients,setClients]  = useState(null)
    const [data,setData] = useState(null) 
    const [openDetailPart,setOpenDetailPart] = useState(false) 
    const [openUpdatePart,setOpeUpdatelPart] = useState(false) 
    const [openMailPart,setOpeMailPart] = useState(false) 
    const [openDownloadPart,setDownloadPart] = useState(false) 
    const [searchText,setSearchtext] = useState("")
    useEffect(()=>{
        var fetchAllClient = async()=>{
            const res = await axios.get('https://maxis-holiday.herokuapp.com/client/get-all-client')
            
            setClients(filterdata(res.data,searchText))
        }
        fetchAllClient()
    },[searchText])

    const ViewDetail = (data)=>{

        setData(data)
        setOpenDetailPart(true)
    }
    const VisitUpdateSec = (data)=>{
        setData(data)
        setOpeUpdatelPart(true)
    }
    const Sendmail = (data)=>{
        setData(data)
         setOpeMailPart(true)
    }

    const DownloadInvoices = (data)=>{
        setData(data)
        setDownloadPart(true)
    }
 

  return (
    <>
        <Wrapper>
            { openDetailPart ?
            <ClientDetailWrapper >
                <HighlightOffIcon sx={{color:'red',fontSize:'40px',position:'absolute',right:'30px',top:'10px',cursor:'pointer'}} onClick={()=>setOpenDetailPart(false)}/>
                <Heading>Client Invoice</Heading>
                 <ClientDetail data={data}/> 
            </ClientDetailWrapper>
            : null}

           { openUpdatePart ? <UpdateClient setOpeUpdatelPart={setOpeUpdatelPart} data={data}/>  : null}
            {openMailPart ? <SendMail data={data} setOpeMailPart={setOpeMailPart}/> : null}
            {openDownloadPart ? <DownloadInvoice data={data} setDownloadPart={setDownloadPart}/> : null}
           <SearchContainer>
                <SearchWrapper>
                    <Input placeholder='Search heare...' onChange={(e)=>setSearchtext(e.target.value)}/>
                    <SearchBTN>Search</SearchBTN>
                </SearchWrapper>
           </SearchContainer>
            <Table>
                <TR>
                    <TH></TH>
                    <TH>SN</TH>
                    <TH>Salse Exe</TH>
                    <TH>ClientId</TH>
                    <TH>Name</TH>
                    <TH>Net Amount</TH>
                    <TH>Paid Amount</TH>
                    <TH>Balance Amount</TH>
                    <TH>Action</TH>
                </TR>

                {
                    Clients ? Clients.map((data,index) => 
                    
                    <TR key={index}>
                        <TD><ControlPointIcon sx={{color:'green',cursor:'pointer'}} onClick={()=>ViewDetail(data)}/></TD>
                        <TD>{index}</TD>
                        <TD>{data.salesEmployeeId}</TD>
                        <TD>{data.clientId}</TD>
                        <TD>{data.name}</TD>
                        <TD>{data.netAmount}</TD>
                        <TD>{data.paidAmount}</TD>
                        <TD>{data.balanceAmount}</TD>
                        <TD><EmailIcon sx={{color:'yellow',cursor:'pointer'}}   onClick={()=>Sendmail(data)}/>  </TD>
                    </TR> 
                        
                    
                    )

                    :null
                }
            </Table>
             
        </Wrapper>
    </>
  )
}