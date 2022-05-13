import styled from 'styled-components';
export default function Tela7(){
    return(
        <>
        <Caixa>
        <IMG2 src='Arrow - Left.png'></IMG2>
        <p><Ab>Payment</Ab></p >
        <IMG22  ></IMG22 >
    </Caixa>
    <Oder>Address</Oder>
    <Oder2>64 jalalabath</Oder2>
    <Oder>Payment Method</Oder>
    <Container>
        
        <Cartao>
        <P>credit Card</P>
        <Pn>1452 5847250 5485</Pn>
        < Pnome>Mohammod Ali</Pnome>
            < Cartao2></Cartao2>

        </Cartao>
        <B>CKECKOUT </B>
    </Container>

        </>
    )
}
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
const Oder  = styled.p`
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 30px;
}
`
const Oder2  = styled.p`
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 30px;
    font-size:14px;
    color:gray;
}
`
const Container = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`