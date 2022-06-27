import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { gerarPossibilidades, comparajogadas, retornaPosicaoJogada, Soma_Pontos, achaNo} from './Graph'

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

  const possibilidades = useRef(null);
  const posJogadas = useRef([]);

  useEffect(() => {
    possibilidades.current = gerarPossibilidades(tab)
    Soma_Pontos(possibilidades.current)
  }, []);

  const jogada = () => {
    let arrayDeJogada = [x1, x2, x3, x4, x5, x6, x7, x8, x9]
    let a = achaNo(arrayDeJogada, posJogadas.current, possibilidades.current)
    console.log(a)
  }

  const handleVez = () => {
    if(vez == 'X') setVez('O')
    if(vez == 'O') setVez('X')
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
  }

  const casaClicada = (casa) => {

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

  return (
        <View style={styles.container}>
          <Text style={styles.cabecalho}>{"Vez do jogador " + vez}</Text>
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
                  disabled={x1 == '.' ? false: true}
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
                  disabled={x2 == '.'? false:true}
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
                  disabled={x3 == '.' ? false:true}
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
                  disabled={x4 == '.' ? false:true}
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
                  disabled={x5 == '.' ? false:true}
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
                  disabled={x6 == '.' ? false:true}
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
                  disabled={x7 == '.' ? false:true}
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
                  disabled={x8 == '.' ? false:true}
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
                  disabled={x9 == '.' ? false:true}
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
