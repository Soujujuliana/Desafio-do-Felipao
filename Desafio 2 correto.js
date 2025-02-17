function rankeadas(vitorias, derrotas) {
    // Calculando o saldo
    let saldoVitorias = vitorias - derrotas;

    // Determinando o nível baseado nas vitórias
    let nivel;
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 10 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Exibindo a mensagem final
    console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);
}

// Testando a função com valores de vitórias e derrotas
rankeadas(55, 30);  // Exemplo de saída: "O Herói tem de saldo de 25 está no nível de Ouro"
