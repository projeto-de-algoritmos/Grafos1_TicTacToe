
let tab = ['.', '.', '.', '.', '.', '.', '.', '.', '.']
let pos = [tab]
const o_number = 4
const x_number = 5

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
        this.filhos = filhos
        this.result = null
    }
}

function Valida(tab) {
    if ((tab[0] == tab[1]) && (tab[1] == tab[2]) && tab[1] != '.') return tab[1]
    if ((tab[3] == tab[4]) && (tab[4] == tab[5]) && tab[4] != '.') return tab[4]
    if ((tab[6] == tab[7]) && (tab[7] == tab[8]) && tab[7] != '.') return tab[7]
    if ((tab[0] == tab[3]) && (tab[3] == tab[6]) && tab[3] != '.') return tab[3]
    if ((tab[1] == tab[4]) && (tab[4] == tab[7]) && tab[4] != '.') return tab[4]
    if ((tab[2] == tab[5]) && (tab[5] == tab[8]) && tab[5] != '.') return tab[5]
    if ((tab[0] == tab[4]) && (tab[4] == tab[8]) && tab[4] != '.') return tab[4]
    if ((tab[2] == tab[4]) && (tab[4] == tab[6]) && tab[4] != '.') return tab[4]
  
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
    }
        for (let i = 0; i < No.filhos.length; i++) {
            preencher == 'X' ? gerarfilhos(No.filhos[i], 'O') : gerarfilhos(No.filhos[i], 'X')
    }
    }
}

function gerarPossibilidades(tab) {
    aux = tab;
    cabeca = new no(aux)
    for ( i = 0; i < 9; i++) {
            if (aux[i] == '.') {
                aux2 = Array.from(aux)
                aux2[i] = 'X'
                filho = new no(aux2)
                cabeca.filhos.push(filho)
            }
    }
    for ( p = 0; p < 9; p++) {
        No = cabeca.filhos[p]
        gerarfilhos(No, 'O')
    }
    return cabeca


}
possibilidades = gerarPossibilidades(tab)
console.log((possibilidades))
