import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const FlexBox = () => {
    return (
        <>
            <View style={style.viewStyle}>
                <Text style={style.text1Style}>Hi</Text>
                <Text style={style.text2Style}>Hello</Text>
                <Text>Whats up</Text>
            </View>
        </>
    )
}

const style = StyleSheet.create({
    //for parent
    viewStyle: {
        borderColor: "black",
        borderWidth: 2,
        display: "flex",
        alignItems: "center",//vertical alignment
        justifyContent: "center",//horizontal alignment
        // flexDirection: "row",//can be row or column
        height: 500
    },
    //for child
    text1Style: {
        flex: 4, //the higher the number the larger the space
        position: "relative",/*if we use this then it ignores a lot of its siblings and acts separately, 
        it still would follow its parents direction, alignment*/
        top: 10,//move the whole child from top, it will merge with the childs under it, like overlap
        bottom: 10,
    },
    text2Style: {
        //flex shows how much space it takes, flex works on the same direction as flex-direction
        flex: 1,
        alignSelf: "flex-end",//to push only the text2 to the end
    },
    //similar to bootstarp, find the total flex value and split them based on ur requirement

})

export default FlexBox