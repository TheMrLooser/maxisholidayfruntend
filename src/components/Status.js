import React from 'react'
import styled from 'styled-components';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


const Container = styled.div`
width:max-content;
color:white;
padding:10px;
background-color:${(props)=>props.error?'red':'green'};
border-radius:3px;
`

const ElementContainer = styled.div`
width:100%;
max-width:95%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center
`
const Element = styled.div`
color:white
`

 
export const Status = ({ status, Message}) => {
    const fail = "fail"
  return (
    
    <>
        {
            status==="fail" ? 
            <Container error={fail}>
            {Message}
            </Container>
            :
            <Container>
            {Message}
            </Container>
        }
    </>
  )
}
export const Status_2 = ({ status, Message,errorMessage}) => {
    const fail = "fail"
  return (
    
    <>
        {
            status==="fail" ? 
            <Container error={fail}>
              <ElementContainer>
                {errorMessage}
              </ElementContainer>

            </Container>
            :
            <Container>
              <Element>Booking Done <CheckCircleIcon sx={{position:'relative',color:'green'}}/></Element>
                <Element>Your userId  : {Message.clientId }{ Message.EmployeeId}</Element>
                <Element>Your password: {Message.password}</Element>
               { Message.totalAllowedDays ? <>
                <Element>Total No. Of Days: {Message.totalAllowedDays}</Element>
                <Element>Total No. Of Nights: {Message.totalAllowedNights}</Element> 
               </>: null}
            </Container>
        }
    </>
  )
}

