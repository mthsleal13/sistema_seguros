import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Cliente from './pages/Cliente/Cliente';
import Produto from './pages/Produto/Produto';
import Tecnico from './pages/Tecnico/Tecnico';
import OrdemServico from './pages/OrdemServico/OrdemServico';
import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cliente" element={<Cliente />} />
        <Route path="/produto" element={<Produto />} />
        <Route path="/tecnico" element={<Tecnico />} />
        <Route path="/ordemservico" element={<OrdemServico />} />
      </Routes>
    </Router>
  );
}

export default App;
