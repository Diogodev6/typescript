type Usuario = { nome: string, email: string }

const usuarios: Usuario[] = [
    { nome: 'Joao', email: 'joao@zmail.com' },
    { nome: 'pedro', email: 'pedro@zmail.com' },
    { nome: 'maria', email: 'maria@zmail.com' },
    { nome: 'gustavo', email: 'gustavo@zmail.com' },
    { nome: 'amanda', email: 'amanda@zmail.com' },
    { nome: 'rafaela', email: 'rafaela@zmail.com' },   
]

function buscarPorEmail(email: string): Usuario | null {
    return usuarios.find(u => u.email === email) ?? null
}

console.log(buscarPorEmail('maria@zmail.com'))
console.log(buscarPorEmail('mara@zmail.com'))