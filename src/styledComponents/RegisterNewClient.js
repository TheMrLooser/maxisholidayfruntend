import styled from "styled-components";

export const Wrapper = styled.form`
width:100%;
max-width:80%;
display:flex;
align-items:center;
justify-content:center; 
flex-direction:column;
min-height:70vh;
gap:20px;
border-radius:5px;
/* background:#001916; */
padding-bottom:50px;
padding-top:50px;

`
export const TextArea = styled.textarea`
width:100%;
max-width:90%;
height:40px;
padding-left:10px;
border-radius:5px;
font-size:16px;
&:focus{
    outline-color:#E8604C
}
`