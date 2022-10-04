import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ClientDetailWrapper, Search, SearchBTN, SearchContainer, SearchWrapper, Table, TD, TH, TR, Wrapper } from '../styledComponents/SeeAllClient'
import DeleteIcon from '@mui/icons-material/Delete';
import { ClientDetail } from './ClientDetail';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Heading } from '../styledComponents/MakeEntry';
import { UpdateClient } from './UpdateClient';
import { Input } from '../styledComponents/Login';






 
 
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
            const res = await axios.get('https://maxis-holiday.herokuapp.com/employee/get-all-employee')
            
            setClients(filterdata(res.data,searchText))
        }
        fetchAllClient()
    },[searchText])

    const ViewDetail = (data)=>{

        setData(data)
        setOpenDetailPart(true)
    }
    const DeleteEmployee = async()=>{
         const employeeId = data.employeeId
         axios.defaults.withCredentials = true
        const res =  await axios.delete(`https://maxis-holiday.herokuapp.com/employee/delete-employee/${employeeId}`)
         window.location.reload(true)
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
