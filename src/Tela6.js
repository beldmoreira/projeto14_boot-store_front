import styled from 'styled-components';
export default function Tela6(){
    
    
    return(
    <>
    <Container>
    <Caixa>
        <img className='imgg2' src='Vector.png'></img>
        <p className="imgg2"><div className='ab'>My Cart</div></p>
        <img src='Group 201.png'></img>
    </Caixa>
    <Oder>
        Orders
    </Oder>
    <Cart >
        <img src='klipartz 39.png'></img>
        <Inf>
            <p>nome</p>
            <p>tamanho</p>
            <p>preço</p>
        </Inf>
        < Botao>
            < Botao2  >+</ Botao2 >
            <p>1</p>
            < Botao2  >+</ Botao2 >
        </ Botao>
    </Cart >
    <Cart >
        <img src='klipartz 39.png'></img>
        <Inf>
            <p>nome</p>
            <p>tamanho</p>
            <p>preço</p>
        </Inf>
        < Botao>
            < Botao2  >+</ Botao2 >
            <p>1</p>
            < Botao2   >+</ Botao2 >
        </ Botao>
    </Cart >
    <Cart >
        <img src='klipartz 39.png'></img>
        <Inf>
            <p>nome</p>
            <p>tamanho</p>
            <p>preço</p>
        </Inf>
        < Botao>
            < Botao2   >+</ Botao2 >
            <p>1</p>
            < Botao2   >+</ Botao2 >
        </ Botao>
    </Cart >
   
    <Fim >
        <Item><p>Subtotal</p></Item>
        < Item2><p>10</p></ Item2>
    </Fim >
    < Linha ></ Linha >
    <Fim >
        <Item><p>Shipping</p></Item>
        < Item2><p>10</p></ Item2>
    </Fim >
    < Linha ></ Linha >
    <Fim >
        <Item><p>Bag Total</p></Item>
        < Item2><p>10</p></ Item2>
    </Fim>
    < Linha ></ Linha >
    <B>CKECKOUT </B>
    </Container>
    
    </>)
}
const Linha = styled.div`
background: black;
height: 0.5px;
margin-bottom: 30px;
margin-top: 10px;
`
const Item = styled.div`
margin-right: 150px;
width: 80px;
`
const Item2 = styled.div`
    display: flex;
    flex-direction: row-reverse;
    width:100px;
`
const B= styled.button`
height:70px;
width:350px;
border-radius: 35px;
background: rgb(43, 143, 235);
`
const Fim = styled.div`
display:flex;
`
const Container = styled.div`
    margin-left: 30px;
    margin-top: 30px;
`
const Caixa  = styled.div`
    display:flex;
    margin-bottom: 20px;
`
const Oder  = styled.p`
    margin-top: 10px;
    margin-bottom: 20px;
}
`
const Cart = styled.div`
display: flex;
margin-bottom: 20px;s
`
const Inf = styled.div`
display: flex;
margin-bottom: 20px;s
`
const Botao = styled.div`
width: 80px;
    height: 115px;
    
    display: flex;
    justify-content:center;
    align-items: center;
`
const Botao2 = styled.button`
height:25px;
width: 25px;
background: rgb(43, 143, 235);
`