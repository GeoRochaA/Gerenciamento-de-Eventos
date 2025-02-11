import sqlite3 from "sqlite3";

const db = new sqlite3.Database('./data/eventos.db'); 
// comando para o nosso banco de dados e colocar só o nome

function criarTabelaUsuario(){
   const query  = `   
      CREATE TABLE IF NOT EXISTS usuarios (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       nome TEXT,
       email TEXT,
       senha TEXT
       );
   `
 //consulta -> query
 //CRIAR TABELA SE NÃO EXISTIR -> CREATE TABLE IF NOT EXISTS 
 // função anonima -> =>

 db.run(query, (erro) => {
    if (erro) {
        console.log(`Erro ao criar a tabela:  ${erro}`)
    } else {
        console.log(`Tabela criada com sucesso!`)
    }
})

}
// id tmb
function inserirUsuarios(nome: string, email: string, senha: string){
  const query =  `
    INSERT INTO usuarios (nome, email, senha)
    VALUES (?, ?, ?)
  `
  db.run(query, [nome, email, senha], function (erro) {
    if (erro) {
        console.log(`Erro ao inserir dados: ${erro}`)
    } else {
        console.log(`Usuário ${this.lastID} cadastro com sucesso!`)
    }
  })

}

function listarTodosUsuarios(){
  const query = `Select * from usuarios`
  db.all(query, (erro, linhas) => {
    if (erro) {
        console.log(`Erro ao listar dados: ${erro}`)
    } else {
        console.log (linhas)
    }
  })
} 

function listarUsuarioPorId(id: number){
   const query = `SELECT * FROM usuarios WHERE id = ?`
   db.get(query, [id], (erro, linha) => {
    if (erro) {
       console.log(`Erro ao listar usuario: ${erro}`)
    } else if (linha) {
      console.log(linha)
    } else {
       console.log(`Nenhum usuário encontrado com o id ${id}`)
    }
   })
}

function deletarUsuario(id:number){
  const query = `DELETE FROM  usuarios WHERE id = ?`
  db.run(query, [id], function (erro) {
    if(erro) {
       console.log(`Erro ao deletar usuario? ${erro}`)
    } 
    else {
       console.log(`Usuário ${id} deletado com sucesso!`)
    }
  }) 
}

function alterarUsuario(id: number, nome: string, email: string, senha: string){
  const query = `
    UPDATE usuarios
    SET nome = ?, email = ?, senha = ?
    WHERE id = ?
  `

  db.run(query, [nome, email, senha, id], function (erro) {
    if (erro) {
      console.group(`Erro ao alterar o usuário ${id}`)
    } 
    else if (this.changes === 0) {
      console.log(`Erro ao alterar o usuário ${id}`)
    } 
    else {
      console.log(`Dados do usuário ${id} alterados com sucesso!`)
    }
  })
}

//alterarUsuario (5, "Marco Rocha", "marcoprogramador@gmail.com", "xjnfqaofnao")
//listarUsuarioPorId(5)

//deletarUsuario(1)
//listarUsuarioPorId(1)
//criarTabelaUsuario()

//inserirUsuarios("Marco", "Marco@gmail.com", "12222278")
//inserirUsuarios("João", "Joao@gmail.com", "uswgfwbfpoh")
//inserirUsuarios("Geovanna", "Rochageovanna3@gmail.com", "nbsabv0ha")
//inserirUsuarios("Amanda Beatrica", "Amanda@gmail.com", "ssvposhvo78")
//listarTodosUsuarios()