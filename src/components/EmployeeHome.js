import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from '../pages/Login'
import { Contaienr, Wrapper } from '../styledComponents/EmployeeHome'
import { DownloadInvoice } from './DownloadInvoice'
import { DueAmount } from './DueAmount'
import { MakeEntry } from './MakeEntry'
import { NavBar } from './NavBar'
import { RegisterNewClient } from './RegisterNewClient'
import { RegisterNewEmployee } from './RegisterNewEmployee'
import { SeeAllClient } from './SeeAllClient'
import { SeeAllEmployee } from './SeeAllEmployee'
import { SendMail } from './SendMail'
import { Statistics } from './Statistics'
import { ViewHolidayRequest } from './ViewHolidayRequest'

export const EmployeeHome = () => {
  return (
    <>
        <Contaienr>
            <NavBar/>
            <Wrapper> 
                <Routes>
                    <Route path='/' element={<MakeEntry/>}/>
                    <Route path='/register-new-client' element={<RegisterNewClient/>}/>
                    <Route path='/see-all-client' element={<SeeAllClient/>}/>
                    <Route path='/see-all-request' element={<ViewHolidayRequest/>}/>
                    <Route path='/register-new-employee' element={<RegisterNewEmployee/>}/>
                    <Route path='/see-all-employee' element={<SeeAllEmployee/>}/>
                    <Route path='/send-email' element={<SendMail/>}/>
                    <Route path='/dueamount' element={<DueAmount/>}/>
                    <Route path='/statistics' element={<Statistics/>}/>
                    <Route path='/login' element={<Login/>}/>
                </Routes>

                
            </Wrapper>
        </Contaienr>
    </>
  )
}
