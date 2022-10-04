import React, { useRef } from 'react'
import { AditionalDetailContainer, AditionalDetailHeading, AditionalDetailText, BasicDetailContainer, CorporateAddressContainer, CorporateAddressText, DetailContainer, Element, ElementWrapper, HeaderWrapper, LeftDetailContainer, Logo, PaymentDetailContainer, PaymentDetailHeading, RightDetailContainer, Title, } from '../styledComponents/DownloadInvoice'
import { Button } from '../styledComponents/Login'
import { ClientDetailWrapper, Table, TD, TH, TR, Wrapper } from '../styledComponents/SeeAllClient'
import html2pdf from 'html2pdf.js'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useSelector } from 'react-redux'


export const DownloadInvoice = ({data , setDownloadPart}) => {
    const componentRef = useRef()
    const todaysDate = `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`
    const {currentUser} = useSelector(state=>state.currentUser)
    const download = ()=>{
        const invoice = componentRef.current
        const option = {
            // margin: 1,
            filename:'Invoice Report',
            // html2canvas:{scale:2},
            // jspdf:{unit:'in',format:'letter',orientation: 'portrait'}
        }
        html2pdf().from(invoice).set(option).save();
    }

  return (
     <>
        <ClientDetailWrapper style={{backgroundColor:'white'}}>
       {currentUser.data.role === "Client" ? null : <HighlightOffIcon sx={{color:'red',fontSize:'40px',position:'absolute',right:'30px',top:'10px',cursor:'pointer' ,backgroundColor:'black'}} onClick={()=>setDownloadPart(false)}/>}

            <Button onClick={download} style={{marginTop:'10px'}} >Download Invoice</Button>
            <Wrapper style={{backgroundColor:'white',padding:'20px',maxWidth:'95%'}} ref={componentRef}>
                <HeaderWrapper>
                    <Logo src='https://maxisholidays.in/wp-content/uploads/2022/07/WhatsApp-Image-2022-07-24-at-10.41.01-AM-1.jpeg'  width={'20%'} height={'20%'}/>
                    <DetailContainer>
                        <ElementWrapper><Title>Invoice No. : </Title><Element>{data.clientId}</Element></ElementWrapper>
                        <ElementWrapper><Title>Date : </Title><Element>{todaysDate}</Element></ElementWrapper>
                    </DetailContainer>
                </HeaderWrapper>

                <BasicDetailContainer>
                    <LeftDetailContainer>
                        <ElementWrapper><Title>Name :</Title> <Element>{data.name}</Element></ElementWrapper>
                        <ElementWrapper><Title>Email :</Title> <Element>{data.email}</Element></ElementWrapper>
                        <ElementWrapper><Title>ClientId :</Title> <Element>{data.clientId}</Element></ElementWrapper>
                        <ElementWrapper><Title>Phone number :</Title> <Element>{data.phone}</Element></ElementWrapper>
                        <ElementWrapper><Title>Address :</Title> <Element>{data.address}</Element></ElementWrapper>
                        <ElementWrapper><Title>Paid Ammount :</Title> <Element>{data.paidAmount}</Element></ElementWrapper>
                        <ElementWrapper><Title>AMC :</Title> <Element>{data.AMC}</Element></ElementWrapper>
             
                    </LeftDetailContainer>
                    <RightDetailContainer>
                        <ElementWrapper><Title>Membership Type :</Title> <Element>{data.membershipType}</Element></ElementWrapper>
                        <ElementWrapper><Title>Total Days :</Title> <Element>{data.totalAllowedDays}</Element></ElementWrapper>
                        <ElementWrapper><Title>Total Night :</Title> <Element>{data.totalAllowedNights}</Element></ElementWrapper>
                        <ElementWrapper><Title>Balance Days :</Title> <Element>{data.balanceDays}</Element></ElementWrapper>
                        <ElementWrapper><Title>Balance Night :</Title> <Element>{data.balanceNight}</Element></ElementWrapper>
                        <ElementWrapper><Title>Net Amount :</Title> <Element>{data.netAmount}</Element></ElementWrapper>
                        <ElementWrapper><Title>Balance Amount :</Title> <Element>{data.balanceAmount}</Element></ElementWrapper>
                    </RightDetailContainer>
                </BasicDetailContainer>
                <PaymentDetailContainer>
                    <PaymentDetailHeading>Payment Details</PaymentDetailHeading>
                    <BasicDetailContainer>
                         
                        <LeftDetailContainer>
                            <Table>
                                <TR>
                                    <TH>SN</TH>
                                    <TH>Date</TH>
                                    <TH>Amount</TH>
                                </TR>
                                 
                                {data?data.usingHolidayPackage.map((data,index)=>
                                    <TR>
                                        <TD>{index}</TD>
                                        <TD>{data.BookingDate}</TD>
                                        <TD>₹ {(data.OneDayPrice)*(parseInt(data.Days)+parseInt(data.Nights))} </TD>
                                    </TR>
                                ):null}
                            </Table>
                        </LeftDetailContainer>
                    </BasicDetailContainer>
                </PaymentDetailContainer>
                <AditionalDetailContainer>
                    <AditionalDetailHeading>Aditional Details</AditionalDetailHeading>
                    <AditionalDetailText>
                        <Title>AditionalDetailContainer</Title>
                        <Title>AditionalDetailContainer</Title>
                        <Title>AditionalDetailContainer</Title>
                    </AditionalDetailText>
                </AditionalDetailContainer>

                <CorporateAddressContainer>
                    <AditionalDetailHeading>Corporate Address</AditionalDetailHeading>
                    <CorporateAddressText>
                        <div>html2pdf depends on the external packages html2canvas, jsPDF, and es6-promise. These</div>
                    </CorporateAddressText>
                </CorporateAddressContainer>
            </Wrapper>
        </ClientDetailWrapper>
     </>
  )
}