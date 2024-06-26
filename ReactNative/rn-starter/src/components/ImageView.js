import React from 'react'
import { Image, Text } from 'react-native'

const ImageView = (props) => {
    //console.log(props)

    return (
        <>
            <Image source={props.url} alt='no img'></Image>
            <Text>{props.text}</Text>
        </>
    )
}

export default ImageView