interface Usuario {
    id?: number
    nome: string
    email: string
    senha?: string
}

const usuarioLogado: Usuario = {
    id: 123,
    nome: 'João',
    email: 'joao@zmail.com',
    senha: '123456'
}

console.log(usuarioLogado.id)
console.log(usuarioLogado.nome)
console.log(usuarioLogado.email)

const usuarioOpcional: Partial<Usuario> = {
    id: 123,
    nome: 'Jaime',
    senha: '654321'
}

console.log(usuarioOpcional.id)
console.log(usuarioOpcional.nome)
console.log(usuarioOpcional.email)
console.log(usuarioOpcional.senha)

const usuarioCompleto: Required<Usuario> = {
    id: 123,
    nome: 'Ana',
    email: 'ana@ana.land',
    senha: '123456'
}

console.log(usuarioCompleto.id)
console.log(usuarioCompleto.nome)
console.log(usuarioCompleto.email)
console.log(usuarioCompleto.senha)


export {}