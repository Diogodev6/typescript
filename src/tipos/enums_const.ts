const Erros = {
    NOME_NULO: 'nome_nulo',
    EMAIL_NAO_ENCONTRADO: 'email_nao_encontrado',
    URL_INVALIDA: 'url_invalida',
} as const

let erro: string
erro = Erros.NOME_NULO
erro = 'cpf_invalido'

console.log(erro)