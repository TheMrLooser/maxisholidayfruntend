import React from 'react'
import { Element, ElementWrapper } from '../styledComponents/HolidaysTaken'
import { Table, TD, TH, TR, } from '../styledComponents/SeeAllClient'

export const HolidaysTaken = ({currentUser}) => {

  return (
     <>
        <ElementWrapper>
        <Table>
                <TR>
                    <TH>SN</TH>
                    <TH>City</TH>
                    <TH>CheckIn</TH>
                    <TH>CheckOut</TH>
                    <TH>Booking Date</TH>
                    <TH>One Day Price</TH>
                    <TH>Remark</TH>
                </TR>
               {
                  currentUser.usingHolidayPackage?.map((data,index)=>
                  <>
                  <TR>
                    <TD>{index}</TD>
                    <TD>{data.City}</TD>
                    <TD>{data.CheckIn}</TD>
                    <TD>{data.CheckOut}</TD>
                    <TD>{data.BookingDate}</TD>
                    <TD>{data.OneDayPrice}</TD>
                    <TD>{data.Remark}</TD>
                </TR>
                  </>)
               }

                 
            </Table>
        </ElementWrapper>
     </>
  )
}
