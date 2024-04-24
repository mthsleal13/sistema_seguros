import React from 'react';
import { Link } from 'react-router-dom'; // Importa o componente Link do react-router para navegação
import './Dashboard.css'; 

function Dashboard() {
  // Renderiza o componente Dashboard
  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <div className="dashboard-links">
        <Link to="/cliente" className="dashboard-link">Cadastro de Cliente</Link>
        <Link to="/produto" className="dashboard-link">Cadastro de Produto</Link>
        <Link to="/tecnico" className="dashboard-link">Cadastro de Técnico</Link>
        <Link to="/ordemservico" className="dashboard-link">Ordem de Serviço</Link>
      </div>
    </div>
  );
}

export default Dashboard;
