import styled from "styled-components";
import { Link } from "react-router-dom";


const UpperPart = styled.div`
    border-radius: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height:260px;

    img{
        position: absolute;
        top: 0;
        height: 35%;
        width:100%;
        border-radius:25px;
    }
`;

const Container=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #FFFFFF;
  
    bottom:0;
`
const Span = styled.div`
    font-family: DM Sans;
    font-size: 6vmin;
    font-weight: 700;
    line-height: 31px;
    letter-spacing: 0em;
    text-align: left;
    color: #222222;
    margin:20px auto;

`;
const StyledLink = styled(Link)`
    font-family:Inter;
    font-weight: 400; 
    font-size: 16px;
    line-height: 19.36px;
    color: #888888;
    margin-top: 40px;
`;
const LinkStyle = styled(Link)`
    font-family:Inter;
    font-weight: 600; 
    font-size: 16px;
    line-height: 19.36px;
    text-decoration: underline;
    color: #95C7F5;
`


export{
    Container,
    StyledLink,
    LinkStyle,
    UpperPart,
    Span
}




