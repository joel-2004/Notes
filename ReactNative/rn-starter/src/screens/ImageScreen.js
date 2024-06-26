import React from 'react'
import ImageView from '../components/ImageView'
import { FlatList } from 'react-native'
const ImageScreen = () => {


    return (
        <>
            <ImageView text="demo1" url={require("../../assets/images/beach.jpg")}></ImageView>
            <ImageView text="demo2" url={require("../../assets/images/forest.jpg")}></ImageView>
        </>
    )
}

export default ImageScreen