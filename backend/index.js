// Importando os módulos necessários
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

// Inicializando o aplicativo Express
const app = express();
const port = 3000;

// Configurando o banco de dados SQLite e criando uma conexão
const db = new sqlite3.Database(':memory:');

// Criando as tabelas
db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS clientes (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, email TEXT, telefone TEXT)");
    db.run("CREATE TABLE IF NOT EXISTS tecnicos (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, email TEXT, especialidade TEXT)");
    db.run("CREATE TABLE IF NOT EXISTS produtos (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, descricao TEXT, preco REAL)");
    db.run("CREATE TABLE IF NOT EXISTS ordens_de_servico (id INTEGER PRIMARY KEY AUTOINCREMENT, descricao TEXT, fotos TEXT)");
});

app.use(cors());

// Middleware para permitir o uso de JSON no corpo das solicitações
app.use(express.json());

// Rotas para cadastro de clientes
app.post('/clientes', (req, res) => {
    const { nome, email, telefone } = req.body;
    db.run("INSERT INTO clientes (nome, email, telefone) VALUES (?, ?, ?)", [nome, email, telefone], function (err) {
        if (err) {
            console.error(err.message);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json({ message: 'Cliente cadastrado com sucesso', id: this.lastID });
        }
    });
});

app.get('/clientes', (req, res) => {
    db.all("SELECT * FROM clientes", (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json(rows);
        }
    });
});

// Rotas para cadastro de técnicos
app.post('/tecnicos', (req, res) => {
    const { nome, email, especialidade } = req.body;
    db.run("INSERT INTO tecnicos (nome, email, especialidade) VALUES (?, ?, ?)", [nome, email, especialidade], function (err) {
        if (err) {
            console.error(err.message);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json({ message: 'Técnico cadastrado com sucesso', id: this.lastID });
        }
    });
});

app.get('/tecnicos', (req, res) => {
    db.all("SELECT * FROM tecnicos", (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json(rows);
        }
    });
});

// Rotas para cadastro de produtos
app.post('/produtos', (req, res) => {
    const { nome, descricao, preco } = req.body;
    db.run("INSERT INTO produtos (nome, descricao, preco) VALUES (?, ?, ?)", [nome, descricao, preco], function (err) {
        if (err) {
            console.error(err.message);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json({ message: 'Produto cadastrado com sucesso', id: this.lastID });
        }
    });
});

app.get('/produtos', (req, res) => {
    db.all("SELECT * FROM produtos", (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json(rows);
        }
    });
});

// Rotas para cadastro de ordens de serviço
app.post('/ordens_de_servico', (req, res) => {
    const { descricao, fotos } = req.body;
    db.run("INSERT INTO ordens_de_servico (descricao, fotos) VALUES (?, ?)", [descricao, fotos], function (err) {
        if (err) {
            console.error(err.message);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json({ message: 'Ordem de serviço cadastrada com sucesso', id: this.lastID });
        }
    });
});

app.get('/ordens_de_servico', (req, res) => {
    db.all("SELECT * FROM ordens_de_servico", (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json(rows);
        }
    });
});

// Iniciando o servidor
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
