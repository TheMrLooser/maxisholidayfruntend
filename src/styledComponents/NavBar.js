import styled from 'styled-components';

export const Container = styled.div`
width:100%;
min-height:50px;
display:flex;
align-items:center;
justify-content:center;
background-color:#fbb03b;
${'' /* overflow:auto; */}
`
export const Wrapper = styled.div`
width:100%;
max-width:98%;
display:flex;
justify-content:space-between;
align-items:center;

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


`
export const DropdownElement = styled.div`
width:100%;
font-size:16px;
background-color:black;
color:white;
height:30px;
border-radius:5px;
padding:0px 5px;
&:hover{
    background-color: #fbb03b;
    cursor:pointer;
}

`
export const Account = styled.div`
font-size:20px;
font-weight:600;
background-color:white;
border-radius:5px;
padding:2px 10px;
color:darkred
`
