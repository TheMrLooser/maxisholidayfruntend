import styled from 'styled-components';

export const Container = styled.div`
width:100%;
min-height:100vh;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
/* background-image:url("https://tse1.mm.bing.net/th?id=OIP.GldWXhqPKyveuJlyMxCugQHaEK&pid=Api&P=0"); */
background-image:url("http://hdqwalls.com/wallpapers/amazing-beautiful-places.jpg");

background-repeat: no-repeat;
background-size: cover;
padding-top:50px;
`

export const Wrapper = styled.div`
width:100%;
max-width:90%;
min-height:90vh;
display:flex;
flex-direction:column;
gap:20px;
align-items:center;
background-color:#080a29e3;
border-radius:5px;
padding:10px;
`
export const ElementWrapper = styled.div`
width :100%;
max-width:300px;
height:fit-content;
display:flex; 
align-items:center;
gap:10px;
${'' /* border:1px solid red; */}
border-radius:3px;
`
export const Element = styled.div`
color:${(props)=> props.color ? 'green' : 'white'}

`
export const Title = styled.div`
font-size:18px;
color:#fbb03b

`


export const Header =  styled.div`
width:100%;
${'' /* border:1px solid red; */}
height:100px;
display:flex;
flex-direction:column; 
justify-content:center;
align-items:center;
gap:20px
`
export const UserName =  styled.div`
width:100%;
color:white;
display:flex;
justify-content:center;
align-items:center;
text-decoration:underline;
font-size:20px;
`
export const Logo =  styled.div`
width:100%;
max-width:50px;
height:50px;
border-radius:50%;
background-color:#fbb03b;
display:flex;
justify-content:center;
align-items:center;
margin-top:-30px;
`
export const NavContainer =  styled.div`
width:100%;
color:white;
display:flex;
gap:25px;
padding:5px 0px;
border-top:1px solid gray;
border-bottom:1px solid gray;
`
export const NavElement =  styled.div`
&:hover{
    color: #E8604C
}
`


export const BodyContainer = styled.div`
${'' /* border:1px solid red */}
margin-top:30px;
`
export const BodyWrapper = styled.div`
display:flex;
${'' /* gap:20px; */}
flex-wrap:wrap;
`
export const Heading = styled.div`
color:white;
border-bottom:1px solid gray;
`

