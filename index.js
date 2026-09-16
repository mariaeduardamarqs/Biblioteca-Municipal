import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { LivroFisico, Ebook} from './TiposDeItens.js';
import {Leitor} from './Leitor.js'; //n tinha ido pq precisava ser declarado!
import {ItemBase} from './ItemBase.js';

async function iniciarSistema(){} //para q n pare a execução esperando retorno
const rl = readline.createInterface({ input, output });


console.log("=== Sistema de Gestão da Biblioteca ===");

const nome = await rl.question("Digite seu nome: ");
const idade = parseInt(await rl.question("Informe sua idade: "));
const leitor = new Leitor(nome,idade);//puxa as variaveis


console.log("\n Selecione qual item você deseja cadastrar: ");
console.log("1- Livro Físico.");
console.log("2- E-book.");

    const tipos = parseInt(await rl.question("Digite a opção escolhida: "));
    const titulo = await rl.question("Digite o título: ");
    const nomeAutor = await rl.question("Digite o nome do autor(a): ");
    const anoPublicacao = parseInt(await rl.question("Digite o ano de publicação: ")); 
         

let item;
switch (tipos){
    case 1:// 
        const corredor = parseInt(await rl.question("Digite o número do corredor: "));
        item = new LivroFisico(titulo, nomeAutor, anoPublicacao); 
          break;
    case 2:
        const formatoArquivo = await rl.question("Digite a formatação desejada: ");
        item = new Ebook(titulo, nomeAutor, anoPublicacao);
        break;

    default:
        console.log("Opção inválida. Encerrando o programa.");
        rl.close();
        process.exit();// 
}
    {
        const diasAtrasos = parseFloat(await rl.question("Quantos dias de atraso tem essa devolução? "));
        const totalAtrasos = item.calcularMulta(diasAtrasos);
            console.log(`\n O total de dias de atrasos são: R$ ${totalAtrasos.toFixed(2)}`);
}
rl.close();