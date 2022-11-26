import React from 'react'
import {useSelector} from 'react-redux'
import { BodyContainer, BodyWrapper, Container, Element, ElementWrapper, Header, Heading, Logo, NavContainer, NavElement, Title, UserName, Wrapper } from '../styledComponents/ClientHome'
import PersonIcon from '@mui/icons-material/Person';
import { ClientDetail } from './ClientDetail';
import {Route,Routes,Link} from 'react-router-dom'
import { HolidaysTaken } from './HolidaysTaken';
import { RequestHoliday } from './RequestHoliday';
import { DownloadInvoice } from './DownloadInvoice';
import axios from 'axios'; 


export const ClientHome = () => {
    const {loading, error,currentUser} = useSelector(state=>state.currentUser)
    const user = currentUser.data ? currentUser.data : null
    
    const LogOut = async()=>{
      const res =   await axios.get('https://maxis-holiday.herokuapp.com/client/logout')
        console.log(res.data)
        window.location.reload(true)
    }

  return (
     <>
        <Container>
        
        <Wrapper>
        <Header>
        
            <Logo><PersonIcon sx={{position: 'relative',fontSize:'50px' , color:'red'}}/> </Logo>
            <UserName>{user.name}</UserName> 
            <NavContainer>
             <Link to={'/'} className="Link"><NavElement>Details</NavElement></Link>
              <Link to={'/holidays-taken'} className="Link"> <NavElement>Holidays</NavElement></Link>
               <Link to={'/holiday-request'} className="Link"><NavElement>Request for Holiday</NavElement></Link> 
                <Link to={'/invoice'} className="Link"><NavElement>Download Invoice</NavElement></Link>
                 <NavElement style={{color:'red' ,cursor:'pointer'}} onClick={LogOut} >Logout</NavElement> 
            </NavContainer>
        </Header>
           
            <Routes>
                <Route path='/' element={<ClientDetail/>}/>
                <Route path='/holidays-taken' element={<HolidaysTaken currentUser={user}/>}/>
                <Route path='/invoice' element={<DownloadInvoice data={user}/>}/>
                <Route path='/holiday-request' element={<RequestHoliday currentUser={user}/>}/>
            </Routes>

        </Wrapper>
        </Container>
     </>
  )
}
