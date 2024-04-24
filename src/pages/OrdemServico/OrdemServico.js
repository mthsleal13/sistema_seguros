import React, { useState } from 'react';
import './OrdemServico.css';

function OrdemServico() {
  const [descricao, setDescricao] = useState(''); // Estado para armazenar a descrição da ordem de serviço
  const [imagens, setImagens] = useState([]); // Estado para armazenar imagens anexadas

  // Função para lidar com o envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault(); // Impede o comportamento padrão de envio do formulário
    alert("Ordem de Serviço enviada com sucesso!"); // Exibe um alerta ao usuário após o envio
  };

  // Função para lidar com a mudança de imagens
  const handleImageChange = (event) => {
    setImagens([...event.target.files]); // Atualiza o estado com os arquivos selecionados
  };

  // Renderiza o componente de ordem de serviço
  return (
    <div>
      <h2>Ordem de Serviço</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Descrição:</label>
          <textarea
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Fotos:</label>
          <input
            type="file"
            multiple
            onChange={handleImageChange}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default OrdemServico;
