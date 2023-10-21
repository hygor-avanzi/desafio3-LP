
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Hero {
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    exit(){
        console.log(`O ${this.tipo} atacou usando ${this.ataque}`);
    }
}

function iniciarQuest(){
    rl.question("Digite o seu nome: ", (nome) => {
        rl.question("Digite a sua idade: ", (idade) => {
            rl.question("Digite a sua classe (Guerreiro, Mago, Monge, Ninja, Arqueiro, Atirador, Tanque, Assassino, Necromante): ", (tipo) => {
                tipo.toLowerCase()
                tipo = tipo.charAt(0).toUpperCase() + tipo.slice(1) 
                let jogador = new Hero(nome, idade, tipo)
                
                switch(jogador.tipo) {
                    case "Guerreiro":
                        jogador.ataque = "Espada"
                        break
                    case "Mago":
                        jogador.ataque = "Magia"
                        break
                    case "Monge":
                        jogador.ataque = "Artes Marciais"
                        break
                    case "Ninja":
                        jogador.ataque = "Shuriken"
                        break
                    case "Arqueiro":
                        jogador.ataque = "Chuva de Flechas"
                        break
                    case "Atirador":
                        jogador.ataque = "Revolver"
                        break
                    case "Tanque":
                        jogador.ataque = "Martelo Gitante"
                        break
                    case "Assassino":
                        jogador.ataque = "Adagas Vampiricas"
                        break
                    case "Necromante":
                        jogador.ataque = "Chamado dos Mortos"
                        break
                    default:
                        console.log("Classe inválida! Digite uma classe existente.");
                        return iniciarQuest()
                }
                jogador.exit()
                repetirPerguntas()
            });
        });
    });
}

function repetirPerguntas(){
    rl.question("Deseja tentar novamente? (S/n)", (resposta) => {
        if (resposta.toLowerCase() === "s") {
            iniciarQuest();
        } else if (resposta.toLowerCase() === "n"){
            console.log("Adeus Invocador, até a próxima.");
            rl.close();
        } else {
            console.log("Opção Inválida. Por favor, digite S ou N.");
            repetirPerguntas();
        }
    });
}

iniciarQuest()
