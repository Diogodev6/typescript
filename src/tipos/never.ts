function falhar(msg: string): never {
    throw new Error(msg)
}

falhar('Descrição muito pequena')