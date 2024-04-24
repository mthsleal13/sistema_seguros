import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa os componentes necessários para o roteamento
import Login from './pages/Login/Login'; // Importa o componente de login
import Dashboard from './pages/Dashboard/Dashboard'; // Importa o componente do dashboard
import Cliente from './pages/Cliente/Cliente'; // Importa o componente de cadastro de clientes
import Produto from './pages/Produto/Produto'; // Importa o componente de cadastro de produtos 
import Tecnico from './pages/Tecnico/Tecnico'; // Importa o componente de cadastro de técnicos 
import OrdemServico from './pages/OrdemServico/OrdemServico'; // Importa o componente de ordem de serviço
import './App.css'; 


function App() {
  // Componente principal que configura as rotas usando Router e Routes
  return (
    <Router> // Inicia o roteador que permite navegação entre componentes
      <Routes> // Define os potnos de rota dentro do aplicativo
        <Route path="/" element={<Login />} /> // Rota para pagina de login
        <Route path="/dashboard" element={<Dashboard />} /> // Rota para pagina de dashboard
        <Route path="/cliente" element={<Cliente />} /> // Rota para pagina de cadastro de clientes
        <Route path="/produto" element={<Produto />} /> // Rota para pagina de cadastro de produtos
        <Route path="/tecnico" element={<Tecnico />} /> // Rota para pagina de cadastro de técnicos
        <Route path="/ordemservico" element={<OrdemServico />} /> // Rota para pagina de ordem de serviço
      </Routes>
    </Router>
  );
}

export default App;
