import styled from "styled-components";

export const Container = styled.div`
width:100%;
height:100vh;
display:flex;
justify-content:center;
position:relative
`
export const Wrapper = styled.div`
width:100%;
max-width:50%;
${'' /* border:1px solid red; */}
display:flex;
${'' /* justify-content:center; */}
align-items:center;
flex-direction:column;
gap:30px;
`
export const ElementWrapper = styled.div`
${'' /* border:1px solid red; */}
width:100%;
max-width:80%;
`

export const Notify = styled.div`
width:100%;
max-width:fit-content;
padding:10px;
background-color:green;
color:white;
font-size:18px;
border-radius:3px;

`
