import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Importa o axios para fazer requisições HTTP
import './Tecnico.css'; // Importa o arquivo de estilo CSS especifico para o componente Técnico

function Tecnico() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: ''
  }); // Estado inicial para o formulário de cadastro de técnicos
  const [tecnicos, setTecnicos] = useState([]); // Estado para armazenar a lista de técnicos cadastrados

  useEffect(() => {
    const fetchTecnicos = async () => {
      try {
        const response = await axios.get('http://localhost:3000/tecnicos'); // Requisição GET para buscar os técnicos
        setTecnicos(response.data); // Atualiza o estado com os dados recebidos
      } catch (error) {
        console.error('Erro ao obter técnicos:', error); // Log de erro se a requisição falhar
      }
    };

    fetchTecnicos(); // Chama a função para buscar os técnicos ao carregar o componente 
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Previne o comportamento padrão do formulário
    try {
      await axios.post('http://localhost:3000/tecnicos', formData); // Requisição POST para cadastrar um novo técnico
      alert("Técnico cadastrado com sucesso!");
      setFormData({
        nome: '',
        email: '',
        telefone: ''
      }); // Reseta o formulário após o cadastro
    } catch (error) {
      console.error('Erro ao cadastrar técnico:', error); // Log de erro se o cadastro falhar
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
    })); // Atualiza o estado do formulário com os novos valores formatados
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
          <li key={tecnico.id}>{tecnico.nome} - {tecnico.email} - {tecnico.telefone}</li>
        ))}
      </ul>
    </div>
  );
}

export default Tecnico;
