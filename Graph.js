
let tab = ['.', '.', '.', '.', '.', '.', '.', '.', '.']
let pos = [tab]
const o_number = 4
const x_number = 5

function print(tab) {
    console.log(tab[0][0] + " | " + tab[0][1] + " | " + tab[0][2])
    console.log("--  --  --")
    console.log(tab[1][0] + " | " + tab[1][1] + " | " + tab[1][2])
    console.log("--  --  --")
    console.log(tab[2][0] + " | " + tab[2][1] + " | " + tab[2][2])
}


function Valida(tab) {
    for (let i = 0; i < 3; i++) {
        if ((tab[i][0] == tab[i][1]) && (tab[i][1] == tab[i][2]) && tab[i][1] != '.') return true;
        if ((tab[0][i] == tab[1][i]) && (tab[1][i] == tab[2][i]) && tab[1][i] != '.') return true;
    }
    if ((tab[0][0] == tab[1][1]) && (tab[1][1] == tab[2][2]) && tab[1][1] != '.') return true;
    if ((tab[2][0] == tab[1][1]) && (tab[1][1] == tab[0][2]) && tab[1][1] != '.') return true;
    return false;
}

