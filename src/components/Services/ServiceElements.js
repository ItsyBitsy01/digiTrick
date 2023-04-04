import styled from "styled-components";
export const ServicesContainer=styled.div`
height: 80vh;
display: flex;
background: white;
justify-content: center;
align items: center;
@media screen and (max-width: 1000px){
    height: 100%;}
@media screen and (max-width: 768px){
    height: 100%;}
`;
export const ServicesBox=styled.div`
background: white;
justify-content: center;
align items: center;
`;

export const ServicesWrapper=styled.div`
padding-top: 20px;

display:flex;


@media screen and (max-width: 1000px){
    display: flex;
    height: 100%;
    flex-direction: column;
}
@media screen and (max-width: 768px){

    display: flex;
  
}`

export const ServicesCard=styled.div`
background-color: #fff;
height: 500px;


margin: 50px;
box-shadow: 5px 5px 20px black;
overflow: hidden;
transition: all 0.2s ease-in-out;
 &: hover{
    cursor: pointer;
 }


`

export const ServicesIcon=styled.img`
height: 500px;
width: 350px;
border-radius: 5px;
&: hover{
    transform: scale(1.1) rotate(-360deg);
}`;

export const Servicesdiv=styled.div`
width:350px;
height:70px;
padding: 6px;
box-sizing: border-box;
position: relative;
bottom: 70px;
background: rgb(27, 27, 27, 0.5);
color: White;

opacity: 1;

transition: .5s;
&: hover{
    height: 240px;
    bottom: 240px;
    background: black;
    opacity: 1;
    visibility: visible;
}




`

export const ServicesH1=styled.h1`
font-size: 40px;
color: black;
margin: 10px;  
text-align:center;
padding-top: 50px;
@media screen and (max-width: 768px) {
    font-size: 28px;
  }
`
export const ServicesH2=styled.h2`
    font-size: 20px;
    margin: 10px;
    text-decoration:none;
`
export const ServicesP=styled.p`
font-size: 20px;
text: white;
margin: 20px;

&: hover{
    
}
`