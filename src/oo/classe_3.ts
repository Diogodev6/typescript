import Validador from "./Validador"

class Produto {
    constructor(readonly id: number, readonly nome: string, readonly preco: number, readonly desc: number = 0) {  
        Validador.maiorQueZero(id, 'Id inválido')
        Validador.tamanhoEntre(nome, 3, 250, 'Nome Inválido')
        Validador.maiorQueZero(preco, 'preço inválido')
        Validador.entre(desc, 0, 0.8, 'Desconto inválido')
    }

    get precoFinal() {
        return this.preco * (1 - this.desc)
    }

}

const p1 = new Produto(1, 'Caneta', 12.5, 0.1)
console.log(p1.nome, p1.precoFinal)

const p2 = new Produto(2, 'Notebook', 7860.78)
console.log(p2.nome, p2.preco)

console.log(Validador.ERRO_DESCONHECIDO)

export {}