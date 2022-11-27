import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ClientDetailWrapper, Search, SearchBTN, SearchContainer, SearchWrapper, Table, TD, TH, TR, Wrapper } from '../styledComponents/SeeAllClient'
import DeleteIcon from '@mui/icons-material/Delete';
import { ClientDetail } from './ClientDetail';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Heading } from '../styledComponents/MakeEntry';
import { UpdateClient } from './UpdateClient';
import { Input } from '../styledComponents/Login';
import Loader from '../loder/loder';
import {HOST_NAME} from '../AWS_server_IP'






 
 
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



export const SeeAllEmployee = () => {
    const [Clients,setClients]  = useState(null)
    const [data,setData] = useState(null) 
    const [openDetailPart,setOpenDetailPart] = useState(false) 
    const [openUpdatePart,setOpeUpdatelPart] = useState(false) 
    const [searchText,setSearchtext] = useState("")
    useEffect(()=>{
        var fetchAllClient = async()=>{
            const res = await axios.get(`${HOST_NAME}/employee/get-all-employee`)
            
            setClients(filterdata(res.data,searchText))
        }
        fetchAllClient()
    },[searchText])

    var fetchAllClient = async()=>{
        const res = await axios.get(`${HOST_NAME}/employee/get-all-employee`)
        
        setClients(filterdata(res.data,searchText))
    }

    const ViewDetail = (data)=>{

        setData(data)
        setOpenDetailPart(true)
    }
    const DeleteEmployee = async()=>{
         const employeeId = data.employeeId
         axios.defaults.withCredentials = true
        await axios.delete(`${HOST_NAME}/employee/delete-employee/${employeeId}`)
        fetchAllClient()
        setOpenDetailPart(false)

    }

 

  return (
    <>
        <Wrapper>
            { openDetailPart ?
            <div className='deleteContainer'>
                <div className='deleteWrapper'>
                    <HighlightOffIcon sx={{color:'red',fontSize:'40px',position:'absolute',right:'30px',top:'10px',cursor:'pointer'}} onClick={()=>setOpenDetailPart(false)}/>
                    <Heading>Delete Employee</Heading>
                    <div><span className='delete' onClick={DeleteEmployee}>Delete</span> <span onClick={()=>setOpenDetailPart(false)}>Cancel</span></div>
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
                    <TH>SN</TH>
                    <TH>EmployeeId</TH>
                    <TH>Name</TH>
                    <TH>Email</TH>
                    <TH>Gender</TH>
                    <TH>Phone</TH>
                    <TH>Address</TH>
                    <TH>Action</TH>
                </TR>
                {Clients ? "":<div style={{width:'99%',height:'50px',display:'flex',alignItems:'center',justifyContent:'center',position:'absolute'}}><Loader/></div>}

                {
                    Clients ? Clients.map((data,index) => 
                    
                    <TR key={index}>
                        <TD>{index}</TD>
                        <TD>{data.employeeId}</TD>
                        <TD>{data.name}</TD>
                        <TD>{data.email}</TD>
                        <TD>{data.gender}</TD>
                        <TD>{data.phone}</TD>
                        <TD>{data.address}</TD>
                        <TD><DeleteIcon sx={{color:'red',position:'relative',cursor:'pointer'}} onClick={()=>ViewDetail(data)} /></TD>
                    </TR>
                        
                    
                    )

                    :null
                }
            </Table>

        </Wrapper>
    </>
  )
}
