import { Container, StyledLink, LinkStyle, Span } from "./style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../../components/Form";
import Input from "../../components/Input";
import BlueButton from "../../components/BlueButton";
import axios from "axios";

function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/signup", {
        name,
        email,
        password,
        confirmPassword
      });

      alert("Cadastro feito com sucesso!");
      navigate("/login");
    } catch (error) {
      alert("Ops! Infelizmente aconteceu um erro! Tente novamente!");
      console.log(error);
    }
  }

  return (
    <Container>
      <>
        <Span>Crie sua conta</Span>
        <Form>
          
          <Input
            type="text"
            value={name}
            placeholder="Nome"
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            type="text"
            value={email}
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />

     

          <Input
            type="text"
            value={password}
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Input
            type="text"
            value={confirmPassword}
            placeholder="Confirme a senha"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <BlueButton type="submit" onClick={handleSubmit}>CADASTRAR</BlueButton>
        </Form>
      </>
      <StyledLink to="/login">
        Já tem uma conta?
      </StyledLink>
      <LinkStyle to="/login">
        Login
      </LinkStyle>
    </Container>
  )
}

export default SignUpPage;


