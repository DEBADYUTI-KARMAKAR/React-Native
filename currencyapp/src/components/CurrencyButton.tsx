import React, { PropsWithChildren } from 'react'
import { StyleSheet, Text, View } from 'react-native';

type CurrencyButtonProps = PropsWithChildren<{
    name: string;
    flag: string;
}>

const CurrencyButton = (props:CurrencyButtonProps): JSX.Element => {
  return (
    <View style={styles.buttonContainer}>
        <Text style={styles.flag}>{props.flag}</Text>
        <Text style={styles.countryName}>{props.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 10,
        
    },
    countryName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 4,
        color: 'purple',
    },
    flag: {
        fontSize: 30,
        color: 'purple',
        marginBottom: 4,
    }
})
export default CurrencyButton
