import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BoxModel = () => {
    return (
        <>

            <View style={style.viewStyle}>
                <Text style={style.textStyle}>Box Model</Text>
            </View>
        </>
    )
}

const style = StyleSheet.create({
    viewStyle: {
        marginLeft: 10,
        marginTop: 10,
        borderColor: "black",
        borderWidth: 2,
        padding: 10

    },
    textStyle: {
        paddingTop: 4,
        paddingLeft: 4,
        paddingBottom: 4,
        paddingRight: 4,
        borderColor: "red",
        borderWidth: 2
    }
})

export default BoxModel