export class Leitor {
    #idade

    constructor(nomeLeitor, idadeLeitor){
        this.nome = nomeLeitor;
        this.#idade = idadeLeitor;
    }

    get idadeLeitor() {return this.#idade};

    validarIdade(idadeLeitor){ //FUNÇÃO
        if (typeof idadeLeitor !== 'number' || isNaN(idadeLeitor)) { // n ta puxando
            throw new Error("ERR_TIPO_IDADE_INVALIDA");
        }
        if (idadeLeitor < 12){
            throw new Error("ERR_LEITOR_MENOR_IDADE");   
        }
            this.#idade = idadeLeitor;
        }
    }
