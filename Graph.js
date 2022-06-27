
let tab = ['.', '.', '.', '.', '.', '.', '.', '.', '.']
let pos = [tab]
// const o_number = 4
// const x_number = 5


// function BFS_caminho(cabeca, final, jogadasanteriores) {
//     var posatual = jogadasanteriores.length
//     var resposta;
//     aux = Array.from(cabeca)
//     for (i = 0; i < posatual; i++) {
//         aux = aux.filhos[jogadasanteriores[i]]
//     }
//     possiveis = aux.filhos.length
//     for (i = 0; i < possiveis; i++) {
//         if (aux.filhos[i].result == final) {
//             resposta = jogadasanteriores.concat(i)
//             return resposta
//         }
//     }
// }


function print(tab) {
    console.log(tab[0] + " | " + tab[1] + " | " + tab[2])
    console.log("--  --  --")
    console.log(tab[3] + " | " + tab[4] + " | " + tab[5])
    console.log("--  --  --")
    console.log(tab[6] + " | " + tab[7] + " | " + tab[8])
}

class no {
    constructor (tab,filhos = []) {
    this.valor =  tab,
    this.filhos = filhos,
    this.result = null,
    this.points = 0
    }
}

function Valida(tab) {
    if ((tab[0] == tab[1]) && (tab[1] == tab[2]) && tab[1] != '.')return tab[1]
    if ((tab[3] == tab[4]) && (tab[4] == tab[5]) && tab[4] != '.') return tab[4]
    if ((tab[6] == tab[7]) && (tab[7] == tab[8]) && tab[7] != '.') return tab[7]
    if ((tab[0] == tab[3]) && (tab[3] == tab[6]) && tab[3] != '.') return tab[3]
    if ((tab[1] == tab[4]) && (tab[4] == tab[7]) && tab[4] != '.') return tab[4]
    if ((tab[2] == tab[5]) && (tab[5] == tab[8]) && tab[5] != '.') return tab[5]
    if ((tab[0] == tab[4]) && (tab[4] == tab[8]) && tab[4] != '.') return tab[4]
    if ((tab[2] == tab[4]) && (tab[4] == tab[6]) && tab[4] != '.') return tab[4]
    if (tab.filter( valor => valor == '.').length == 0) return 'velha'
    return false;
}

function gerarfilhos(No, preencher) {
    if(No != undefined){
    var aux = No.valor
    if(Valida(aux) == false){
        for (let i = 0; i < 9; i++) {
            if (aux[i] == '.') {
                aux2 = Array.from(aux)
                aux2[i] = preencher
                filho = new no(aux2)
                No.filhos.push(filho)
            }
        }
    }
    else {
        No.result = Valida(aux)
        if(No.result == 'velha'){
            No.points = 1
        }
        else if (No.result == 'X') {
            No.points = -10
        }
        else if (No.result == 'O') {
            No.points = 10
        }
    }
        for (let i = 0; i < No.filhos.length; i++) {
            preencher == 'X' ? gerarfilhos(No.filhos[i], 'O') : gerarfilhos(No.filhos[i], 'X')
    }
    }
}

function gerarPossibilidades(tab) {
    aux = tab;
    cabeca = new no(aux)
    No = cabeca
    gerarfilhos(No, 'X')
    return cabeca
}


function Soma_Pontos(cabeca) {
        if (cabeca != []) {
            tam = (cabeca.filhos).length
            for (let i = 0; i < tam; i++) {
                cabeca.points += Soma_Pontos(cabeca.filhos[i])
                tam = (cabeca.filhos.length)
            }
        }
    return cabeca.points
}

possibilidades = gerarPossibilidades(tab)
Soma_Pontos(possibilidades)
console.log((possibilidades).filhos[7].filhos[4].filhos[0].filhos[1])
                         
