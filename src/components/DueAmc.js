import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ClientDetailWrapper, Search, SearchBTN, SearchContainer, SearchWrapper, Table, TD, TH, TR, Wrapper } from '../styledComponents/SeeAllClient'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import EmailIcon from '@mui/icons-material/Email';
import { ClientDetail } from './ClientDetail';
import { Heading } from '../styledComponents/MakeEntry';
import { Input } from '../styledComponents/Login';
import { SendMail } from './SendMail';
import Loader from '../loder/loder';





 
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



export const DueAmc = () => {
    const [Clients,setClients]  = useState(null) 
    const [data,setData] = useState(null) 
    const [openDetailPart,setOpenDetailPart] = useState(false) 
    const [openMailPart,setOpeMailPart] = useState(false) 
    const [searchText,setSearchtext] = useState("")
    useEffect(()=>{
        var fetchAllClient = async()=>{
            const res = await axios.get('https://maxis-holiday.herokuapp.com/client/get-all-due-amc-client')
            
            setClients(filterdata(res.data,searchText))
        }
        fetchAllClient()
    },[searchText])
 
    
    const Sendmail = (data)=>{
        setData(data)
         setOpeMailPart(true)
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

            {openMailPart ? <SendMail data={data} setOpeMailPart={setOpeMailPart}/> : null}
           <SearchContainer>
                <SearchWrapper>
                    <Input placeholder='Search heare...' onChange={(e)=>setSearchtext(e.target.value)}/>
                    <SearchBTN>Search</SearchBTN>
                </SearchWrapper>
           </SearchContainer>
            <Table>
                <TR>
                    <TH>SN</TH>
                    <TH>Salse Exe</TH>
                    <TH>ClientId</TH>
                    <TH>Name</TH>
                    <TH>AMC / Year</TH>
                    <TH>AMC Status</TH>
                    <TH>Due AMC</TH>
                    <TH>Last Paid</TH>
                    <TH>Action</TH>
                </TR>
                {Clients ? "":<div style={{width:'99%',height:'50px',display:'flex',alignItems:'center',justifyContent:'center',position:'absolute'}}><Loader/></div>}

                {


                    Clients ? Clients.map((data,index) => 
                    <TR key={index}>
                        <TD>{index}</TD>
                        <TD>{data.salesEmployeeId}</TD>
                        <TD>{data.clientId}</TD>
                        <TD>{data.name}</TD>
                        <TD>{data.AMC}</TD>
                        <TD>{data.AMCStatus}</TD>
                        <TD>{data.DueAMC}</TD>
                        <TD>{data.LastAMCPaidYear}</TD>
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
