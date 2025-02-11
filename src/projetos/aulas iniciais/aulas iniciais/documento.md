interface validacaoCPF {
    valido: boolean,
    mensagem: string
}

function calcularCPF(cpf: string): validacaoCPF {

    // Satinização do CPF
    cpf = cpf.replace(/[-.]/g, "")
    
    // TODO: verificar se os caracteres são númericos
    // Expressões Regulares ?

    // Validação tamanho de caracteres
    if (cpf.length != 11) {
        return { valido: false, mensagem: "CPF inválido, pois a quantidade de caracteres é diferente de 11" }
    }

    // Os números se repetem?
    if (new Set(cpf).size === 1) {
        return { valido: false, mensagem: `CPF inválido, pois a sequência ${cpf} não é válida` }
    }

    // Verificar o 1º dígito
    let primeiroDigito = (parseInt(cpf[0]) * 10) + (parseInt(cpf[1]) * 9) + (parseInt(cpf[2]) * 8) + (parseInt(cpf[3]) * 7) + (parseInt(cpf[4]) * 6) + (parseInt(cpf[5]) * 5) + (parseInt(cpf[6]) * 4) +  (parseInt(cpf[7]) * 3) + (parseInt(cpf[8]) * 2) 

    primeiroDigito = primeiroDigito % 11

    primeiroDigito = 11 - primeiroDigito


    // Verificar o 2º dígito
    let segundoDigito = (parseInt(cpf[0]) * 11) + (parseInt(cpf[1]) * 10) + (parseInt(cpf[2]) * 9) + (parseInt(cpf[3]) * 8) + (parseInt(cpf[4]) * 7) + (parseInt(cpf[5]) * 6) + (parseInt(cpf[6]) * 5) +  (parseInt(cpf[7]) * 4) + (parseInt(cpf[8]) * 3) + (parseInt(cpf[9]) * 2)

    segundoDigito = segundoDigito % 11

    segundoDigito = 11 - segundoDigito


    if (((primeiroDigito >= 10 && parseInt(cpf[9]) == 0) ||
       (primeiroDigito < 10  && parseInt(cpf[9]) == primeiroDigito)) &&
       ((segundoDigito >= 10  && parseInt(cpf[10]) == 0) ||
       (segundoDigito < 10   && parseInt(cpf[10]) == segundoDigito))) {
        
        return { valido: true, mensagem: `O CPF ${cpf} é válido` }
    
    } else {
        return { valido: false, mensagem: `O CPF ${cpf} é inválido` }
    }
}

console.log(calcularCPF("078.944.640-58"))
console.log(calcularCPF("078.944.640-48"))
console.log(calcularCPF("99773562204"))
console.log(calcularCPF("997.735.622-14"))
console.log(calcularCPF("111.111.111-11"))
console.log(calcularCPF("222.222.222-22"))
