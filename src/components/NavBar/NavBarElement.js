import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';


export const Nav=styled.nav`
background: ${({scrollNav})=>(scrollNav?'#bbd3ef' :'#bbd3ef')};
height: 80px;
margin-top: -80px; 
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;
@media screen and (max-width:  960px){
    transition: 0.8s all ease; 
}
`;

export const NavbarContainer=styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 4px 24px;
max-width: 1100px;
`;
export const NavLogo=styled.img`

width: 170px;
justify-self: flex-start;
cursor: pointer;
&:hover {
        cursor: pointer; 
    }
 

 text-decoration: none; 
 @media screen and (max-width:  960px){
    margin-top: 9px;

    width:100px;
    height: 50px;
 }`;


export const MobileIcon=styled.div`
display: none;
@media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%,60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
}
`;
export const NavMenu=styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;   
@media screen and (max-width: 768px)
{display: none;}`

export const NavItems=styled.li` 
 height: 80px;
 
 `
 export const NavLinks=styled(LinkR)`
 color: #052257;
 display: flex;
 align-items: center;
 font-weight: bolder;
 
 text-decoration: none;
 padding:0 1rem;
 height: 100%;
 cursor: pointer;
 &:hover {
        cursor: pointer; 
    }
 &.active{
    border-bottom: 3px solid #0B0B45;
 }`; 