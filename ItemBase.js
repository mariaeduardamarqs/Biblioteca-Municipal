export class ItemBase {
    #anoPublicacao;

    constructor(titulo, autor, anoPublicacao){
        if(new.target === ItemBase){
        throw new Error ("[ERRO] Não é permitido cadastrar um item genérico!"); 
    }
    this.titulo = titulo;
    this.autor = autor;
    this.anoPublicacao = anoPublicacao;
}

get anoPublicacao() {return this.#anoPublicacao};

set anoPublicacao(publicacaoAno){
    if (publicacaoAno < 1000 || publicacaoAno > 2026) {
        throw new Error("[BLOQUEIO] O ano da publicação não deve ser menor que 1000 e nem maior que 2026.");
    }
    this.#anoPublicacao = anoPublicacao;
}

    calcularMulta(diasAtrasos){
        throw new Error ("[ERRO] A classe filha precisa implementar o 'calcularMulta(diasAtrasos)'!");
       }
    }
