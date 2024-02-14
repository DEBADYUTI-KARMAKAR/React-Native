import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import type { PropsWithChildren } from 'react'

type CurrencyButtonProps = PropsWithChildren<{
    name: string;
    flag: string;
}>


const CurrencyButton=(props: CurrencyButtonProps):JSX.Element =>{
    return (
        <View style={styles.container}>
            <Text style={styles.flag}>{props.flag}</Text>
            <Text style={styles.country}>{props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    flag:{
        fontSize: 40,
        color: '#ffffff',
        marginBottom: 6

    },
    country:{
        fontSize: 26,
        color: '#ffaa00',
        textTransform: 'uppercase',
        marginBottom: 6

    }
})

export default CurrencyButton