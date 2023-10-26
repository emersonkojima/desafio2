

/* Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, 
o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas) */

let win = 700
let loss = 10
let resultRank = calculatorRank (win, loss)
let rankStatus = " "

function calculatorRank (a,b){
    calc = a - b
    return(calc)
    
}
/*
Se vitórias for menor do que 10 = Ferro */

//if(resultRank <= 10)
    
    //rankStatus = "Ferro"

/*
Se vitórias for entre 11 e 20 = Bronze */
if(resultRank >= 11 && resultRank <= 20)
    
    rankStatus = "Bronze"

/*
Se vitórias for entre 21 e 50 = Prata */
else if(resultRank >= 21 && resultRank <= 50)
    
    rankStatus = "Prata"
/*

/*
Se vitórias for entre 51 e 80 = Ouro */
else if(resultRank >= 51 && resultRank <= 80)
    
    rankStatus = "Ouro"


/*
Se vitórias for entre 81 e 90 = Diamante */
else if(resultRank >= 81 && resultRank <= 90)
    
    rankStatus = "Diamante"


/*

Se vitórias for entre 91 e 100= Lendário */
else if(resultRank >= 91 && resultRank <= 100)
    
    rankStatus = "Lendário"

/*
Se vitórias for maior ou igual a 101 = Imortal */
else if (resultRank >= 101)
    rankStatus = "Imortal"

//Se vitórias for menor do que 10 = Ferro 
//Adicionado ao final pois numero negativo estava dando como Imortal
//Então como todo numero menor que 10 é ferro, add como else
else
    rankStatus = "Ferro"

console.log("O Herói tem de saldo de " + win ,"vitorias e está no nível de " + rankStatus)

//Add resultRank em console.log para ver o resultado do calculo
//console.log(resultRank)