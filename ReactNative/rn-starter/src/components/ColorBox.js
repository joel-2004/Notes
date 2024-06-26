import React from 'react'
import { Text, View } from 'react-native'

const ColorBox = (props) => {
    return (
        <>
            <View style={{ height: 100, width: 100, backgroundColor: props.color }}></View>
            <Text>{props.color}</Text>

        </>
    )
}

export default ColorBox