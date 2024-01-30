import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Top Location</Text>
      <View style={[styles.card,styles.elevetor]}>
        <Image
        source={{uri:'https://picsum.photos/200/300'}}
        style={styles.cardImg}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Strand Road</Text>
            <Text style={styles.cardLable}>Chandennagar, Hooghly</Text>
            <Text style={styles.cardDesc}>Strand Road is very beautiful place.
            There are many historical places like Chandennagar Museum and Institute (Institut de Chandernagor),
            Chandannagar Strand, Patal Bari (Underground House), Chandannagar Church, Nandadulal Temple,
            Sacred Heart Church, Chandannagar Gate, French Cemetery, Duplex Statue, etc.
            </Text>
            <Text style={styles.cardFooter}>From station 20 minute</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:30,
        fontWeight:'bold',
        paddingTop:40,
        paddingHorizontal:10,
    },
    card:{
        width:350,
        height:400,
        borderRadius:8,
        marginHorizontal:16,
        marginVertical:12,
    },
    elevetor:{
        backgroundColor:'black',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1,
        },
    },
    cardImg:{
        height:200,
        marginBottom:8,
        borderTopLeftRadius:8,
        borderTopRightRadius:8,
    },
    cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:12
    },
    cardTitle:{
        color:'white',
        fontSize:22,
        fontWeight:'bold',
        marginBottom:6,
    },
    cardLable:{
        color:'white',
        fontSize:14,
        marginBottom:6,
    },
    cardDesc:{
        color:'white',
        fontSize:12,
        marginBottom:12,
        flexShrink:1,
        marginTop:6,
    },
    cardFooter:{
        color:'white'
    },
})