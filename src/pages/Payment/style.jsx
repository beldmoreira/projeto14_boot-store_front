import styled from "styled-components";

//display:none;
const Fim  = styled.div`
    display:none;
    height:350px;
    width:400px;
    background: red;
    position: absolute;
        top:100px;
        left: -50px;

    `
const Fim2  = styled.div`
    display:none;
    height:350px;
    width:400px;
    background: rgb(43, 143, 235);
    position: absolute;
        top:100px;
        left: -50px;

    `
const B= styled.button`
    height:70px;
    width:350px;
    border-radius: 35px;
    background: rgb(43, 143, 235);
    margin-top: 80px;
    `
const P = styled.p`
    display:flex;
    position: absolute;
        bottom:100px;
        left: 30px;
    `
const Pn = styled.p`
    display:flex;
    position: absolute;
        bottom: 50px;
        left: 60px;
    `
const Pnome = styled.p`
    display:flex;
    position: absolute;
        bottom: 20px;
        left: 60px;
    `
const IMG2 = styled.img`
    margin-left: 30px;
    `
const IMG22 = styled.p`
    margin-right: 30px;
    `
const Caixa  = styled.div`
    display:flex;
    margin-bottom: 20px;
    justify-content:space-between;
    margin-top: 30px;
    `
const Cartao  = styled.div`
    width:300px;
    height: 150px;
    margin-bottom:42px;
    background: rgb(43, 143, 236);
    display: flex;
    align-items:center;
    justify-content:center;
    position: relative;
    border-radius: 10px;
    `
const Cartao2  = styled.div`
    width:240px;
    height: 150px;

    border-radius: 100px;
    background: rgb(0, 187, 255);
    `
const Ab = styled.div`
    width:80px;
    display: flex;
    flex-direction: column;
    justify-content:center;
    `
const Order  = styled.p`
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 30px;

`
const FormPay = styled.form`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: left;
`;
const Order2  = styled.input`
    display:flex;
    justify-content:left;
    width: 327px;
    height: 27px;
    margin-top: 5px;
    margin-bottom: 20px;
    margin-left: 30px;
    font-size:14px;
    color:gray;
    border: none;
    cursor:pointer;

`
const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`
export {  
    Fim,
    Fim2,
    B,
    P,
    Pn,
    Pnome,
    IMG2, 
    IMG22, 
    Caixa,
    Cartao, 
    Cartao2, 
    Ab, 
    Order,
    FormPay,
    Order2,
    Container
}