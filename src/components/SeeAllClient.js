import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ClientDetailWrapper, SearchBTN, SearchContainer, SearchWrapper, Table, TD, TH, TR, Wrapper } from '../styledComponents/SeeAllClient'
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import EmailIcon from '@mui/icons-material/Email';
import DeleteIcon from '@mui/icons-material/Delete';
import { ClientDetail } from './ClientDetail';
import { Heading } from '../styledComponents/MakeEntry';
import { UpdateClient } from './UpdateClient';
import { Input } from '../styledComponents/Login';
import { SendMail } from './SendMail';
import { DownloadInvoice } from './DownloadInvoice';
import { useSelector } from 'react-redux';
import Loader from '../loder/loder';
import { Link, Route, Routes } from 'react-router-dom';





 
const filterdata = (user,searchText)=>{
    if (!searchText) {
        return user;  
    }
  
    return user.filter((data)=>{
        const dataname = data.name.toLowerCase() ;
        const clientId = data.clientId.toLowerCase() ;
        return  dataname.includes(searchText.toLowerCase())  || clientId.includes(searchText.toLowerCase())
    })
  
  }



export const SeeAllClient = () => {
    const {loading , error , currentUser} = useSelector(state=>state.currentUser)
    const [Clients,setClients]  = useState(null)
    const [data,setData] = useState(null) 
    const [openDetailPart,setOpenDetailPart] = useState(false) 
    const [openDeletePart,setOpenDeletePart] = useState(false) 
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

    const ViewDelete = (data)=>{

        setData(data)
        setOpenDeletePart(true)
    }
    const DeleteEmployee = async()=>{
         const clientId = data.clientId
         axios.defaults.withCredentials = true
         await axios.delete(`https://maxis-holiday.herokuapp.com/client/delete-client/${clientId}`)
         window.location.reload(true)
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

            { openDeletePart ?
            <div className='deleteContainer'>
                <div className='deleteWrapper'>
                    <HighlightOffIcon sx={{color:'red',fontSize:'40px',position:'absolute',right:'30px',top:'10px',cursor:'pointer'}} onClick={()=>setOpenDeletePart(false)}/>
                    <Heading>Delete Employee</Heading>
                    <div><span className='delete' onClick={DeleteEmployee}>Delete</span> <span onClick={()=>setOpenDeletePart(false)}>Cancel</span></div>
                </div>
            </div>
            : null}

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
                    <TH>Email</TH>
                    <TH>Gender</TH>
                    <TH>J-date</TH>
                    <TH>Action</TH>
                </TR>
                {Clients ? "":<div style={{width:'99%',height:'50px',display:'flex',alignItems:'center',justifyContent:'center',position:'absolute'}}><Loader/></div>}
                {
                    Clients ? Clients.map((data,index) => 
                    
                    <TR key={index}>
                        <TD><ControlPointIcon sx={{color:'green',cursor:'pointer'}} onClick={()=>ViewDetail(data)}/></TD>
                        <TD>{index}</TD>
                        <TD>{data.salesEmployeeId}</TD>
                        <TD>{data.clientId}</TD>
                        <TD>{data.name}</TD>
                        <TD>{data.email}</TD>
                        <TD>{data.gender}</TD>
                        <TD>{data.dateOfJoining}</TD>
                        <TD ><ModeEditIcon sx={{color:'green',cursor:'pointer'}}  onClick={()=>VisitUpdateSec(data)}/> <EmailIcon sx={{color:'orange',cursor:'pointer'}}   onClick={()=>Sendmail(data)}/>  <DownloadForOfflineIcon sx={{color:'darkgray',cursor:'pointer'}}   onClick={()=>DownloadInvoices(data)}/> {currentUser.data.role=='Admin'? <DeleteIcon sx={{color:'red',position:'relative',cursor:'pointer'}} onClick={()=>ViewDelete(data)}/>:null}</TD>
                    </TR> 
                        
                    
                    )

                    :null
                }
            </Table>
           
        </Wrapper>
    </>
  )
}
