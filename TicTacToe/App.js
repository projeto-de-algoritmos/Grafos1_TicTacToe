import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { gerarPossibilidades, comparajogadas, retornaPosicaoJogada, Soma_Pontos, achaNo, Valida} from './Graph'

const tab = ['.', '.', '.', '.', '.', '.', '.', '.', '.'];

export default function App() {

  const [x1, setX1] = useState('.');
  const [x2, setX2] = useState('.');
  const [x3, setX3] = useState('.');
  const [x4, setX4] = useState('.');
  const [x5, setX5] = useState('.');
  const [x6, setX6] = useState('.');
  const [x7, setX7] = useState('.');
  const [x8, setX8] = useState('.');
  const [x9, setX9] = useState('.');
  const [vez, setVez] = useState('X');
  const [result, setResult] = useState(null);

  const posJogadas = useRef([]);
  const array = useRef([]);

  const possibilidades = useRef(null);

  useEffect(() => {
    possibilidades.current = gerarPossibilidades(tab);
    Soma_Pontos(possibilidades.current);
  }, []);

  const jogada = (arrayDeJogada) => {
      achaNo(arrayDeJogada, posJogadas.current,  possibilidades.current);
      let posicaoPc = retornaPosicaoJogada(arrayDeJogada, comparajogadas( posJogadas.current,  possibilidades.current));
      jogadaPc(posicaoPc)
  }

  const handleVez = () => {
    if(vez == 'X') setVez('O')
    if(vez == 'O') setVez('X')
  }

  const jogadaPc = (casaPc) => {
    let casa = 1 + casaPc;
    switch(casa){
      case 1:
        setX1('O');
        break;
      case 2:
        setX2('O');
        break;
      case 3:
        setX3('O');
        break;
      case 4:
        setX4('O');
        break;
      case 5:
        setX5('O');
        break;
      case 6:
        setX6('O');
        break;
      case 7:
        setX7('O');
        break;
      case 8:
        setX8('O');
        break;
      case 9:
        setX9('O');
        break;
    }
      handleVez();
  } 



  const resetaCasas = () => {
      setX1('.');
      setX2('.');
      setX3('.');
      setX4('.');
      setX5('.');
      setX6('.');
      setX7('.');
      setX8('.');
      setX9('.');
      setVez('X');
      posJogadas.current = [];
      array.current = []
      setResult(null);
  }

  const casaClicada = (casa) => {
    array.current = [x1, x2, x3, x4, x5, x6, x7, x8, x9];
    array.current[casa - 1] = vez;

    switch(casa){
      case 1:
        setX1(vez);
        break;
      case 2:
        setX2(vez);
        break;
      case 3:
        setX3(vez);
        break;
      case 4:
        setX4(vez);
        break;
      case 5:
        setX5(vez);
        break;
      case 6:
        setX6(vez);
        break;
      case 7:
        setX7(vez);
        break;
      case 8:
        setX8(vez);
        break;
      case 9:
        setX9(vez);
        break;
    }

    handleVez();
  }
  
  useEffect(() => {
    let resultado = Valida([x1, x2, x3, x4, x5, x6, x7, x8, x9]);
    if(resultado != false) {
      setResult(resultado)
    }
    else {
      if(vez == 'O') {
          setTimeout(() => jogada(array.current), 2100);
      }
    }
  }, [vez]);


  return (
        <View style={styles.container}>
          {result ? <Text style={styles.cabecalho}>{"O vencedor é: " + result}</Text>: null}
          {result == null ?<Text style={styles.cabecalho}>{"Vez do jogador " + vez}</Text>:null}
          <View style={styles.linha1}>
            <View 
              style={{
                borderColor: 'blue', 
                borderBottomWidth: 3,
                borderRightWidth: 3,
              }}>
                <TouchableOpacity
                  style={{
                    padding: 20,
                    backgroundColor: '#cbf3f0',
                    borderRadius: 80,
                    margin: 4
                  }}
                  onPress={() => casaClicada(1)}
                  disabled={x1 == '.' && vez == 'X' && result == null ? false: true}
                >
                  {
                    x1 == '.' ?
                    <View style={{padding: 30}}></View>
                    : x1 == 'X' 
                    ? <MaterialIcons name='close' size={60} color="#000000"/>
                    : <MaterialIcons  name='lens' size={60} color="#000000"  />
                  }
                </TouchableOpacity>
            </View>
            <View 
              style={{
                borderColor: 'blue', 
                borderBottomWidth: 3,
                borderRightWidth: 3
              }}>
                <TouchableOpacity
                  style={{
                    padding: 20,
                    backgroundColor: '#cbf3f0',
                    borderRadius: 80,
                    margin: 4
                  }}
                  onPress={() => casaClicada(2)}
                  disabled={x2 == '.' && vez == 'X' && result == null? false:true}
                >
                  {
                    x2 == '.' ?
                    <View style={{padding: 30}}></View>
                    : x2 == 'X' 
                    ? <MaterialIcons name='close' size={60} color="#000000"/>
                    : <MaterialIcons name='lens' size={60} color="#000000" />
                  }
                </TouchableOpacity>
            </View>
            <View 
              style={{
                borderColor: 'blue', 
                borderBottomWidth: 3,
              }}>
                <TouchableOpacity
                  style={{
                    padding: 20,
                    backgroundColor: '#cbf3f0',
                    borderRadius: 80,
                    margin: 4
                  }}
                  onPress={() => casaClicada(3)}
                  disabled={x3 == '.' && vez == 'X'&& result == null?  false:true}
                >
                  {
                    x3 == '.' ?
                    <View style={{padding: 30}}></View>
                    : x3 == 'X' 
                    ? <MaterialIcons name='close' size={60} color="#000000"/>
                    : <MaterialIcons name='lens' size={60} color="#000000" />
                  }
                </TouchableOpacity>
            </View>
          </View>

          <View style={styles.linha1}>
            <View 
              style={{
                borderColor: 'blue', 
                borderBottomWidth: 3,
                borderRightWidth: 3 
              }}>
                <TouchableOpacity
                  style={{
                    padding: 20,
                    backgroundColor: '#cbf3f0',
                    borderRadius: 80,
                    margin: 4
                  }}
                  onPress={() => casaClicada(4)}
                  disabled={x4 == '.' && vez == 'X' && result == null?  false:true}
                >
                  {
                    x4 == '.' ?
                    <View style={{padding: 30}}></View>
                    : x4 == 'X' 
                    ? <MaterialIcons name='close' size={60} color="#000000"/>
                    : <MaterialIcons name='lens' size={60} color="#000000" />
                  }
                </TouchableOpacity>
            </View>
            <View 
              style={{
                borderColor: 'blue', 
                borderBottomWidth: 3,
                borderRightWidth: 3 
              }}>
                <TouchableOpacity
                  style={{
                    padding: 20,
                    backgroundColor: '#cbf3f0',
                    borderRadius: 80,
                    margin: 4
                  }}
                  onPress={() => casaClicada(5)}
                  disabled={x5 == '.' && vez == 'X' && result == null?  false:true}
                >
                  {
                    x5 == '.' ?
                    <View style={{padding: 30}}></View>
                    : x5 == 'X' 
                    ? <MaterialIcons name='close' size={60} color="#000000"/>
                    : <MaterialIcons name='lens' size={60} color="#000000" />
                  }
                </TouchableOpacity>
            </View>
            <View 
              style={{
                borderColor: 'blue', 
                borderBottomWidth: 3,
              }}>
                <TouchableOpacity
                  style={{
                    padding: 20,
                    backgroundColor: '#cbf3f0',
                    borderRadius: 80,
                    margin: 4
                  }}
                  onPress={() => casaClicada(6)}
                  disabled={x6 == '.' && vez == 'X' && result == null? false:true}
                >
                  {
                    x6 == '.' ?
                    <View style={{padding: 30}}></View>
                    : x6 == 'X' 
                    ? <MaterialIcons name='close' size={60} color="#000000"/>
                    : <MaterialIcons name='lens' size={60} color="#000000" />
                  }
                </TouchableOpacity>
            </View>
          </View>
          
          <View style={styles.linha1}>
            <View 
              style={{
                borderColor: 'blue', 
                borderRightWidth: 3 
              }}>
                <TouchableOpacity
                  style={{
                    padding: 20,
                    backgroundColor: '#cbf3f0',
                    borderRadius: 80,
                    margin: 4
                  }}
                  onPress={() => casaClicada(7)}
                  disabled={x7 == '.' && vez == 'X' && result == null ? false:true}
                >
                  {
                    x7 == '.' ?
                    <View style={{padding: 30}}></View>
                    : x7 == 'X' 
                    ? <MaterialIcons name='close' size={60} color="#000000"/>
                    : <MaterialIcons name='lens' size={60} color="#000000" />
                  }
                </TouchableOpacity>
            </View>
            <View 
              style={{
                borderColor: 'blue', 
                borderRightWidth: 3 
              }}>
                <TouchableOpacity
                  style={{
                    padding: 20,
                    backgroundColor: '#cbf3f0',
                    borderRadius: 80,
                    margin: 4
                  }}
                  onPress={() => casaClicada(8)}
                  disabled={x8 == '.' && vez == 'X' && result == null ? false:true}
                >
                  {
                    x8 == '.' ?
                    <View style={{padding: 30}}></View>
                    : x8 == 'X' 
                    ? <MaterialIcons name='close' size={60} color="#000000"/>
                    : <MaterialIcons name='lens' size={60} color="#000000" />
                  }
                </TouchableOpacity>
            </View>
            <View 
              style={{
                borderColor: 'blue', 
              }}>
                <TouchableOpacity
                  style={{
                    padding: 20,
                    backgroundColor: '#cbf3f0',
                    borderRadius: 80,
                    margin: 4
                  }}
                  onPress={() => casaClicada(9)}
                  disabled={x9 == '.' && vez == 'X' && result == null ? false: true}
                >
                  {
                    x9 == '.' ?
                    <View style={{padding: 30}}></View>
                    : x9 == 'X' 
                    ? <MaterialIcons name='close' size={60} color="#000000"/>
                    : <MaterialIcons name='lens' size={60} color="#000000" />
                  }
                </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity onPress={resetaCasas}>
            <Text style={styles.reset}>Resetar Game</Text></TouchableOpacity>
        </View>
  );
}

const styles = StyleSheet.create({
  cabecalho: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 40
  },  
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  linha1: {
    display: 'flex',
    flexDirection: 'row',
  },
  reset: {
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 80
  }

});
