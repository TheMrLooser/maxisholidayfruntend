import styled from 'styled-components';

export const Container = styled.div`
width:100%;
min-height:50px;
display:flex;
align-items:center;
justify-content:center;
/* background-color:#fbb03b; */
background-color:white;
${'' /* overflow:auto; */}
box-shadow: 10px 1px 10px #00000057;
`
export const Wrapper = styled.div`
width:100%;
max-width:98%;
display:flex;
justify-content:space-between;
align-items:center;
padding: 10px 0px;
`
export const Logo = styled.img`

`
export const ElementWrapper = styled.div`
width:90%;
max-width:fit-content;
align-items:center;
display:flex;
gap:20px
`
export const Element = styled.div`
position:relative;
display:flex;
align-items:center;
cursor:pointer;
font-size: 18px;
&:hover{
    color: #E8604C
}
`

export const DropdownContainer = styled.div`
position:absolute;
top:25px;
right:20px;
min-width:200px;
padding:5px;
border-radius:5px;
display:flex;
flex-wrap:wrap;
gap:10px;
background-color:white;
border-top: 1px solid black;


`
export const DropdownElement = styled.div`
width:100%;
font-size:16px;
/* background-color:black; */
color:black;
height:30px;
border-radius:5px;
padding:0px 5px;
&:hover{
    /* background-color: #fbb03b; */
    cursor:pointer;
    color: #E8604C;
}

`
export const Account = styled.div`
font-size:20px;
font-weight:600;
background-color:#E8604C;
border-radius:5px;
padding:2px 10px;
color:white
`
