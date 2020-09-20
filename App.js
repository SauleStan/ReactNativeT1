import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
//import './styles/components.css';
import AppButton from './components/buttonComponent';
import BoxComponent from './components/boxComponent';


export default function App() {
    const [boxColor1, setBoxColor1] = useState('crimson');
    const [boxColor2, setBoxColor2] = useState('crimson');
    const [boxColor3, setBoxColor3] = useState('crimson');
    const [boxColor4, setBoxColor4] = useState('crimson');

    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <AppButton onPress={() => {setBoxColor1('green')}} title="Button1"/>
          <AppButton onPress={() => {setBoxColor2('green')}} title="Button2"/>
          <AppButton onPress={() => {setBoxColor3('green')}} title="Button3"/>
          <AppButton onPress={() => {setBoxColor4('green')}} title="Button4"/>
        </View>
        <View style={styles.boxContainer}>
          <BoxComponent color={boxColor1} text={"BOX1"}></BoxComponent>
          <BoxComponent color={boxColor2} text={"BOX2"}></BoxComponent>
          <BoxComponent color={boxColor3} text={"BOX3"}></BoxComponent>
          <BoxComponent color={boxColor4} text={"BOX4"}></BoxComponent>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: "grey",
  },
  boxContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'coral',
  },
});