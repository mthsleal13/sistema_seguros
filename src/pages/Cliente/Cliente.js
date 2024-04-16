import React from 'react';

function Cliente() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do formulário para o backend
    alert("Cliente cadastrado com sucesso!");
  };

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
