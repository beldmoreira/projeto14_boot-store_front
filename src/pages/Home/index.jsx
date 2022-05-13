import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import {B,Container,Caixa,IMG,IMG2,IMG22,Anuncio2,P,D,Oder} from "./style";
import BlueButton from "../../components/BlueButton";
import axios from 'axios';
import Div from "./Div";
export default function Tela4(){
    const n=[1,2,3,4,5,6]
    
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
                    <Div/>
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
                    <Div/>
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
