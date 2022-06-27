
let tab = ['.', '.', '.', '.', '.', '.', '.', '.', '.']
let PosJogadas = []

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

export function gerarPossibilidades(tab) {
    aux = tab;
    cabeca = new no(aux)
    No = cabeca
    gerarfilhos(No, 'X')
    return cabeca
}


export function Soma_Pontos(cabeca) {
        if (cabeca != []) {
            tam = (cabeca.filhos).length
            for (let i = 0; i < tam; i++) {
                cabeca.points += Soma_Pontos(cabeca.filhos[i])
                tam = (cabeca.filhos.length)
            }
        }
    return cabeca.points
}

export function comparajogadas( PosJogadas, possibilidades) {
    let aux = Object.assign(Object.create(Object.getPrototypeOf(possibilidades)), possibilidades)
    for (let i = 0; i < PosJogadas.length; i++) {
        aux = aux.filhos[PosJogadas[i]]
    }
    let max = aux.filhos[0].points
    let posmax = 0
    for (let i = 0; i < aux.filhos.length; i++) {
        if (aux.filhos[i].points > max) {
            posmax = i
            max = aux.filhos[i].points
        }
    }
    PosJogadas.push(posmax)
    return aux.filhos[posmax].valor
}

possibilidades = gerarPossibilidades(tab)
Soma_Pontos(possibilidades)
PosJogadas.push(0)

jogoAtual = [
    'X', '.', '.',
    '.', '.', '.',
    '.', '.', '.'
]

export function achaNo(jogo, posJogadas, possibilidades) {
    let aux = Object.assign(Object.create(Object.getPrototypeOf(possibilidades)), possibilidades)
    for (let i = 0; i < PosJogadas.length; i++) {
        aux = aux.filhos[PosJogadas[i]]
    }
    
    for (let i = 0; i < aux.filhos.length; i++) {
        if (comparaJogoIgual(aux.filhos[i].valor, jogo)) {
            return i;
        }
    }

}


function comparaJogoIgual(jogo1, jogo2) {
    for (let i = 0; i < 9; i++) {
        if(jogoAtual[i] != novoJogo[i])
            return false;
    }
    return true;
    
}

export function retornaPosicaoJogada(jogoAtual, novoJogo) {
    console.log(novoJogo)
    for (let i = 0; i < 9; i++) {
        if(jogoAtual[i] != novoJogo[i])
            return i;
    }
    
}

novoJogo = comparajogadas(PosJogadas, possibilidades)
console.log(retornaPosicaoJogada(jogoAtual, novoJogo))





