import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Cliente.css';

function Cliente() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: ''
  });
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const response = await axios.get('http://localhost:3000/clientes');
        setClientes(response.data);
      } catch (error) {
        console.error('Erro ao obter clientes:', error);
      }
    };

    fetchClientes();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:3000/clientes', formData);
      alert("Cliente cadastrado com sucesso!");
      setFormData({
        nome: '',
        email: '',
        telefone: ''
      });
    } catch (error) {
      console.error('Erro ao cadastrar cliente:', error);
      alert("Erro ao cadastrar cliente. Verifique o console para mais detalhes.");
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
    <div className="cliente-container">
      <h2>Cadastro de Cliente</h2>
      <form className="cliente-form" onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input type="text" name="nome" required value={formData.nome} onChange={handleChange} className="cliente-input" />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" required value={formData.email} onChange={handleChange} className="cliente-input" />
        </div>
        <div>
          <label>Telefone:</label>
          <input type="text" name="telefone" value={formData.telefone} onChange={handleChange} className="cliente-input" placeholder="(XX) XXXX-XXXX" />
        </div>
        <button type="submit" className="cliente-button">Cadastrar</button>
      </form>

      <h2>Clientes Cadastrados</h2>
      <ul>
        {clientes.map(cliente => (
          <li key={cliente.id}> <strong>Nome:</strong>{cliente.nome} - <strong>Email:</strong>{cliente.email} - <strong>Telefone:</strong>{cliente.telefone}</li>
        ))}
      </ul>
    </div>
  );
}

export default Cliente;
