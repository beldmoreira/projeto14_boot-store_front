import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import {Container,Caixa,IMG2,IMG22,Anuncio2,Oder} from "./style";
import BlueButton from "../../components/BlueButton";
import axios from 'axios';
import Div from "./Div";
export default function Tela4(){
    const n=[{foto:'klipartz 39.png',nome:"nome",preco:"preço" },{foto:'klipartz 39.png',nome:"nome",preco:"preço" },{foto:'klipartz 39.png',nome:"nome",preco:"preço" },{foto:'klipartz 39.png',nome:"nome",preco:"preço" },{foto:'klipartz 39.png',nome:"nome",preco:"preço" },{foto:'klipartz 39.png',nome:"nome",preco:"preço" }]
    
    return(
    <>
     <Caixa>
        <IMG22 src='Vector.png'/>
        <IMG2 src='Group 201.png'/>
    </Caixa >
    <Oder>Hello</Oder>
    <Container>  
       
        <Anuncio2>
          <img src='Rectangle 336.png'/>
          <img src='Rectangle 336.png'/>
         
        </Anuncio2>
        <p>New Arrivals</p>
        <div>
            <Anuncio2>
            {n.map((ns)=>{
            return(
                <>
                   <Div foto={ns.foto} nome={ns.nome} preco={ns.preco}/>
                </>
                )
            })}
           
            </Anuncio2>
        </div>
        <p>Jordan Classic</p>
        <div>
            <Anuncio2>
            {n.map((ns)=>{
            return(
                <>
                    <Div  foto={ns.foto} nome={ns.nome} preco={ns.preco}/>
                </>
                )
            })}
             
               
            </Anuncio2>
        </div>
        <BlueButton>ADICIONAR AO CARRINHO </BlueButton>
    </Container>
      
    </>
    )
}
