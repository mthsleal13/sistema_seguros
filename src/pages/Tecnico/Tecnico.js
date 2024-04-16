import React, { useState } from 'react';
import './Tecnico.css';


function Tecnico() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [especialidade, setEspecialidade] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui seria onde a lógica para enviar os dados para o backend seria adicionada
    alert("Técnico cadastrado com sucesso!");
  };

  return (
    <div>
      <h2>Cadastro de Técnico</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Especialidade:</label>
          <input
            type="text"
            value={especialidade}
            onChange={(e) => setEspecialidade(e.target.value)}
            required
          />
        </div>
        <button type="submit">Cadastrar Técnico</button>
      </form>
    </div>
  );
}

export default Tecnico;
