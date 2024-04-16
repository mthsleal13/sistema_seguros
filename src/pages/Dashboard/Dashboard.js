import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'; // Importando o CSS específico para Dashboard

function Dashboard() {
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
