import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <ScrollView horizontal={true}>

      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
            <Text style={styles.textColor}>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
            <Text style={styles.textColor}>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
            <Text style={styles.textColor}>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
            <Text style={styles.textColor}>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
            <Text style={styles.textColor}>Green</Text>
        </View>
      </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:30,
        fontWeight:'bold',
        paddingTop:40,
        paddingHorizontal:40,
    },
    container:{
      flex:1,
      flexDirection:'row', 
      padding:8, 
    },
    card:{
        height:100,
        width:100,
        borderRadius:10,
        margin:8,
        flex:1,
        justifyContent:'center',
        alignItems:'center'

    },
    cardOne:{
        backgroundColor:'red'

    },
    cardTwo:{
        backgroundColor:'green'

    },
    cardThree:{
        backgroundColor:'blue'

    },
    textColor:{
        color:'white',
        fontWeight:'bold',
        fontSize:20
    }
})