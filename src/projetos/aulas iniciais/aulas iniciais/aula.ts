interface Aluno {
    nome: string,
    idade: number,
    matriculado: boolean,
    // O campo pcd é opcional
    pcd?: boolean
    endereco: {
        logradouro: string,
        numero: string,
        bairro: string,
        cidade: string,
        estado: string
    }
    disciplinas: string[]
}

let novoAluno = {
    nome: "Geovanna",
    idade: 18,
    matriculado: true,
    endereco: {
       logradouro: "Avenida Major Amarante",
       numero: "3485",
       bairro: "Centro",
       cidade: "Vilhena",
       estado: "RO"
    },
    disciplinas: ["Matemática","Programação","Português"]
}


console.log(novoAluno)
//console.log(`Nome do aluno: ${novoAluno.nome}`)
//console.log(novoAluno.endereco.cidade)
console.log(novoAluno.disciplinas[0])
// Operador ternário:
novoAluno.matriculado = false
novoAluno.matriculado ? console.log('Matriculado: sim') : console.log('Matriculado: não')