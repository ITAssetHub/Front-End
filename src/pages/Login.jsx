import { useState } from 'react'
import '../styles.css'

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <>
    <div className="texto-login">
      <h1> <img src=".\src\assets\logo.png" alt="Logo" id="logo" /> ASSET HUB</h1>
      <h3>Bem-Vindo</h3>
    </div>
      <div className="container">
        <div className="container-login">
          <div className="wrap-login">
            <form className="login-form">
              <span className="login-form-title">Acesse sua conta</span>

              <div className="wrap-input">
                <input
                 className={email !== "" ? "has-val input" : "input"} 
                 type="email" 
                 value={email}
                 onChange={e => setEmail(e.target.value)}
                 />
                <span className="focus-input" data-placeholder="Email"></span>
              </div>

              <div className="wrap-input">
                <input 
                className={password !== "" ? "has-val input" : "input"} 
                type="password" 
                value={password}
                onChange={e => setPassword(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Password"></span>
              </div>

              <div className="container-login-form-btn">
                <button className="login-form-btn">Log In
                </button>
              </div>
              
            </form>
          </div>
        </div>
      </div>
      <p>Versão 1.0.0</p>
    </>
  )
}

export default Login