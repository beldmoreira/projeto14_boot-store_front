import styled from 'styled-components';

export default function Div(){
    return(
        <>
            <D>
                <img src='klipartz 39.png'></img>
                <P>nome</P>
                <P>preço</P>
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