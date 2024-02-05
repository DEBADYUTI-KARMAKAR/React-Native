import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function App() {
  const [backColor,setbackColor]=useState('#ffffff');
  const generateColor=()=>{
    let hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++){
      color += hex[Math.floor(Math.random() * 16)];
    }
    setbackColor(color);
  }
  return (
    <>
    <StatusBar backgroundColor={backColor} />
    <View style={[styles.container,{backgroundColor:backColor}]}>
      <TouchableOpacity onPress={generateColor}>
        <View style={styles.acionButton}>
          <Text style={styles.btnText}>Button</Text>
        </View>
      </TouchableOpacity>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  acionButton: {
    padding: 10,
    backgroundColor: '#000000',
    borderRadius: 5
  },
  btnText:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff'
  }
})