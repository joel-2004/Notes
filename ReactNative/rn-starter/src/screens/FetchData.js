import axios, { Axios } from 'axios';
import React, { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native';

const FetchData = () => {
    const [value, setValue] = useState([]);


    useEffect(() => {
        const fetch = async () => {
            try {
                const employees = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
                setValue([employees.data]);
            } catch (e) {
                console.log(e);
            }
        }
        fetch()
    }, [])


    return (
        <>
            <Text>Hello</Text>
            <FlatList data={value}
                keyExtractor={(item) => item.userId}
                renderItem={({ item }) =>
                    <View>
                        <Text>{item.id}</Text>
                        <Text>{item.title}</Text>
                        <Text>{item.completed}</Text>
                    </View>
                }></FlatList>

        </>
    )
}

export default FetchData