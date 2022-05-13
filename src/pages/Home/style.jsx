import styled from "styled-components"

const B= styled.button`
height:70px;
width:350px;
border-radius: 35px;
background: rgb(43, 143, 235);
`
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
const Oder  = styled.p`
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 30px;
}
`
export{
    B,
    Container,
    Caixa,
    IMG,
    IMG2,
    IMG22,
    Anuncio2,
    P,
    D,
    Oder

}