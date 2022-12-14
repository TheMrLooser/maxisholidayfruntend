import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Account, Container, DropdownContainer, DropdownElement, Element, ElementWrapper, Logo, Wrapper } from '../styledComponents/NavBar'
import {Link, useNavigate} from 'react-router-dom';
// import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import axios from 'axios'
import logoImgPng from '../images/maxisLogo.png'
import {HOST_NAME} from '../AWS_server_IP'

export const NavBar = () => {
    const {loading , error , currentUser} = useSelector(state=>state.currentUser)
    const user = currentUser.data? currentUser.data:null
    const [openDropDown,setOpenDropDown] = useState(false)
    const [openDropDown_2,setOpenDropDown_2] = useState(false)

    const ControleDropDown = ()=>{
        if(openDropDown){
            setOpenDropDown(false)
        }
        else{
            setOpenDropDown(true)
        }
    }
    const ControleDropDown_2 = ()=>{
        if(openDropDown_2){
            setOpenDropDown_2(false)
        }
        else{
            setOpenDropDown_2(true)

        }
    }

    const LogOut = async()=>{
        await axios.get(`${HOST_NAME}/client/logout`)
        window.location.reload(true)
    }

    const [requests,setRequest] = useState(0);
    useEffect(()=>{
        const fetchAllRequests = async()=>{
            const res = await axios.get(`${HOST_NAME}/holidays/get-all-request/Pending`)
             setRequest(res.data.length)
        }
        fetchAllRequests()
    },[])

  return (
     <>
        <Container>
            <Wrapper> 
                <Link to={'/'} className="Link" style={{width:'10%',height:'10%'}}><Logo src= {logoImgPng} width={'100%'} height={'100%'}/></Link>
                <ElementWrapper>
                    {
                        user.role ==="Admin" ? 
                        <Element>
                        <Element onClick={ControleDropDown_2}>Manage Employee {openDropDown_2 ? <ExpandLessIcon sx={{fontSize:'20px'}}/> :<ExpandMoreIcon sx={{fontSize:'20px'}}/> }</Element>
                        {
                            openDropDown_2 ? <>
                            <DropdownContainer>
                               <Link to={'/register-new-employee'} className="Link"><DropdownElement  onClick={ControleDropDown_2}>Create New Employee</DropdownElement></Link> 
                               <Link to={'/see-all-employee'}  className="Link"> <DropdownElement  onClick={ControleDropDown_2}>See All Employee</DropdownElement></Link>
                               <Link to={'/Statistics'} className="Link"> <DropdownElement  onClick={ControleDropDown_2}>Statistics</DropdownElement></Link>
                            </DropdownContainer>
                            </>
                            :null
                        }
                    </Element>
                    :null
                    }
                    <Link className='Link' to={'/'}><Element>Make Entry</Element></Link>
                    <Link className='Link' to={'/register-new-client'}><Element>Register new client</Element></Link>
                    <Link className='Link' to={'/see-all-client'}><Element>See all client</Element></Link>
                    <Element>
                        <Element onClick={ControleDropDown}>Section{openDropDown ? <ExpandLessIcon sx={{fontSize:'20px'}}/> :<ExpandMoreIcon sx={{fontSize:'20px'}}/> }</Element>
                       {
                        openDropDown ? <>
                        <DropdownContainer>
                           <Link to={'/dueamount'} className='Link'> <DropdownElement onClick={ControleDropDown}>Due Amount Report</DropdownElement></Link>
                            <Link to={'/see-all-request'} className='Link'><DropdownElement  onClick={ControleDropDown}>Holiday Requests ({requests})</DropdownElement></Link>
                            <Link to={'/due-amc'} className='Link'><DropdownElement  onClick={ControleDropDown}>Due AMC</DropdownElement></Link>
                        </DropdownContainer>
                        </>
                        :null
                       }
                    </Element>
                    <Element onClick={LogOut}>LogOut</Element>
                    <Account>{user.role}</Account>
                </ElementWrapper>
            </Wrapper>
        </Container>
     </>
  )
}
