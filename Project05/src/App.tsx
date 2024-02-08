import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import type { PropsWithChildren } from 'react';
import Diceone from '../assets/One.png'
import Dicetwo from '../assets/Two.png'
import Dicethree from '../assets/Three.png'
import Dicefour from '../assets/Four.png'
import Dicefive from '../assets/Five.png'
import Dicesix from '../assets/Six.png'

type DiceProps=PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>

const Dice =({imageUrl}: DiceProps): JSX.Element =>{
  return (
    <View>
      <Image source={imageUrl} style={styles.diceImage} />
    </View>
  )

}


export default function App(): JSX.Element {
  const [diceImg,setdiceImg]=useState<ImageSourcePropType>(Diceone);

  const rollDiceOnTap=()=>{
    let randomNumber=Math.floor(Math.random()*6)+1;

    switch (randomNumber) {
      case 1:
        setdiceImg(Diceone);
        break;
      case 2:
        setdiceImg(Dicetwo);
        break;
      case 3:
        setdiceImg(Dicethree);
        break;
      case 4:
        setdiceImg(Dicefour);
        break;
      case 5:
        setdiceImg(Dicefive);
        break;
      case 6:
        setdiceImg(Dicesix);
        break;
      default:
        break;
    }
  }
  return (
    <View style={styles.container}>
    <Dice imageUrl={diceImg} />
    <Pressable onPress={rollDiceOnTap}>
      <Text style={styles.rollDiceBtnText}>Roll Dice</Text>
    </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  diceContainer:{
    margin:12
  },
  diceImage:{
    width: 200,
    height: 200,
  },
  rollDiceBtnText:{
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 24,
    color: 'white',
    borderWidth: 2,
    borderRadius:8,
    backgroundColor: 'blue',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
})