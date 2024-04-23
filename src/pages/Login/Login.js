import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [credentials, setCredentials] = useState({ email: '', senha: '' });
  const [showPassword, setShowPassword] = useState(false); // Estado para controlar a exibição da senha
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Login realizado com:', credentials);
    navigate('/dashboard');
  };

  // Função para alternar entre mostrar e ocultar a senha
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <input type="email" name="email" placeholder="Email" value={credentials.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <input type={showPassword ? 'text' : 'password'} name="senha" placeholder="Senha" value={credentials.senha} onChange={handleChange} required />
          <button type="button" className="password-toggle" onClick={togglePasswordVisibility}>
            {showPassword ? 'Ocultar' : 'Mostrar Senha'}
          </button>
        </div>
        <button type="submit" className="login-button">Entrar</button>
      </form>
    </div>
  );
}

export default Login;
