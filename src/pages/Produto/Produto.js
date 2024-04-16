import React, { useState } from 'react';

function Produto() {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você poderia adicionar a lógica para enviar os dados para o backend
    alert("Produto cadastrado com sucesso!");
  };

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
