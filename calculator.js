let primeiroValor = parseInt(prompt('Digite o primeiro valor: '))
let segundoValor = parseInt(prompt('Digite o segundo valor: '))

let operacao = prompt("Digite 1 para fazer uma divisão, 2 para multiplicação, 3 para soma e 4 para subtração: ")

  if (operacao == 1) {
    let resultado = primeiroValor / segundoValor
    document.write("<h2>" + primeiroValor + " / " + segundoValor + " = " + resultado + "</h2>")
    
  } else if (operacao == 2) {
    let resultado = primeiroValor * segundoValor
    document.write("<h2>" + primeiroValor + " * " + segundoValor + " = " + resultado + "</h2>")
    
  } else if (operacao == 3) {
    let resultado = primeiroValor + segundoValor;
    document.write("<h2>" + primeiroValor + " + " + segundoValor + " = " + resultado + "</h2>")
    
  } else if (operacao == 4) {
    let resultado = primeiroValor - segundoValor;
    document.write("<h2>" + primeiroValor + " - " + segundoValor + " = " + resultado + "</h2>")
    
  } else {
    document.write("<h2>Opção inválida</h2>")
  }