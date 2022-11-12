import styled from "styled-components";


export const Container = styled.div`
width:100%;
min-height:100vh;
display:flex;
align-items:center;
justify-content:center;
/* background-image:url("https://tse1.mm.bing.net/th?id=OIP.GldWXhqPKyveuJlyMxCugQHaEK&pid=Api&P=0"); */
background-image:url("http://hdqwalls.com/wallpapers/amazing-beautiful-places.jpg");
background-repeat: no-repeat;
background-size: cover;

`
export const Wrapper = styled.div`
 width:100%;
 max-width:450px;
 min-height:60vh;
 border-radius:10px;
 background:#ffffffe0;
 /* box-shadow:2px 2px 5px #ffffff5e; */
display:flex;
align-items:center;
flex-direction:column;
gap:20px;
padding-bottom:20px;

`

export const Title = styled.div`
width:100%;
display:flex;
align-items:center;
justify-content:center;
font-size:30px;
/* color:#FBB03B */
color:#4A4958

`
export const Input = styled.input`
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

export const InputWrapper = styled.div`
font-size:18px;
/* color:#FBB03B; */
color:#4A4958;
width:100%;
max-width:90%;
`
export const Button = styled.button`
width:100%;
max-width:fit-content;
height:40px;
padding:20px;
border-radius:5px;
border:none;
background-color:#E8604C;
font-size:20px;
font-family: Verdana, Geneva, Tahoma, sans-serif;
letter-spacing: 2px;
color:white;
display:flex;
align-items:center;
justify-content:center;
transition: background 1s , color 1s, max-width 0.5s , padding 0.5s;
&:hover{
    cursor: pointer;
    /* padding:25px; */
    ${'' /* height:45px; */}
    background-color:#524855;
}
`