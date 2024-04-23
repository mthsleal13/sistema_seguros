import React, { useState } from 'react';
import axios from 'axios';
import './OrdemServico.css'; // Importe o arquivo CSS com os estilos da ordem de serviço

function OrdemServico() {
  const [descricao, setDescricao] = useState('');
  const [imagens, setImagens] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Cria um objeto FormData para enviar os dados do formulário, incluindo as imagens
      const formData = new FormData();
      formData.append('descricao', descricao);
      imagens.forEach((imagem, index) => {
        formData.append(`imagem${index}`, imagem);
      });

      // Envia a requisição POST para o backend com os dados do formulário
      await axios.post('http://localhost:3000/ordens-servico', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      alert("Ordem de Serviço enviada com sucesso!");
      // Limpa os campos do formulário após o envio bem-sucedido
      setDescricao('');
      setImagens([]);
    } catch (error) {
      console.error('Erro ao enviar ordem de serviço:', error);
      alert("Erro ao enviar ordem de serviço. Verifique o console para mais detalhes.");
    }
  };

  const handleImageChange = (event) => {
    // Converte a lista de arquivos para um array e atualiza o estado
    setImagens(Array.from(event.target.files));
  };

  return (
    <div className="ordem-servico-container">
      <h2>Ordem de Serviço</h2>
      <form className="ordem-servico-form" onSubmit={handleSubmit}>
        <div>
          <label>Descrição:</label>
          <textarea
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
            className="ordem-servico-input"
          />
        </div>
        <div>
          <label>Fotos:</label>
          <input
            type="file"
            multiple
            onChange={handleImageChange}
            className="ordem-servico-input"
          />
        </div>
        <div>
          {imagens.map((imagem, index) => (
            <img key={index} src={URL.createObjectURL(imagem)} alt={`Imagem ${index}`} className="ordem-servico-image" />
          ))}
        </div>
        <button type="submit" className="ordem-servico-button">Enviar</button>
      </form>
    </div>
  );
}

export default OrdemServico;
