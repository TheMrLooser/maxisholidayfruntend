import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Account, Container, DropdownContainer, DropdownElement, Element, ElementWrapper, Logo, Wrapper } from '../styledComponents/NavBar'
import {Link, useNavigate} from 'react-router-dom';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import axios from 'axios'

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

    const navigate = useNavigate()
    const LogOut = async()=>{
        await axios.get('https://maxis-holiday.herokuapp.com/client/logout')
        navigate('/login')
        // window.location.reload(true)
    }

    const [requests,setRequest] = useState(0);
    useEffect(()=>{
        const fetchAllRequests = async()=>{
            const res = await axios.get('https://maxis-holiday.herokuapp.com/holidays/get-all-request/Pending')
             setRequest(res.data.length)
        }
        fetchAllRequests()
    },[])

  return (
     <>
        <Container>
            <Wrapper> 
                <Logo src='https://maxisholidays.in/wp-content/uploads/2022/07/WhatsApp-Image-2022-07-24-at-10.41.01-AM-1.jpeg' width={'10%'} height={'10%'}/>
                <ElementWrapper>
                    {
                        user.role ==="Admin" ? 
                        <Element>
                        <Element onClick={ControleDropDown_2}>Manage Employee <ExpandCircleDownIcon sx={{fontSize:'16px'}}/></Element>
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
                        <Element onClick={ControleDropDown}>Section <ExpandCircleDownIcon sx={{fontSize:'16px'}}/></Element>
                       {
                        openDropDown ? <>
                        <DropdownContainer>
                            {/* <DropdownElement onClick={ControleDropDown}>Generate Invoice</DropdownElement> */}
                           <Link to={'/dueamount'} className='Link'> <DropdownElement onClick={ControleDropDown}>Due Amount Report</DropdownElement></Link>
                            {/* <DropdownElement onClick={ControleDropDown}>Invoice Report</DropdownElement> */}
                            <Link to={'/see-all-request'} className='Link'><DropdownElement  onClick={ControleDropDown}>Holiday Requests ({requests})</DropdownElement></Link>
                        </DropdownContainer>
                        </>
                        :null
                       }
                    </Element>
                    <Element onClick={LogOut}>LogOut</Element>
                    <Account>{user.name}</Account>
                </ElementWrapper>
            </Wrapper>
        </Container>
     </>
  )
}
