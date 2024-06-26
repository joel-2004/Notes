import React from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'

const ListScreen = () => {
    const data = [
        {
            color: "red",
            value: "#f00"
        },
        {
            color: "green",
            value: "#0f0"
        },
        {
            color: "blue",
            value: "#00f"
        },
        {
            color: "cyan",
            value: "#0ff"
        },
        {
            color: "magenta",
            value: "#f0f"
        },
        {
            color: "yellow",
            value: "#ff0"
        },
        {
            color: "black",
            value: "#000"
        }
    ]
    // return (
    //     data.map((d) => {
    //         return (
    //             <View>
    //                 <Text>{d.color}</Text>
    //                 <Text>{d.value}</Text>
    //             </View>
    //         )
    //     })
    // )

    return (
        <View>
            <FlatList
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                horizontal={true}
                keyExtractor={(item) => item.value}
                data={data}
                renderItem={({ item }) => {
                    return (<Text style={style.textStyle}>{item.color}</Text>)
                }}></FlatList>
        </View >
    );
}
const style = StyleSheet.create({
    textStyle: {
        margin: 10,
        padding: 10,
        marginTop: 70
    }
})
export default ListScreen;