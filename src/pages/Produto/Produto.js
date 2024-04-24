import React, { useState } from 'react';
import './Produto.css';

function Produto() {
  const [nome, setNome] = useState(''); // Estado para armazenar o nome do produto
  const [descricao, setDescricao] = useState(''); // Estado para armazenar a descrição do produto
  const [preco, setPreco] = useState(''); // Estado para armazenar o preço do produto

  // Função para lidar com o envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault(); // Impede o comportamento padrão de envio do formulário
    alert("Produto cadastrado com sucesso!"); // Exibe um alerta ao usuário após o cadastro
  };

  // Renderiza o componente de cadastro de produto
  return (
    <div>
      <h2>Cadastro de Produto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome do Produto:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Descrição:</label>
          <textarea
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
        </div>
        <div>
          <label>Preço:</label>
          <input
            type="text"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
            required
          />
        </div>
        <button type="submit">Cadastrar Produto</button>
      </form>
    </div>
  );
}

export default Produto;
