import styled from "styled-components";
import { Link } from "react-router-dom";



const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #FFFFFF;
`
const Span = styled.div`
    font-family: DM Sans;
    font-size: 6vmin;
    font-weight: 700;
    line-height: 31px;
    letter-spacing: 0em;
    text-align: center;
    color: #222222;
    margin-bottom: 40px;
    margin-top: 60px;
`;

const StyledLink = styled(Link)`
    font-family:Inter;
    font-weight: 400; 
    font-size: 16px;
    line-height: 19.36px;
    color: #888888;
    margin-top: 20px;
`;
const LinkStyle = styled(Link)`
    font-family:Inter;
    font-weight: 600; 
    font-size: 16px;
    line-height: 19.36px;
    text-decoration: underline;
    color: #95C7F5;
`


export {
    Container,
    StyledLink,
    LinkStyle,
    Span
}