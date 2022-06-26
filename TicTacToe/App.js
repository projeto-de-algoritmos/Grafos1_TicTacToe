import React, { useState, useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function App() {

  const [x1, setX1] = useState(null);
  const [x2, setX2] = useState(null);
  const [x3, setX3] = useState(null);
  const [x4, setX4] = useState(null);
  const [x5, setX5] = useState(null);
  const [x6, setX6] = useState(null);
  const [x7, setX7] = useState(null);
  const [x8, setX8] = useState(null);
  const [x9, setX9] = useState(null);

  const [vez, setVez] = useState('X');

  const handleVez = () => {
    if(vez == 'X') setVez('O')
    if(vez == 'O') setVez('X')
  }

  const resetaCasas = () => {
      setX1(null);
      setX2(null);
      setX3(null);
      setX4(null);
      setX5(null);
      setX6(null);
      setX7(null);
      setX8(null);
      setX9(null);
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
                  disabled={x1 ? true: false}
                >
                  {
                    x1 == null ?
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
                  disabled={x2 ? true: false}
                >
                  {
                    x2 == null ?
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
                  disabled={x3 ? true: false}
                >
                  {
                    x3 == null ?
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
                  disabled={x4 ? true: false}
                >
                  {
                    x4 == null ?
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
                  disabled={x5 ? true: false}
                >
                  {
                    x5 == null ?
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
                  disabled={x6 ? true: false}
                >
                  {
                    x6 == null ?
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
                  disabled={x7 ? true: false}
                >
                  {
                    x7 == null ?
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
                  disabled={x8 ? true: false}
                >
                  {
                    x8 == null ?
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
                  disabled={x9 ? true: false}
                >
                  {
                    x9 == null ?
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
