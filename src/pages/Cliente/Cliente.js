import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div>
      <h2>Cadastro de Cliente</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input type="text" name="nome" required value={formData.nome} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" required value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label>Telefone:</label>
          <input type="text" name="telefone" value={formData.telefone} onChange={handleChange} />
        </div>
        <button type="submit">Cadastrar</button>
      </form>

      <h2>Clientes Cadastrados</h2>
      <ul>
        {clientes.map(cliente => (
          <li key={cliente.id}>{cliente.nome} - {cliente.email} - {cliente.telefone}</li>
        ))}
      </ul>
    </div>
  );
}

export default Cliente;

