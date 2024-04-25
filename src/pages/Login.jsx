import { useState } from 'react';
import '../styles.css';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated } from '../auth';

function Login() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Chame a função isAuthenticated aqui com username e password
      const usuarioValidado = await isAuthenticated(usuario, password);

    if (usuarioValidado == true) {
      // Se o usuário for validado, defina o valor 'true' no localStorage
      localStorage.setItem('usuarioValidado', 'true');
      navigate("/home");
    } else {
      // Se a autenticação falhar, exiba uma mensagem de erro
      setMessage("Usuário ou senha inválidos");
    }

  } catch (error) {
    console.error('Erro ao enviar requisição: ', error);
    setMessage("Erro ao enviar requisição: " + error.message);
  }
  };

  return (
    <div className='login'>
      <div className="texto-login">
        <h1 className='logo'> <img src=".\src\assets\logo.png" alt="Logo" id="logo" /> ASSET HUB</h1>
        <h3 className='texto'>Bem-Vindo</h3>
      </div>
      <div className="container">
        <div className="container-login">
          <div className="wrap-login">
            <form className="login-form" onSubmit={handleSubmit}>
              <span className="login-form-title">Acesse sua conta</span>
              <div className="wrap-input">
                <input
                  className={usuario !== "" ? "has-val input" : "input"} 
                  type="text" 
                  value={usuario}
                  onChange={e => setUsuario(e.target.value)}               
                />
                <span className="focus-input" data-placeholder="Usuario"></span>
              </div>

              <div className="wrap-input">
                <input 
                  className={password !== "" ? "has-val input" : "input"} 
                  type="password" 
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Senha"></span>
              </div>

              <div className="container-login-form-btn">
                <button type="submit" className="login-form-btn">
                  Log In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <p className='versao'>Versão 1.0.0</p>
    </div>
  );
}

export default Login;