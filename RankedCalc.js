let wins = parseInt(prompt("Digite quantas vitórias o herói tem:"));
let loses = parseInt(prompt("Digite quantas derrotas o herói tem:"));

function RankCalc (loses, wins) {
    let saldoVitorias;
    let nivel;

    saldoVitorias = wins - loses;

    if (saldoVitorias <= 10) {
        nivel = "Ferro";
    } else if (saldoVitorias > 10 && saldoVitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias > 20 && saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias > 50 && saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias > 80 && saldoVitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias > 90 && saldoVitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return {saldoVitorias, nivel};
}

let msg = `O Herói tem de saldo de ${RankCalc(loses, wins).saldoVitorias} está no nível de ${RankCalc(loses, wins).nivel}`;

console.log(msg);