import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
//import './styles/components.css';
import AppButton from './components/buttonComponent';
import BoxComponent from './components/boxComponent';


export default function App() {

  const initialColor = 'crimson';
  const nextColor = 'green';

  const [boxColor1, setBoxColor1] = useState(initialColor);
  const [boxColor2, setBoxColor2] = useState(initialColor);
  const [boxColor3, setBoxColor3] = useState(initialColor);
  const [boxColor4, setBoxColor4] = useState(initialColor);
  const [colorSwitch1, setColorSwitch1] = useState(false);
  const [colorSwitch2, setColorSwitch2] = useState(false);
  const [colorSwitch3, setColorSwitch3] = useState(false);
  const [colorSwitch4, setColorSwitch4] = useState(false);

  const prevColorRef = useRef;
  useEffect(()=>{
    prevColorRef.current = boxColor1;
  });
  const prevColor = prevColorRef.current;

  function switchColor1(){
    if(colorSwitch1 == false){
      setBoxColor1(nextColor);
      setColorSwitch1(true);
    }else{
      setBoxColor1(prevColor);
      setColorSwitch1(false);
    }
  }
  function switchColor2(){
    if(colorSwitch2 == false){
      setBoxColor2(nextColor);
      setColorSwitch2(true);
    }else{
      setBoxColor2(prevColor);
      setColorSwitch2(false);
    }
  }
  function switchColor3(){
    if(colorSwitch3 == false){
      setBoxColor3(nextColor);
      setColorSwitch3(true);
    }else{
      setBoxColor3(prevColor);
      setColorSwitch3(false);
    }
  }
  function switchColor4(){
    if(colorSwitch4 == false){
      setBoxColor4(nextColor);
      setColorSwitch4(true);
    }else{
      setBoxColor4(prevColor);
      setColorSwitch4(false);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <AppButton onPress={switchColor1} title="Button1"/>
        <AppButton onPress={switchColor2} title="Button2"/>
        <AppButton onPress={switchColor3} title="Button3"/>
        <AppButton onPress={switchColor4} title="Button4"/>
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