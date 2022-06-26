class Grafo(object):
    
    def __init__(self, itemsAdjacentes, jogo, qtdX, qtdY):
        self.itemsAdjacentes = itemsAdjacentes
        self.jogo = jogo
        self.qtdX = qtdX
        self.qtdY = qtdY
        self.resultado = None

def verificaQuemGanhou(jogo):
  if len(jogo) < 3:
    return None
  
  if(len(jogo) >= 3 and jogo[0] == 'X' and jogo[1] == 'X' and jogo[2] == 'X'):
    return 'X'
  if(len(jogo) >= 6 and jogo[3] == 'X' and jogo[4] == 'X' and jogo[5] == 'X'):
    return 'X'
  if(len(jogo) >= 9 and jogo[6] == 'X' and jogo[7] == 'X' and jogo[8] == 'X'):
    return 'X'
  if(len(jogo) >= 7 and jogo[0] == 'X' and jogo[3] == 'X' and jogo[6] == 'X'):
    return 'X'
  if(len(jogo) >= 8 and jogo[1] == 'X' and jogo[4] == 'X' and jogo[7] == 'X'):
    return 'X'
  if(len(jogo) >= 9 and jogo[2] == 'X' and jogo[5] == 'X' and jogo[8] == 'X'):
    return 'X'
  if(len(jogo) >= 9 and jogo[0] == 'X' and jogo[4] == 'X' and jogo[8] == 'X'):
    return 'X'
  if(len(jogo) >= 9 and jogo[2] == 'X' and jogo[4] == 'X' and jogo[7] == 'X'):
    return 'X'

  if(len(jogo) >= 3 and jogo[0] == 'O' and jogo[1] == 'O' and jogo[2] == 'O'):
    return 'O'
  if(len(jogo) >= 6 and jogo[3] == 'O' and jogo[4] == 'O' and jogo[5] == 'O'):
    return 'O'
  if(len(jogo) >= 9 and jogo[6] == 'O' and jogo[7] == 'O' and jogo[8] == 'O'):
    return 'O'
  if(len(jogo) >= 7 and jogo[0] == 'O' and jogo[3] == 'O' and jogo[6] == 'O'):
    return 'O'
  if(len(jogo) >= 8 and jogo[1] == 'O' and jogo[4] == 'O' and jogo[7] == 'O'):
    return 'O'
  if(len(jogo) >= 9 and jogo[2] == 'O' and jogo[5] == 'O' and jogo[8] == 'O'):
    return 'O'
  if(len(jogo) >= 9 and jogo[0] == 'O' and jogo[4] == 'O' and jogo[8] == 'O'):
    return 'O'
  if(len(jogo) >= 9 and jogo[2] == 'O' and jogo[4] == 'O' and jogo[7] == 'O'):
    return 'O'
  
  return None

def getElemento(elemento):
  if(elemento == 'X' or elemento == 'O'):
    return elemento
  else:
    return (" ")

def printTabela(array):
    elemento0 = " "
    elemento1 = " "
    elemento2 = " "
    elemento3 = " "
    elemento4 = " "
    elemento5 = " "
    elemento6 = " "
    elemento7 = " "
    elemento8 = " "

    if(len(array) >= 1):
      elemento0 = getElemento(array[0])
    if(len(array) >= 2):
      elemento1 = getElemento(array[1])
    if(len(array) >= 3):
      elemento2 = getElemento(array[2])
    if(len(array) >= 4):
      elemento3 = getElemento(array[3])
    if(len(array) >= 5):
      elemento4 = getElemento(array[4])
    if(len(array) >= 6):
      elemento5 = getElemento(array[5])
    if(len(array) >= 7):
      elemento6 = getElemento(array[6])
    if(len(array) >= 8):
      elemento7 = getElemento(array[7])
    if(len(array) >= 9):
      elemento8 = getElemento(array[8])

    print("|" + elemento0 + "|" + elemento1 + "|" + elemento2 + "|")
    print("|" + elemento3 + "|" + elemento4  + "|" + elemento5 + "|")
    print("|" + elemento6 + "|" + elemento7 + "|" + elemento8 + "|")
    print("\n")

grafo = Grafo([], [], 0, 0)

def faz_grafo(folha, jogo):
    folha.resultado = verificaQuemGanhou(folha.jogo)
    print(folha.resultado)
    printTabela(folha.jogo)

    
    if len(folha.jogo) < 9:
      folha.itemsAdjacentes.insert(1, Grafo([], [], folha.qtdX, folha.qtdY))
      folha.itemsAdjacentes.insert(2, Grafo([], [], folha.qtdX, folha.qtdY))
      
      folha.itemsAdjacentes[0].jogo = jogo.copy()
      folha.itemsAdjacentes[1].jogo = jogo.copy()

      if(folha.qtdX < 5):
        folha.itemsAdjacentes[0].jogo.insert(1, 'X')
        folha.itemsAdjacentes[0].qtdX = folha.itemsAdjacentes[0].qtdX + 1

      if(folha.qtdY < 4):
        folha.itemsAdjacentes[1].jogo.insert(2, 'O')
        folha.itemsAdjacentes[1].qtdY = folha.itemsAdjacentes[1].qtdY + 1

      if(folha.qtdX == 5):
        faz_grafo(folha.itemsAdjacentes[1], folha.itemsAdjacentes[1].jogo)
        return
      if(folha.qtdY == 4):
        faz_grafo(folha.itemsAdjacentes[0], folha.itemsAdjacentes[0].jogo)
        return

      faz_grafo(folha.itemsAdjacentes[0], folha.itemsAdjacentes[0].jogo)
      faz_grafo(folha.itemsAdjacentes[1], folha.itemsAdjacentes[1].jogo)

    else: 
      return
    
faz_grafo( grafo, grafo.jogo)