import styled from "styled-components";

export const Container = styled.div`
width:100%;
border:1px solid red;
display:flex;
align-items:center;
justify-content:center;
background-color:white;
`
export const Wrapper = styled.div`
width:100%;
max-width:80%;
${'' /* border:1px solid green; */}
background-color:white;
`
export const HeaderWrapper = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
padding:30px 0px;
border-bottom: 3px solid black;
`
export const Logo = styled.img`

`
export const DetailContainer = styled.div`
display:flex;
align-items:flex-end;
justify-content:center;
flex-direction:column;
`
export const ElementWrapper = styled.div`
display:flex;
align-items:center;
font-size:18px;
gap:10px;
`
export const Title = styled.div`
font-weight:600


`
export const Element = styled.div`

`
export const BasicDetailContainer = styled.div`
display:flex;
${'' /* flex-wrap:wrap; */}
justify-content:space-between;
gap:10px;
padding:20px 0px;
width:100%;
${'' /* border:1px solid red; */}
`
export const LeftDetailContainer = styled.div`
display:flex;
flex-wrap:wrap;
flex-direction:column;
gap:10px;
width:100%;
`
export const RightDetailContainer = styled.div`
display:flex;
flex-wrap:wrap;
flex-direction:column;
${'' /* align-items:flex-end; */}
gap:10px;
`

export const PaymentDetailHeading = styled.div`
width:100%;
width:70%;
display:flex;
justify-content:center;
align-items:center;
font-size:20px;
background-color:#fbb03b;
border-radius:3px;
color:white;
font-weight:600;
`
export const PaymentDetailContainer = styled.div`
width:100%;
${'' /* border:1px solid red; */}
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
export const AditionalDetailContainer = styled.div`
width:100%;
${'' /* border:1px solid red; */}
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding:20px 0px;
`
export const AditionalDetailHeading = styled.div`
width:100%;
font-size:20px;
border-top:3px solid black;
display:flex;
justify-content:center;
align-items:center;
font-weight:600;
`
export const AditionalDetailText = styled.div`
width:100%;
`
export const CorporateAddressContainer = styled.div`

`
export const CorporateAddressHeading = styled.div`

`
export const CorporateAddressText = styled.div`
width:100%;
max-width:100%;
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
gap:10px;
`