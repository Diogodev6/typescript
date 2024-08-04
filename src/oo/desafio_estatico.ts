class DesafioEstatico {
    nota: number = 9.8 // atributo de instancia
    static notaEstatistica: number = 7.9 // atributo estatico

    // método de classe (estático)
    static executar() {
        const instancia = new DesafioEstatico()
        console.log(instancia.nota)
        console.log(DesafioEstatico.notaEstatistica)
    }
}

DesafioEstatico.executar()