import React from 'react';
import './Cliente.css';

function Cliente() {
  // Função para lidar com o envio do formulario
  const handleSubmit = (event) => {
    event.preventDefault(); // Impede o comportamento padrão de envio do formulario, evitando recarregar a pagina
    alert("Cliente cadastrado com sucesso!"); // Mostra um alerta indicando que o cadastro foi bem sucedido
  };

  // Renderiza o formulário de cadastro do cliente
  return (
    <div>
      <h2>Cadastro de Cliente</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input type="text" name="nome" required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label>Telefone:</label>
          <input type="text" name="telefone" />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Cliente;
