import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Produto() {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await axios.get('http://localhost:3000/produtos');
        setProdutos(response.data);
      } catch (error) {
        console.error('Erro ao obter produtos:', error);
      }
    };

    fetchProdutos();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:3000/produtos', {
        nome,
        descricao,
        preco
      });
      alert("Produto cadastrado com sucesso!");
      setNome('');
      setDescricao('');
      setPreco('');
      // Atualiza a lista de produtos após cadastrar um novo produto
      fetchProdutos();
    } catch (error) {
      console.error('Erro ao cadastrar produto:', error);
      alert("Erro ao cadastrar produto. Verifique o console para mais detalhes.");
    }
  };

  const fetchProdutos = async () => {
    try {
      const response = await axios.get('http://localhost:3000/produtos');
      setProdutos(response.data);
    } catch (error) {
      console.error('Erro ao obter produtos:', error);
    }
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

      <h2>Produtos Cadastrados</h2>
      <ul>
        {produtos.map(produto => (
          <li key={produto.id}>
            <strong>{produto.nome}</strong> - {produto.descricao} - Preço: R$ {produto.preco}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Produto;
