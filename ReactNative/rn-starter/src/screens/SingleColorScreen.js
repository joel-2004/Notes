import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'
import SingleColorReusable from '../components/SingleColorReusable';
const SingleColorScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    const setColor = (color, newValue) => {
        if (color === "red") {
            if (red + newValue > 255 || red + newValue < 0)
                return;
            else
                setRed(red + newValue);
        }
        if (color === "green") {
            if (green + newValue > 255 || green + newValue < 0)
                return;
            else
                setGreen(green + newValue);
        }
        if (color == "blue") {
            if (blue + newValue > 255 || blue + newValue < 0)
                return;
            else
                setBlue(blue + newValue);
        }
    }
    return (
        <>
            <View style={{ height: 100, width: 100, backgroundColor: `rgb(${red},${green},${blue})` }}></View>
            <SingleColorReusable color="Red" increase={() => setColor("red", 10)} decrease={() => setColor("red", -10)}></SingleColorReusable>
            <SingleColorReusable color="Green" increase={() => setColor("green", 10)} decrease={() => setColor("green", -10)}></SingleColorReusable>
            <SingleColorReusable color="Blue" increase={() => setColor("blue", 10)} decrease={() => setColor("blue", -10)}></SingleColorReusable>
        </>


    )
}

export default SingleColorScreen