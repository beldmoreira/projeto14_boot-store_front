import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
export default function Tela4(){
    
    
    return(
    <>
     <Caixa  >
        <IMG22 src='Vector.png'></IMG22>
        <IMG2 src='Group 201.png'></IMG2>
    </Caixa >
    <Container>
        
        
        <p>Hello</p>
        <Anuncio2>
          <img src='Rectangle 336.png'></img>
          <img src='Rectangle 336.png'></img>
         
        </Anuncio2>
        <p>New Arrivals</p>
        <div>
            <Anuncio2>
            <D>
                <img src='klipartz 39.png'></img>
                <P>nome</P>
                <P>preço</P>
            </D> 
            <D>
                <img src='klipartz 39.png'></img>
                <P>nome</P>
                <P>preço</P>
            </D> 
            <D>
                <img src='klipartz 39.png'></img>
                <P>nome</P>
                <P>preço</P>
            </D> 
            <D>
                <img src='klipartz 39.png'></img>
                <P>nome</P>
                <P>preço</P>
            </D> 
            <D>
                <img src='klipartz 39.png'></img>
                <P>nome</P>
                <P>preço</P>
            </D> 
            <D>
                <img src='klipartz 39.png'></img>
                <P>nome</P>
                <P>preço</P>
            </D> 
               
            </Anuncio2>
        </div>
        <p>Jordan Classic</p>
        <div>
            <Anuncio2>
                <D>
                    <img src='klipartz 39.png'></img>
                    <P>nome</P>
                    <P>preço</P>
                </D>
                <D>
                    <img src='klipartz 39.png'></img>
                    <P>nome</P>
                    <P>preço</P>
                </D> 
                <D>
                    <img src='klipartz 39.png'></img>
                    <P>nome</P>
                    <P>preço</P>
                </D> 
                <D>
                    <img src='klipartz 39.png'></img>
                    <P>nome</P>
                    <P>preço</P>
                </D> 
                <D>
                    <img src='klipartz 39.png'></img>
                    <P>nome</P>
                    <P>preço</P>
                </D> 
                <D>
                    <img src='klipartz 39.png'></img>
                    <P>nome</P>
                    <P>preço</P>
                </D>  
               
               
            </Anuncio2>
        </div>
    </Container>

      
    </>
    )
}
const Container = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`
const Caixa  = styled.div`
display:flex;
margin-bottom: 20px;
justify-content:space-between;
margin-top: 30px;
`
const IMG = styled.img`

`
const IMG2 = styled.img`
    margin-right:30px;

`
const IMG22 = styled.img`
    margin-left: 30px;
`
const Anuncio2 = styled.div`
    display: flex;
    overflow-x:scroll;
    margin-top: 30px;
    margin-bottom: 30px;
    width:350px;
`
const P = styled.p`
margin-left: 35px;
`
const D = styled.div`
margin-right:10px;
`