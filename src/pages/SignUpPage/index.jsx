import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const navigator = useNavigate();
  
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
      navigator("/");
    } catch (error) {
      alert("Ops! Infelizmente aconteceu um erro! Tente novamente!");
      console.log(error);
    }
  }
  
  return (
    <div className="page">
      <div>
        <h1>Sign up</h1>
        <form>
          {/* nome */}
          <input 
            type="text"
            value={name}
            placeholder="Nome"
            onChange={(e) => setName(e.target.value)}
          />

          {/* email */}
          <input 
            type="text" 
            value={email}
            placeholder="E-mail" 
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* senha */}
          <input 
            type="text" 
            value={password}
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* confirmar senha */}
          <input 
            type="text" 
            value={confirmPassword}
            placeholder="Confirme a senha"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button type="submit" onClick={handleSubmit}>Cadastrar</button>
        </form>
      </div>
      <div>
        <Link to="/">Já tem uma conta? Entre agora!</Link>
      </div>
    </div>
  )
}

export default SignUpPage;