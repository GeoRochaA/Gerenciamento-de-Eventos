import sqlite3 from "sqlite3";
import readline from "readline";

const db = new sqlite3.Database("./data/Dados.db");


function criarTabelas(): void {
    db.run(`
        CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT,
            email TEXT UNIQUE,
            senha TEXT
        )
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS eventos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT,
            data TEXT,
            usuario_id INTEGER,
            FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
        )
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS logs (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            acao TEXT,
            usuario_id INTEGER,
            data_hora TEXT,
            FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
        )
    `);
}

criarTabelas();

function adicionarUsuario(nome: string, email: string, senha: string): void {
    const query = 
    `INSERT INTO usuarios (nome, email, senha) 
     VALUES (?, ?, ?)
    `;
    db.run(query, [nome, email, senha], function (erro) {
        if (erro) {
            console.log(`Erro ao inserir usuário: ${erro}`);
        } else {
            console.log(`Usuário ${this.lastID} cadastrado com sucesso!`);
            registrarLog("Usuário cadastrado", this.lastID);
        }
    });
}

function listarUsuarios(): void {
    db.all(`SELECT * FROM usuarios`, (erro, linhas) => {
        if (erro) {
            console.log(`Erro ao listar usuários: ${erro}`);
        } else {
            console.table(linhas);
        }
    });
}

function listarUsuarioPorId(id: number): void {
    db.get(`SELECT * FROM usuarios WHERE id = ?`, [id], (erro, linha) => {
        if (erro) {
            console.log(`Erro ao buscar usuário: ${erro}`);
        } else if (linha) {
            console.log(linha);
        } else {
            console.log(`Nenhum usuário encontrado com o id ${id}`);
        }
    });
}

function deletarUsuario(id: number): void {
    db.run(`DELETE FROM usuarios WHERE id = ?`, [id], function (erro) {
        if (erro) {
            console.log(`Erro ao deletar usuário: ${erro}`);
        } else {
            console.log(`Usuário ${id} deletado com sucesso!`);
            registrarLog("Usuário deletado", id);
        }
    });
}

function adicionarEvento(nome: string, data: string, usuario_id: number): void {
    const query = `INSERT INTO eventos (nome, data, usuario_id) VALUES (?, ?, ?)`;
    db.run(query, [nome, data, usuario_id], function (erro) {
        if (erro) {
            console.log(`Erro ao inserir evento: ${erro}`);
        } else {
            console.log(`Evento ${this.lastID} cadastrado com sucesso!`);
            registrarLog("Evento cadastrado", usuario_id);
        }
    });
}

function listarEventos(): void {
    db.all(`SELECT * FROM eventos`, (erro, linhas) => {
        if (erro) {
            console.log(`Erro ao listar eventos: ${erro}`);
        } else {
            console.table(linhas);
        }
    });
}

function listarEventoPorId(id: number): void {
    db.get(`SELECT * FROM eventos WHERE id = ?`, [id], (erro, linha) => {
        if (erro) {
            console.log(`Erro ao buscar evento: ${erro}`);
        } else if (linha) {
            console.log(linha);
        } else {
            console.log(`Nenhum evento encontrado com o id ${id}`);
        }
    });
}

function deletarEvento(id: number): void {
    db.run(`DELETE FROM eventos WHERE id = ?`, [id], function (erro) {
        if (erro) {
            console.log(`Erro ao deletar evento: ${erro}`);
        } else {
            console.log(`Evento ${id} deletado com sucesso!`);
            registrarLog("Evento deletado", id);
        }
    });
}

function registrarLog(acao: string, usuario_id: number): void {
    const data_hora = new Date().toISOString();
    const query = `INSERT INTO logs (acao, usuario_id, data_hora) VALUES (?, ?, ?)`;
    db.run(query, [acao, usuario_id, data_hora], function (erro) {
        if (erro) {
            console.log(`Erro ao registrar log: ${erro}`);
        }
    });
}

export { adicionarUsuario, listarUsuarios, listarUsuarioPorId, deletarUsuario, adicionarEvento, listarEventos, listarEventoPorId, deletarEvento };

//adicionarUsuario("João Silva", "joao@email.com", "senha123");
//adicionarUsuario("Maria Souza", "maria@email.com", "senha456");


//adicionarEvento("Imersão TypeScript", "2025-03-10", 1);
//adicionarEvento("Imersão de IA", "2025-04-15", 2);

//listarEventoPorId(1)
//deletarUsuario(1)
//listarUsuarios()