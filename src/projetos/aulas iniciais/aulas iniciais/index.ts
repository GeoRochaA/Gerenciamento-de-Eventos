let idade: number = 18;
let nome: string = "Maria";
let pagamentoEfetuado: boolean = false; 
//true or false -> boolean


idade = 18;
nome = "Geovanna"
pagamentoEfetuado = true

//console.log(`Nome: ${nome} tem ${idade} ano(s)`)

// Enum
enum Direcao {
    Norte,
    Sul,
    Leste,
    Oeste
}
let direcaoTomada: Direcao = Direcao.Norte
console.log(`Direção tomada: ${direcaoTomada}`)

enum Cores{
    azul = "#0000FF",
    vermelho = "#FF0000",
    verde = "#00FF00",
    amarelo = "#FFFF00"
}
let corPrimaria: Cores = Cores.verde
console.log(corPrimaria)

//09/10 -> AULA 02 (ENUM)

/* 
  EXEMPLO:
  enum Status {
     EmExecucao,
     Pendente,
     Concluido,
  }
 let meuStatus: Status = Status.EmExecucao;
 console.log(meuStatus); //Saída:
*/

//———————————-Exercício 01———————————-
function calcularArea(largura: number,altura: number): number {
    return largura * altura;
}
let largura = 5;
let altura = 10;
console.log("A área do retângulo:",calcularArea(largura,altura))

//———————————-Exercício 02 -> verificar pq não consegui usar o template
function CalcularIdade(anoNascimento: number,anoAtual: number,idadePessoa: string) {
 return anoAtual - anoNascimento 
}
let anoNascimento = 2006;
let idadePessoa = "18 anos";
let anoAtual = 2024;
console.log("Sua idade é:",CalcularIdade(anoNascimento,anoAtual,idadePessoa))

//———————————-Exercício 03———————————-
function verificarAcesso(ehAdmin: boolean): string {
    if (ehAdmin) {
        return `Acesso concedido. Bem-vindo ao sistema administrativo.`;
    } else {
        return `Acesso negado. Você não tem permissão para acessar o sistema.`;
    }
}
const usuarioEhAdmin = true;
console.log(verificarAcesso(usuarioEhAdmin));
const usuarioNaoEhAdmin = false;
console.log(verificarAcesso(usuarioNaoEhAdmin));

//———————————-Exercício 04———————————-
enum Nota {
    A = "A",
    B = "B",
    C = "C",
    D = "D",
    F = "F"
}
function avaliarNota(nota: Nota): string {
    switch (nota) {
        case Nota.A:
            return "Excelente";
        case Nota.B:
            return "Bom";
        case Nota.C:
            return "Satisfatório";
        case Nota.D:
            return "Insatisfatório";
        case Nota.F:
            return "Reprovado";
        default:
            return "Nota inválida";
    }
}
console.log(avaliarNota(Nota.A)); 
console.log(avaliarNota(Nota.B)); 
console.log(avaliarNota(Nota.F)); 

//———————————-Exercicio 05———————————-
enum Tarefa{
    nota01 = "Alta",
    nota02 = "Média",
    nota03 = "Baixa"
}
function relatorioTarefa(tarefa: Tarefa): string {
    switch (tarefa) {
     case Tarefa.nota01:
         return "Essa tarefa é urgente!";
     case Tarefa.nota02:
         return "Essa tarefa deve ser feita em breve.";
     case Tarefa.nota03:
         return "Essa tarefa pode ser feita depois."
     default:
         return "Sem definição";
    }
}
console.log(relatorioTarefa(Tarefa.nota01)); 
console.log(relatorioTarefa(Tarefa.nota02)); 
console.log(relatorioTarefa(Tarefa.nota03)); 
