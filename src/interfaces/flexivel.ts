interface Flexivel {
    nome: string
    [chave: string]: number | string
}

const f1: Flexivel = {
    nome: 'Teste',
    idade: 44,
    salario: 12345,
}

console.log(f1.nome)


export {}