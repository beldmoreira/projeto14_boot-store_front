import styled from 'styled-components';
export default function Tela5(){
    
    
    return(
    <>
    <Container>
        <Caixa >
            <IMG2 src='Vector.png'></IMG2>
            <IMG22 ><Ab>Details</Ab></IMG22 >
            <img src='Group 201.png'></img>
        </Caixa>
        <IMG src='klipartz 39.png'></IMG>
        <Compras>marca</Compras>
       <NomeMarca><p  className="comprasp">Nike Air Max 87</p></NomeMarca>
        <Compras>$ preço</Compras>
        <p>size</p>
        <Anuncio2 >
            <Box>30</Box>
            <Box >30</Box>
            <Box>30</Box>
            <Box >30</Box>
            <Box >30</Box>
            <Box >30</Box>
          
        </Anuncio2 >
        <B>ADD TO CART </B>
    </Container>
    
    </>)
}
const B= styled.button`
height:70px;
width:350px;
border-radius: 35px;
background: rgb(43, 143, 235);
`
const Box= styled.div`
width:50px;
height:50px;
margin-left: 10px;
background: red;
display: flex;
justify-content:center;
align-items: center;
`
const Ab = styled.div`
width:80px;
   
display: flex;
flex-direction: column;
justify-content:center;
`
const NomeMarca = styled.div`
width:300px;
margin-left: 40px;
display: flex;
justify-content: center;
`
const Container = styled.div`
    margin-left: 30px;
    margin-top: 30px;
`
const Caixa  = styled.div`
    display:flex;
    margin-bottom: 20px;
`
const IMG = styled.img`
    margin-left: 60px;
    height: 250px;
    width:250px;
`
const IMG2 = styled.img`
margin-right: 120px;
`
const IMG22 = styled.p`
margin-right: 120px;
`
const Compras = styled.p`
margin-left: 160px; 
`
const Anuncio2 = styled.div`
    display: flex;
    overflow-x:scroll;
    margin-top: 30px;
    margin-bottom: 30px;
`