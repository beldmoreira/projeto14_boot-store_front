import styled from 'styled-components';

export default function Div(pros){
    const {foto,nome,preco} =pros 
    return(
        <>
            <D>
                <img src={foto}></img>
                <P>{nome}</P>
                <P>{preco}</P>
            </D> 
        </>
    )
}
const P = styled.p`
margin-left: 35px;
`
const D = styled.div`
margin-right:10px;
`