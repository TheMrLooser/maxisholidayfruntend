import styled from "styled-components";

export const Wrapper = styled.div`
width:100%;
overflow:auto;
`
export const Table = styled.table`
font-family: arial, sans-serif;
border-collapse: collapse;
width: 100%;
background-color:white;
`
export const TR = styled.tr`
    
`
export const TH = styled.th`
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
    color:#524855
`
export const TD = styled.td`
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
    color:black;
    position:relative;
    
`

export const ClientDetailWrapper = styled.div`
background:black;
width:95%;
padding-left:20px;
padding-right:20px;
padding-bottom:50px;
border-radius:5px;
min-height:90vh;
top:10px;
position:relative;
display:flex;
flex-direction:column;
align-items:center;
z-index:100;

`

export const SearchContainer = styled.div`
width:100%;
height:100px;
${'' /* border:1px solid red; */}
display:flex;
align-items:center
`

export const SearchWrapper = styled.div`
width:100%;
max-width:40%;
display:flex;
gap:20px;
@media only screen and (max-width:700px){
    max-width:100%
}
`
export const Search = styled.input`

`
export const SearchBTN = styled.button`
width:100%;
max-width:100px;
border-radius:5px;
font-size:20px;
font-weight:600;
background-color:#E8604C;
border: none;
color:white;
cursor:pointer;
transition: background-color 1s;
&:hover{
background-color:#524855;

}
`
