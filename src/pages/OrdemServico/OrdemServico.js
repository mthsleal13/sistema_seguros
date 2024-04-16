import React, { useState } from 'react';

function OrdemServico() {
  const [descricao, setDescricao] = useState('');
  const [imagens, setImagens] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você enviaria a descrição e as imagens para o backend
    alert("Ordem de Serviço enviada com sucesso!");
  };

  const handleImageChange = (event) => {
    setImagens([...event.target.files]);
  };

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
