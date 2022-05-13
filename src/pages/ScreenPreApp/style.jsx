import styled  from "styled-components";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #2C8FEC;
    height:100%;
    
    img {
        position: absolute;
        top: 0;
        height: 62%;
    }
    
`;
const Title = styled.span`
    font-family: gilroyextrabold;
    font-size: 6vmin;
    font-weight: 800;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: center;
    color: #FFFFFF;
`;

const Button = styled.button`
    height: 11vmin;
    width: 50vmin;
    border-radius: 50px;
    border:none;
    margin-bottom: 48px;
    margin-top:40px;
    gap:10px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    background: #FFFFFF;
    font-family: Inter;
    font-size: 3.5vmin;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: center;
    color: #2B8FEC;
    
`;
const LowerPart = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align:center;
    bottom:0;
    position: absolute;
`;

export{
    Container,
    Title,
    Button,
    LowerPart
}