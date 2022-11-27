import React, { useEffect, useState } from 'react'
import { ClientDetailWrapper, Search, SearchBTN, SearchContainer, SearchWrapper, Table, TD, TH, TR, Wrapper } from '../styledComponents/SeeAllClient'
import { Input } from '../styledComponents/Login';
import axios from 'axios';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Loader from '../loder/loder';
import {HOST_NAME} from '../AWS_server_IP'



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

export const ViewHolidayRequest = () => {
    const [searchText,setSearchtext] = useState("")
    const [requests,setRequests] = useState("")
    const [requestStatus,setRequestStatus] = useState("Pending")
    useEffect(()=>{
        var fetchAllClient = async()=>{
            const res = await axios.get(`${HOST_NAME}/holidays/get-all-request/${requestStatus}`)
            
            setRequests(filterdata(res.data,searchText))
        }
        fetchAllClient()
    },[searchText])


    const [openMarker,setOpenMarker] = useState(false);
    const [Index,setIndex] = useState(null)
    const controleMarker = (index)=>{
        setIndex(index)
        if(openMarker){
            setOpenMarker(false)
        }else{
            setOpenMarker(true)
        }
    }


    const MarkDone = async(data)=>{
        const status = 'Done';
        const id = data._id
       const res =  await axios.put(`${HOST_NAME}/holidays/update-request`,{status,id});
       console.log(res.data)
        window.location.reload(true)
    }

  return (
    <>
        <Wrapper>
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
                    <TH>ClientId</TH>
                    <TH>Name</TH>
                    <TH>No Of Adults</TH>
                    <TH>No Of Childs</TH>
                    <TH>Check In</TH> 
                    <TH>Check Out</TH>
                    <TH>Location</TH>
                    <TH>Date</TH>
                    <TH>Status</TH>
                </TR>
                {requests ? "":<div style={{width:'99%',height:'50px',display:'flex',alignItems:'center',justifyContent:'center',position:'absolute'}}><Loader/></div>}
                
                {
                    requests ? requests.map((data,index) => 
                   
                    <TR key={index}>
                        <TD><div><MoreHorizIcon onClick={()=>controleMarker(index)} style={{cursor:'pointer',position:'relative'}} />{ (openMarker && index===Index) ?  <div className='green' onClick={()=>MarkDone(data)}>Mark Done</div> : null}</div></TD>
                        <TD>{index}</TD>
                        <TD>{data.clientId}</TD>
                        <TD>{data.name}</TD>
                        <TD>{data.noOfAdults}</TD>
                        <TD>{data.noOfChilds}</TD>
                        <TD>{data.checkIn}</TD>
                        <TD>{data.checkOut}</TD>
                        <TD>{data.city}</TD>
                        <TD>{data.requestDate}</TD>
                        <TD style={data.status==="Pending" ? {color:'red'}:{color:'green'}}>{data.status}</TD>
                    </TR>
                        
                    
                    )

                    :null
                }
            </Table>
        </Wrapper>
    </>
  )
}
