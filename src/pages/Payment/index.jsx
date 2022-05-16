import { useState } from "react";
import {Caixa,IMG22,IMG2,P,Pn,Ab,Order,Order2,FormPay,Cartao,Pnome,Cartao2, B, Container} from "./style.jsx"
import BlueButton from '../../components/BlueButton.jsx';


export default function Tela7(){
    const [valor, setValor] = useState('ok');
    const [address, setAddress] = useState("");

  
    function val(){
        setValor('Fim')
    }
    return(
        <>
            <Caixa>
                <IMG2 src='Arrow - Left.png'></IMG2>
                <p><Ab>Pagamento</Ab></p >
                <IMG22  ></IMG22 >
            </Caixa>
            <Order>Endereço</Order>
            <FormPay> 
                <Order2
                type="text"
                value={address}
                placeholder="Endereço"
                onChange={(e) => setAddress(e.target.value)}
                />
            </FormPay>
                <Order> Frete grátis para todo Brasil </Order>
                <Order>Método de pagamento</Order>
            <Container>
                <Cartao>
                    <P>Cartão de Crédito</P>
                    <Pn>1452 5847250 5485</Pn>
                    < Pnome>Mohammod Ali</Pnome>
                        < Cartao2></Cartao2>
                        <div className={valor} >
                        <B >batata </B>
                        </div  >
                </Cartao>
            <BlueButton onClick={val}>PAGAMENTO</BlueButton>
       

            </Container>

        </>
    )
    
}
