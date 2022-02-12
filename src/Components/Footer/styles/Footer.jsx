import styled from "styled-components";

export const Container = styled.div`
padding: 80px 60px;
background: black;

`
export const Wrapper = styled.div`
display: flex;
flex-direction:column;
justify-content: center;
max-width:1000px;
margin 0 auto;

`
export const Column = styled.div`
display:flex;
flex-direction: column;
text-align:center;


`
export const Row = styled.div`
display:flex;
grid-template-columns: repeat(auto-fill,minmax( 230px , 1fr));
grid-gap: 50px;
margin-left:auto;
margin-right: auto;
@media only screen and (max-width:768px){
    flex-direction:column;
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