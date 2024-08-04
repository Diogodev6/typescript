class Curso {
    constructor(readonly id: number, public nome?: string) {
        this.id = id
        if (id < 1) throw new Error('Id inválido')
    }

}

const c1 = new Curso(123)
// c1.id = 456
c1.nome = 'Iniciando com TypeScript'
console.log(c1.id)
console.log(c1.nome)

const c2 = new Curso(456, 'TypeScript Avançado')
console.log(c2.id)
console.log(c2.nome)

export {}