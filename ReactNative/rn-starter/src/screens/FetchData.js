import axios, { Axios } from 'axios';
import React, { useEffect, useState } from 'react'
import { FlatList, Text } from 'react-native';

const FetchData = () => {
    const [value, setValue] = useState([]);


    useEffect(() => {
        const fetch = async () => {
            try {
                const employees = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
                console.log(employees.data);
                setValue(employees.data);
                console.log("Use state " + value)
            } catch (e) {
                console.log(e);
            }
        }
        fetch()
    }, [])


    return (
        <>
            <Text>Hello</Text>
            <FlatList data={value} renderItem={({ item }) => console.log(+" items " + item)}></FlatList>

        </>
    )
}

export default FetchData