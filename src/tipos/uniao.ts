let nota: number | string = 10
nota = 'A+'

console.log(nota)

type NotaOuConceito = number | 'A' | 'B' | 'C' | 'D' | 'E' | 'F'

let n1: NotaOuConceito = 7
n1 = 'C'

function imprimirNota(nota: NotaOuConceito) {
    if(typeof nota === 'number') {
        console.log(`Nota ${nota}`)
    } else {
        console.log(`Conceito ${nota}`)
    }
}

n1 = 9.5
imprimirNota(n1)