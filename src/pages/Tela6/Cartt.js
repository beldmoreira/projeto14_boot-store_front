import styled from 'styled-components';
export default function Cartt(){
    return(
        <>
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
        </>
    )
}
const Cart = styled.div`
display: flex;
margin-bottom: 20px;s
`
const Inf = styled.div`
display: flex;
margin-bottom: 20px;
flex-direction: column;
justify-content: center;
margin-left: 10px;
margin-right: 10px;
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