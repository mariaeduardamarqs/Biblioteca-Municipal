import { ItemBase } from './ItemBase.js'; // dentro da chave está a classe

export class LivroFisico extends ItemBase {
    constructor(titulo, autor, anoPublicacao, corredor){
        super(titulo, autor, anoPublicacao);
        this.corredor = corredor;
    }

    calcularMulta(diasAtrasos){
        let custo = (diasAtrasos * 2.50);
        console.log("=========================================================================");
        console.log("[ATENÇÃO] Esse custo está sendo cobrado devido a multa do livro físico.");
        console.log("=========================================================================");
        return custo;// boa mas desnecessário
    }
}

export class Ebook extends ItemBase {
    constructor(titulo, autor, anoPublicacao, formatoArquivo){
        super(titulo, autor, anoPublicacao);
        this.formatoArquivo = formatoArquivo;
    }
        
    calcularMulta(diasAtrasos){
        let custo = (diasAtrasos * 2.50);
        console.log("=====================================================================");
        console.log("[SISTEMA] Arquivo bloqueado. Acesso revogado no dispositivo do leitor");
        console.log("=====================================================================");
        return 0; 
    }
}
