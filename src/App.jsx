import { useState } from 'react'
import './styles.css'

function App() {
  const [usuario, setUsuario] = useState("")
  const [senha, setSenha] = useState("")

  return (
    <>
      <div className="container">
        <div className="container-login">
          <div className="wrap-login">
            <form className="login-form">
              <span className="login-form-title">Acesse sua conta</span>

              <div className="wrap-input">
                <input
                 className={usuario !== "" ? "has-val input" : "input"} 
                 type="txt" 
                 value={usuario}
                 onChange={e => setUsuario(e.target.value)}
                 />
                <span className="focus-input" data-placeholder="Usuário"></span>
              </div>

              <div className="wrap-input">
                <input 
                className={senha !== "" ? "has-val input" : "input"} 
                type="password" 
                value={senha}
                onChange={e => setSenha(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Senha"></span>
              </div>

              <div className="container-login-form-btn">
                <button className="login-form-btn">Log In
                </button>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App