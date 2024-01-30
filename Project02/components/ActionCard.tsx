import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink:string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>ActionCard</Text>
      <View style={[styles.card,styles.elevatedCard]}>
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>
                Introduction to Java
            </Text>
        </View>
        <Image
            source={{uri:'https://appmaster.io/cdn-cgi/image/width=1024,quality=83,format=auto/api/_files/hRaLG2N4DVjRZJQzCpN2zJ/download/'}}
        style={styles.cardImage}
         />
         <View style={styles.bodyContainer}>
            <Text style={{color:'white'}} numberOfLines={3}>
                Java is a high-level programming language developed by Sun Microsystems. It was originally designed for developing programs for set-top boxes and handheld devices, but later became a popular choice for creating web applications.
            </Text>
         </View>
         <View style={styles.footerContainer}>
            <TouchableOpacity
            onPress={()=>openWebsite('https://www.javatpoint.com/java-tutorial')}
            >
                <Text style={{color:'white',backgroundColor:'red',padding:8,borderRadius:5}}>Read More</Text>
            </TouchableOpacity>
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
        paddingHorizontal:8,
    },
    card:{
        width:350,
        height:370,
        borderRadius:10,
        marginHorizontal:12,
        marginVertical:16,
    },
    elevatedCard:{
        backgroundColor:'black',
        elevation:4,
        shadowOffset:{
            width:1,
            height:1,
        },
        shadowColor:'#333',
        shadowOpacity:0.4,
    },
    headerContainer:{
        height:40,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    headerText:{
        color:'white',
        fontSize:16,
        fontWeight:'700',

    },
    cardImage:{
        height:200,

    },
    bodyContainer:{
        padding:10

    },
    footerContainer:{
        padding:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        

    }
})