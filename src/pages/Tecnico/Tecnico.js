import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Tecnico.css';

function Tecnico() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: ''
  });
  const [tecnicos, setTecnicos] = useState([]);

  useEffect(() => {
    const fetchTecnicos = async () => {
      try {
        const response = await axios.get('http://localhost:3000/tecnicos');
        setTecnicos(response.data);
      } catch (error) {
        console.error('Erro ao obter técnicos:', error);
      }
    };

    fetchTecnicos();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:3000/tecnicos', formData);
      alert("Técnico cadastrado com sucesso!");
      setFormData({
        nome: '',
        email: '',
        telefone: ''
      });
    } catch (error) {
      console.error('Erro ao cadastrar técnico:', error);
      alert("Erro ao cadastrar técnico. Verifique o console para mais detalhes.");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    let newValue = value;
    if (name === 'telefone') {
      // Formata o número de telefone no formato (XX) XXXX-XXXX
      newValue = value
        .replace(/\D/g, '') // Remove caracteres não numéricos
        .replace(/^(\d{2})(\d)/g, '($1) $2') // Adiciona parênteses ao código de área
        .replace(/(\d)(\d{4})(\d{4})$/, '$1 $2-$3'); // Adiciona hífen entre os números
    }
    setFormData(prevState => ({
      ...prevState,
      [name]: newValue
    }));
  };

  return (
    <div className="tecnico-container">
      <h2>Cadastro de Técnico</h2>
      <form className="tecnico-form" onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input type="text" name="nome" required value={formData.nome} onChange={handleChange} className="tecnico-input" />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" required value={formData.email} onChange={handleChange} className="tecnico-input" />
        </div>
        <div>
          <label>Telefone:</label>
          <input type="text" name="telefone" value={formData.telefone} onChange={handleChange} className="tecnico-input" placeholder="(XX) XXXX-XXXX" />
        </div>
        <button type="submit" className="tecnico-button">Cadastrar</button>
      </form>

      <h2>Técnicos Cadastrados</h2>
      <ul>
  {tecnicos.map(tecnico => (
    <li key={tecnico.id}>
      <strong>Nome:</strong> {tecnico.nome} - <strong>Email:</strong>{tecnico.email} - <strong>Telefone:</strong>{tecnico.telefone}
    </li>
  ))}
</ul>

    </div>
  );
}

export default Tecnico;
