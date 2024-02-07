import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import type { PropsWithChildren } from 'react';
import Diceone from './assets/dice1.png'
import Dicetwo from './assets/dice2.png'
import Dicethree from './assets/dice3.png'
import Dicefour from './assets/dice4.png'
import Dicefive from './assets/dice5.png'
import Dicesix from './assets/dice6.png'

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
  return (
    <View>
      <Text>App g</Text>
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