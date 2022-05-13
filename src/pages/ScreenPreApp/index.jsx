import { useNavigate } from "react-router-dom";
import { Button, Container, LowerPart, Title } from "./style";
import Footpic from "../../assets/footpic.png";


export default function ScreenPreApp(){
    const navigate = useNavigate();
    return(
        <Container>
            <img alt="footpic.png" src={Footpic}/>
            <LowerPart>
                <Title> Find Your Best Collections </Title>
                <Button onClick={() => navigate("/signup")}> GET STARTED </Button>
            </LowerPart>
        </Container>

    )
}