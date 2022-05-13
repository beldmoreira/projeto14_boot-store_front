import { Container, StyledLink,LinkStyle,UpperPart,Span} from "./style";
import { useState } from "react";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Pair from "../../assets/pairshoes.png";
import {CgLock, CgUser } from "react-icons/cg";
import BlueButton from "../../components/BlueButton";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";


export default function Login(){
    const [formData, setFormData] = useState({ email: '', password: '' });
    const login  = useAuth();
    const navigate = useNavigate();
  
     
    function handleChange(e) {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  
    async function handleSubmit(e) {
      e.preventDefault();
      
    const user = { ...formData };

    try {
      const { data } = await api.login(user);
      login(data);
      navigate('/home');
    } catch (error) {
      console.log(error);
      alert("Erro, tente novamente");
    }
  }

    return(
      <>
        <UpperPart>
          <img alt="pair of shoes" src={Pair}/>
        </UpperPart>

        <Container>
            <Span> Login </Span>
            <Form onSubmit={handleSubmit}>
              <CgUser/>
                <Input
                type="email"
                placeholder="E-mail"
                name="email"
                onChange={handleChange}
                value={formData.email}
                />
              <CgLock/>
                <Input
                type="password"
                placeholder="....."
                name="password"
                onChange={handleChange}
                value={formData.password}
                />
            
                <BlueButton onClick={() => navigate("/register")} >
                     LOGIN
                </BlueButton>
            </Form>
            <StyledLink to="/signup">
                Don&#39;t have an account?
            </StyledLink>
            <LinkStyle to="/signup">
                Sign Up 
            </LinkStyle>
           
        </Container>
      </>
    );
}