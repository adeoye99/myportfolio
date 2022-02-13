import styled from "styled-components";

export const Container = styled.div`
padding: 0px 60px;
background: black;
@media only screen and (max-width:768px){
    
} 


`
export const Wrapper = styled.div`
display: flex;
flex-direction:column;
justify-content: center;
max-width:1000px;
margin: 0 auto;

`
export const Column = styled.div`
display:flex;
flex-direction: column;
text-align:center;


`
export const Row = styled.div`
display:flex;
margin-left:auto;
margin-right: auto;
margin-top:50px;
justify-content: space-between;
@media only screen and (max-width:768px){
    margin:0;
    margin-top:50px;
    flex-direction:row;

}

`
export const Link = styled.div`
font-size:18px;
margin-bottom:20px;
text-decoration: none;
color:#fff;

`
export const Title = styled.div`
 font-size:18px;
 margin-bottom:10px;
`