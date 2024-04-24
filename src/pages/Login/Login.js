import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa o hook useNavigate para programar redirecionamentos
import './Login.css';

function Login() {
  const [credentials, setCredentials] = useState({ email: '', senha: '' }); // Estado para armazenar credenciais de usuário
  const [showPassword, setShowPassword] = useState(false); // Estado para controlar a exibição da senha
  const navigate = useNavigate(); // Hook para navegar para outras rotas

  // Função para manipular mudanças nos campos de entrada
  const handleChange = (e) => {
    const { name, value } = e.target; // Destruturação para obter nome e valor do campo
    setCredentials({ ...credentials, [name]: value }); // Atualiza o estado de credenciais
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault(); // Impede o comportamento padrão de envio do formulário
    console.log('Login realizado com:', credentials); // Log das credenciais para desenvolvimento/debug
    navigate('/dashboard'); // Redireciona para o dashboard apos o Login
  };

  // Função para alternar a visibilidade da senha
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Renderiza o componente de login
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
