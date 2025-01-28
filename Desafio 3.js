class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    heroiEscolhido() {
        console.log(`${this.nome} tem ${this.idade} e é ${this.tipo}.`);
        this.armaHeroi();
    }

    armaHeroi() {
        let ataque = "";
        if (this.tipo === "mago") {
            ataque = "usou magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "usou espada";
        } else  if(this.tipo === "monge"){
            ataque = "usou artes marciais"
        } else if (this.tipo === "ninja"){
            ataque = "usou shuriken"
        }
    
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    
    }

}

let escolha = new Heroi("Gandalf", "152 anos", "mago");

escolha.heroiEscolhido()
