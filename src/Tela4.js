import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
export default function Tela4(){
    
    
    return(
    <>
    <Container>
        
        <Caixa  >
            <IMG src='Vector.png'></IMG>
            <img src='Group 201.png'></img>
        </Caixa >
        <p>Hello</p>
        <Anuncio2>
          <img src='Rectangle 336.png'></img>
          <img src='Rectangle 336.png'></img>
         
        </Anuncio2>
        <p>New Arrivals</p>
        <div>
            <Anuncio2>
                <div>
                    <img src='klipartz 39.png'></img>
                    <p>nome</p>
                    <p>preço</p>
                </div> 
                <div>
                    <img src='klipartz 39.png'></img>
                    <p>nome</p>
                    <p>preço</p>
                </div> 
                <div>
                    <img src='klipartz 39.png'></img>
                    <p>nome</p>
                    <p>preço</p>
                </div> 
                <div>
                    <img src='klipartz 39.png'></img>
                    <p>nome</p>
                    <p>preço</p>
                </div> 
               
            </Anuncio2>
        </div>
        <p>Jordan Classic</p>
        <div>
            <Anuncio2>
                <div>
                    <img src='klipartz 39.png'></img>
                    <p>nome</p>
                    <p>preço</p>
                </div> 
                <div>
                    <img src='klipartz 39.png'></img>
                    <p>nome</p>
                    <p>preço</p>
                </div> 
                <div>
                    <img src='klipartz 39.png'></img>
                    <p>nome</p>
                    <p>preço</p>
                </div> 
                <div>
                    <img src='klipartz 39.png'></img>
                    <p>nome</p>
                    <p>preço</p>
                </div> 
               
            </Anuncio2>
        </div>
    </Container>

      
    </>
    )
}
const Container = styled.div`
    margin-left: 30px;
    margin-top: 30px;
`
const Caixa  = styled.div`
    display:flex;
    margin-bottom: 20px;
`
const IMG = styled.img`
margin-right: 280px;
`;
const Anuncio2 = styled.div`
    display: flex;
    overflow-x:scroll;
    margin-top: 30px;
    margin-bottom: 30px;
`