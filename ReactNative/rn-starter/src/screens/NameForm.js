import React, { useState } from 'react'
import { Text, TextInput } from 'react-native'

const NameForm = () => {
    const [name, setName] = useState("");
    return (
        <>
            <TextInput value={name}
                onChangeText={(e) => { setName(e) }}
                style={{ width: 150, height: 50, backgroundColor: "yellow" }}
                placeholder='Type here'
            ></TextInput>
            <Text>Your Name is{name}</Text>
        </>
    )
}

export default NameForm