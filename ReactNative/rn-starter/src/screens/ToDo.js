import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Text, StyleSheet, FlatList, TouchableOpacity, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';

const ip = "192.168.1.2";
const ToDo = () => {
    const [list, setList] = useState([]);
    const [data, setData] = useState("");

    const add = async () => {
        try {
            const res = await axios.post("http://" + ip + ":5000/save", { inputValue: data });
            // console.log(res.data);
            setList([...list, res.data]);
            setData("");
        } catch (e) {
            console.log(e);
        }
    }

    const deleteData = async (id) => {
        try {
            const res = await axios.delete(`http://` + ip + `:5000/todo/delete/${id}`);
            tempList = list.filter((d) => d._id !== id);
            setList(tempList);
        } catch (e) {
            console.log(e);
        }
    }

    const deleteAll = async () => {
        try {
            const res = await axios.delete("http://" + ip + ":5000/todo/deleteAll");
            setList([]);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const fetch = async () => {
            try {
                const res = await axios.get("http://" + ip + ":5000/toDo");
                setList(res.data)
            }
            catch (e) {
                console.log(e);
            }
        }
        fetch();
    }, [])
    return (
        <>
            <View style={style.viewStyleTop}>
                <TextInput
                    style={style.textInputStyle}
                    value={data} onChangeText={(i) => setData(i)}
                    placeholder='Enter Text '
                ></TextInput>
            </View>

            <Button title='Add' onPress={add}></Button>
            <FlatList
                data={list}
                keyExtractor={(i) => i._id}
                renderItem={({ item }) => {
                    return (<>
                        <View style={style.viewStyle}>
                            <Text style={style.textStyle}>
                                {item.text}</Text>
                            <TouchableOpacity
                                style={style.deleteButton}
                                onPress={() => deleteData(item._id)}>
                                <Text style={style.deleteText}>Done </Text>
                            </TouchableOpacity>
                        </View>
                    </>);
                }}></FlatList>

            {
                list.length > 0 ?

                    <Button style={style.deleteAllButton} title='Delete All' onPress={deleteAll}></Button>
                    : null
            }

        </>
    )
}

const style = StyleSheet.create({
    textInputStyle: {
        alignItems: "center",
    },
    textStyle: {
        marginLeft: 10,
        flex: 1
    },
    viewStyleTop: {
        alignItems: "center"
    },
    viewStyle: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    deleteButton: {
        margin: 10,
        borderColor: "white",
        borderWidth: 1,
        backgroundColor: "green",
        width: 100,

    },
    deleteText: {
        alignSelf: "center",
        fontWeight: "500",
        padding: 10,
        color: "white",
    },
})

export default ToDo