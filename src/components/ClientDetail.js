import React from 'react'
import {useSelector} from 'react-redux'
import { BodyContainer, BodyWrapper, Container, Element, ElementWrapper, Header, Heading, Logo, NavContainer, NavElement, Title, UserName, Wrapper } from '../styledComponents/ClientHome'
import Loader from '../loder/loder'
import PersonIcon from '@mui/icons-material/Person';

export const ClientDetail = ({data}) => {
    const {loading, error,currentUser} = useSelector(state=>state.currentUser)
    const user = currentUser.data.role=="Client" ? currentUser.data : data?data : null
  return (
    <>
         <BodyContainer>
                <Heading>Basic Detail</Heading>
                <BodyWrapper>
                    <ElementWrapper><Title>Membership ID :</Title><Element>{user.clientId}</Element></ElementWrapper>
                    <ElementWrapper><Title>Name :</Title><Element>{user.name}</Element></ElementWrapper>
                    <ElementWrapper><Title>Email :</Title><Element>{user.email}</Element></ElementWrapper>
                    <ElementWrapper><Title>Phone :</Title><Element>{user.phone}</Element></ElementWrapper>
                    <ElementWrapper><Title>Gender :</Title><Element>{user.gender}</Element></ElementWrapper>
                    <ElementWrapper><Title>DOB :</Title><Element>{user.DOB}</Element></ElementWrapper>
                    <ElementWrapper><Title>Membership city :</Title><Element>{user.city}</Element></ElementWrapper>
                    <ElementWrapper><Title>Address :</Title><Element>{user.address}</Element></ElementWrapper>
                </BodyWrapper>
            </BodyContainer>

            <BodyContainer>
                <Heading>Family Detail</Heading>
                <BodyWrapper>
                    <ElementWrapper><Title>Father's Name :</Title><Element>{user.fathersName}</Element></ElementWrapper>
                    <ElementWrapper><Title>Mother's Name :</Title><Element>{user.mothersName}</Element></ElementWrapper>
                    <ElementWrapper><Title>Marraige Annivarsary :</Title><Element>{user.marriageAnniversaryDate}</Element></ElementWrapper>
                    <ElementWrapper><Title>Spouse :</Title><Element>{user.spouseName}</Element></ElementWrapper>
                    <ElementWrapper><Title>Spouse DOB:</Title><Element>{user.spouseDOB}</Element></ElementWrapper>
                    <ElementWrapper><Title>First Child Name :</Title><Element>{user.firstChildName}</Element></ElementWrapper>
                    <ElementWrapper><Title>First Child DOB :</Title><Element>{user.firstChildDOB}</Element></ElementWrapper>
                    <ElementWrapper><Title>Second Child Name :</Title><Element>{user.secondChildName}</Element></ElementWrapper>
                    <ElementWrapper><Title>Second Child DOB :</Title><Element>{user.secondChildDOB}</Element></ElementWrapper>
                    <ElementWrapper><Title>Third Child Name :</Title><Element>{user.thirdChildName}</Element></ElementWrapper>
                    <ElementWrapper><Title>Third Child DOB :</Title><Element>{user.thirdChildDOB}</Element></ElementWrapper>
          
                </BodyWrapper>

                <BodyContainer>
                <Heading>Membership Detail</Heading>
                <BodyWrapper>
                    <ElementWrapper><Title>Membership Year :</Title><Element>{user.membershipYear}</Element></ElementWrapper>
                    <ElementWrapper><Title>Membership Type :</Title><Element>{user.membershipType}</Element></ElementWrapper>
                    <ElementWrapper><Title>Joining Date :</Title><Element>{user.dateOfJoining}</Element></ElementWrapper>
                    <ElementWrapper><Title>Total Offered Days :</Title><Element>{user.totalAllowedDays}</Element></ElementWrapper>
                    <ElementWrapper><Title>Total Offered Nights:</Title><Element>{user.totalAllowedNights}</Element></ElementWrapper>
                    <ElementWrapper><Title>Used Days :</Title><Element style={{color:'red'}}>{user.usedDays}</Element></ElementWrapper>
                    <ElementWrapper><Title>Used Night :</Title><Element style={{color:'red'}}> {user.usedNight}</Element></ElementWrapper>
                    <ElementWrapper><Title>Balance Days :</Title><Element style={{color:'green'}}>{user.balanceDays}</Element></ElementWrapper>
                    <ElementWrapper><Title>Balance Nights :</Title><Element style={{color:'green'}}>{user.balanceNight}</Element></ElementWrapper>
                    <ElementWrapper><Title>AMC :</Title><Element>{user.AMC}</Element></ElementWrapper>
                    <ElementWrapper><Title>AMC Status:</Title><Element>{user.AMCStatus}</Element></ElementWrapper>
                    <ElementWrapper><Title>Membership Amount :</Title><Element>{user.netAmount}</Element></ElementWrapper>
                    <ElementWrapper><Title>Paid Amount :</Title><Element style={{color:'red'}}>{user.paidAmount}</Element></ElementWrapper>
                    <ElementWrapper><Title>Balance Amount :</Title><Element style={{color:'green'}}>{user.balanceAmount}</Element></ElementWrapper>
                </BodyWrapper>
            </BodyContainer>
            </BodyContainer>
    </>
  )
}
