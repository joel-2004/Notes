import React, { useState } from 'react'
import ColorBox from '../components/ColorBox'
import { Button, FlatList } from 'react-native'
const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  const randColor = () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let color = "rgb(" + r + "," + g + "," + b + ")";
    // console.log(color);
    setColors([...colors, color]);
    // console.log(colors);
    /*Math.random would always give me a value from 0 to 1 in decimal, floor would make it a whole number flored to the lesser value
    since 255 is the limit for rgb, we multiply rand() with 255 and floor it.*/

  }
  return (
    <>
      <Button title='add Color' onPress={randColor}></Button>
      <FlatList keyExtractor={(i) => i} data={colors} renderItem={({ item }) => <ColorBox color={item}></ColorBox>}></FlatList>
    </>
  )
}

export default ColorScreen