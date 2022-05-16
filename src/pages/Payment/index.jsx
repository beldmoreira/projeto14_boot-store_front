import { useState } from "react";
import axios from "axios";
import {Caixa,IMG22,IMG2,P,Pn,Ab,Order,Order2,FormPay,Cartao,Pnome,Cartao2, B, Container} from "./style.jsx"
import BlueButton from '../../components/BlueButton.jsx';


export default function Payment(){
    const [valor, setValor] = useState('ok');
    const [buyerName, setBuyerName] = useState("");
    const [address, setAddress] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    

      async function handleSubmit(e) {
        e.preventDefault();
        try {
          await axios.post("http://localhost:5000/order", {
            buyerName,
            address,
            cardNumber
          });
    
          alert("Pedido feito com sucesso!");
          
        } catch (error) {
          alert("Ops! Infelizmente aconteceu um erro! Tente novamente!");
          console.log(error);
        }
      }  
     
    return(
        <>
            <Caixa>
                <IMG2 src='Arrow - Left.png'></IMG2>
                <p><Ab>Pagamento</Ab></p >
                <IMG22  ></IMG22 >
            </Caixa>
            <Order>Endereço</Order>

            <FormPay onSubmit={handleSubmit}> 
                <Order2
                type="text"
                placeholder="Endereço"
                onChange={(e) => setAddress(e.target.value)}
                value ={address}
                />
             <Order> Nome do comprador </Order>  
                <Order2 
                type="text"
                placeholder="Nome impresso no cartão"
                onChange={(e) => setBuyerName(e.target.value)}
                value ={buyerName}
                />
             <Order>Número do cartão</Order>   
                <Order2
                type="number"
                placeholder="Número impresso no cartão"
                onChange={(e) => setCardNumber(e.target.value)}
                value ={cardNumber}
                />
            </FormPay>
                <Order> Frete grátis para todo Brasil </Order>
                <Order>Método de pagamento</Order>
            <Container>
                <Cartao>
                    <P>Cartão de Crédito</P>
                    <Pn>{cardNumber}</Pn>
                    < Pnome>{buyerName}</Pnome>
                        < Cartao2></Cartao2>
                        <div className={valor} >
                        <B >batata </B>
                        </div  >
                </Cartao>
            <BlueButton type="submit" onClick={() => prompt("Pedido realizado com sucesso!")}>PAGAMENTO</BlueButton>
       

            </Container>

        </>
    )
    
}
