import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './OrdemServico.css'; // Importe o arquivo CSS com os estilos da ordem de serviço

function OrdemServico() {
  const [nome, setNome] = useState('');
  const [tecnico, setTecnico] = useState('');
  const [descricao, setDescricao] = useState('');
  const [ordensServico, setOrdensServico] = useState([]);

  const fetchOrdensServico = async () => {
    try {
      const response = await axios.get('http://localhost:3000/ordens_de_servico');
      setOrdensServico(response.data);
      console.log(response.data)
      console.log(ordensServico)
    } catch (error) {
      console.error('Erro ao obter ordens de serviço:', error);
    }
  };

  useEffect(() => {
    fetchOrdensServico();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = { nome, tecnico, descricao }; // Criar um objeto com os dados
      await axios.post('http://localhost:3000/ordens_de_servico', data);
      
      alert("Ordem de Serviço enviada com sucesso!");
      setNome('');
      setTecnico('');
      setDescricao('');
      
      fetchOrdensServico(); // Atualiza a lista de ordens de serviço após o envio bem-sucedido
    } catch (error) {
      console.error('Erro ao enviar ordem de serviço:', error);
      alert("Erro ao enviar ordem de serviço. Verifique o console para mais detalhes.");
    }
  };
  

  return (
    <div className="ordem-servico-container">
      <h2>Ordem de Serviço</h2>
      <form className="ordem-servico-form" onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            className="ordem-servico-input"
          />
        </div>
        <div>
          <label>Técnico:</label>
          <input
            value={tecnico}
            onChange={(e) => setTecnico(e.target.value)}
            required
            className="ordem-servico-input"
          />
        </div>
        <div>
          <label>Descrição:</label>
          <textarea
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
            className="ordem-servico-input"
          />
        </div>
        <button type="submit" className="ordem-servico-button">Enviar</button>
      </form>

      <h2>Ordens de serviço abertas</h2>
      <ul>
        {ordensServico.map(ordem => (
          <li key={ordem.id}>
            <strong>Nome:</strong> {ordem.nome} - <strong>Técnico:</strong> {ordem.tecnico} - <strong>Descrição:</strong> {ordem.descricao}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrdemServico;
