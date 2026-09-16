export class Leitor {
    #idade

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    get idade() {return this.#idade};

    set idade(idadeLeitor){
        if ( idadeLeitor < 12){
            throw new Error("[BLOQUEIO] O leitor menor de 12 anos precisa do responsável para o cadastro.");
            
        }
        else {
            this.#idade = idadeLeitor;
        }
    }
}