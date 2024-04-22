import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Tecnico.css'; // Importando o arquivo de estilo, se necessário

function Tecnico() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [especialidade, setEspecialidade] = useState('');
  const [tecnicos, setTecnicos] = useState([]);

  const fetchTecnicos = async () => {
    try {
      const response = await axios.get('http://localhost:3000/tecnicos');
      setTecnicos(response.data);
    } catch (error) {
      console.error('Erro ao obter técnicos:', error);
    }
  };

  useEffect(() => {
    fetchTecnicos();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:3000/tecnicos', {
        nome,
        email,
        especialidade
      });
      alert("Técnico cadastrado com sucesso!");
      setNome('');
      setEmail('');
      setEspecialidade('');
      // Atualiza a lista de técnicos após cadastrar um novo técnico
      fetchTecnicos();
    } catch (error) {
      console.error('Erro ao cadastrar técnico:', error);
      alert("Erro ao cadastrar técnico. Verifique o console para mais detalhes.");
    }
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

      <h2>Técnicos Cadastrados</h2>
      <ul>
        {tecnicos.map(tecnico => (
          <li key={tecnico.id}>
            <strong>{tecnico.nome}</strong> - {tecnico.email} - {tecnico.especialidade}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tecnico;
