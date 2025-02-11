interface Produto {
  Nome: string,
  Preco: number,
  Categorias: string
  disponivel: boolean
  validade: string,
  quantidade: number,
  codigoProduto: string
}

let NovoProduto = {
   Nome: "Cereal",
   Preco: 17,
   Categorias: "Cereais",
   disponivel: true,
   validade: "24 meses",
   quantidade: 12,
   codigoProduto: "051420"
}

console.log(NovoProduto);