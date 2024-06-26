import React from 'react'
import { Text, Button } from 'react-native'

const SingleColorReusable = ({ color, increase, decrease }) => {
    // console.log(increase + " " + decrease)
    return (
        <>
            <Text>{color}</Text>
            <Button title={`increase ${color}`} onPress={increase}></Button>
            <Button title={`decrease ${color}`} onPress={decrease}></Button>
        </>
    )
}

export default SingleColorReusable