import { Leitor} from './Leitor.js'; // n tinha
export class AtendimentoBiblioteca {

        gerarNovoLeitor(nomeLeitor,idadeLeitor){

        try {
            console.log(`\n[ATENDIMENTO VIRTUAL] Iniciando comunicação com o servidor...`);

            const novoLeitor = new Leitor(nomeLeitor,idadeLeitor); // n tinha
            novoLeitor.validarIdade(idadeLeitor); // n tinha

            console.log("Sua carteirinha foi confirmada e gerada com sucesso!! Usufrua com consciência.")
        
        }catch(excecaoCapturada) {
            console.log("[ERRO IDENTIFICADO] A operação não pode ser concluída. ");
            this.traduzirCodigoDeErro(excecaoCapturada.message)// n tinha
           // console.log(`Código de Segurança Recebido: ${codigoDoErro.message}`); n ta indo
            
        } finally {
            console.log(" Operação de cadastro finalizada. Guichê liberado para o próximo usuário da fila.");
        }
    }     

traduzirCodigoDeErro(codigoTecnicoDoErro) {
    switch (codigoTecnicoDoErro) {
        case "ERR_TIPO_ANO_INVALIDO":
            console.log(" AVISO: O campo de ano de publicação aceita apenas caracteres numéricos.");
            break;

        case  "ERR_TIPO_IDADE_INVALIDA":
            console.log(" AVISO: O campo de idade do leitor aceitam apenas caracteres numéricos. ");
            break;

        case "ERR_ANO_FORA_DO_LIMITE":
            console.log(" AVISO DO SISTEMA: O ano de publicação do catálogo deve estar situado entre 1000 e 2026.")
            break;

        case "ERR_LEITOR_MENOR_IDADE":
            console.log(" AVISO DO SISTEMA: Leitores menores de 12 anos necessitam da presença física de um responsável para efetivação do cadastro.")
            
        default:
            console.log("AVISO SISTÊMICO: Serviço de autoatendimento indisponível. Tente mais tarde.");
        }
    }
}