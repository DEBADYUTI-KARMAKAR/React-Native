import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCard() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCard</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card,styles.elevated]}>
            <Text>A</Text>
        </View>
        <View style={[styles.card,styles.elevated]}>
            <Text>B</Text>
        </View>
        <View style={[styles.card,styles.elevated]}>
            <Text>C</Text>
        </View>
        <View style={[styles.card,styles.elevated]}>
            <Text>D</Text>
        </View>
        <View style={[styles.card,styles.elevated]}>
            <Text>E</Text>
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
        padding:8,
        margin:8,
    },
    card:{
        width:200,
        height:200,
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        margin:8,
        borderRadius:10,
    },
    elevated:{
        backgroundColor:'red',
        elevation:4,
        shadowOffset:{
            width:8,
            height:8,
        },
        shadowColor:'black',
        shadowOpacity:0.2,
        
    }
})