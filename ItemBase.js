export class ItemBase {
    #anoPublicacao;

    constructor(titulo, autor, anoPublicacao){
        if(new.target === ItemBase){ // se o novo "ponto" for igual ao ItemBase
        throw new Error ("[ERRO] Não é permitido cadastrar um item genérico!"); 
    }
    this.titulo = titulo;
    this.autor = autor;
    this.#anoPublicacao = anoPublicacao;
}

get anoPublicacao() {return this.#anoPublicacao}; //fazer leitura de uma variável com seu valor

verificarAnoPublicacao(publicacaoAno){ //para funcionar
    if (publicacaoAno < 1000 || publicacaoAno > 2026) {
        throw new Error("ERR_ANO_FORA_DO_LIMITE");
    }
    if(typeof publicacaoAno !== 'number' || isNaN(publicacaoAno)) {
        throw new Error("ERR_TIPO_ANO_INVALIDO");
    }
    this.#anoPublicacao = anoPublicacao; // 
}

    calcularMulta(diasAtrasos){
        throw new Error ("[ERRO] A classe filha precisa implementar o 'calcularMulta(diasAtrasos)'!");
       }
    }