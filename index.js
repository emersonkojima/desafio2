

/* Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, 
o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas) */

let win = 30
let loss = 10
let resultRank = calculatorRank (win, loss)
let mensagem = "Seu rank é "
let rankStatus = "neutro"

function calculatorRank (a,b){
    calc = a - b
    return(calc)
    
}
/*
Se vitórias for menor do que 10 = Ferro */

if(resultRank <= 10)
    
    rankStatus = "Ferro"

/*
Se vitórias for entre 11 e 20 = Bronze */
if(resultRank >= 11 && resultRank <= 20)
    
    rankStatus = "Bronze"

/*
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal */

console.log("O Herói tem de saldo de " + win ,"vitorias e está no nível de " + rankStatus)
console.log("valor do calculo " + resultRank)