import React, { useContext, useState } from 'react'
import { StyleSheet, Text, TextInput } from 'react-native'
import { Context } from '../../App'
const NameForm = () => {
    const value = useContext(Context);
    // console.log(value);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    return (
        <>
            <TextInput value={name}
                onChangeText={(e) => { setName(e) }}
                style={style.textStyle}
                placeholder='Type here'
                autoCapitalize='none'
                autoComplete='none'
                autoCorrect={false}
                onEndEditing={(e) => console.log("Submitted" + name)}//after typing when we press the tick in keypad
            ></TextInput>
            <TextInput
                autoCapitalize='none'
                autoComplete='none'
                autoCorrect={false}
                value={password}
                onChangeText={(p) => setPassword(p)}
                style={style.textStyle}
            ></TextInput>
            {
                password.length > 5 ? <Text>password must be lesser that 6 characters</Text> : null}

            {
                <Text>Your Name is {name}</Text>
                /*
                    autoCapitalize='none'
                    autoComplete='none'
                    autoCorrect={false}
                    to make IOS not autoCapitalize, autoComplete and autoCorrect
                    */
            }
            <Text>Value from useContext: {value}</Text>
        </>

    )
}

const style = StyleSheet.create({
    textStyle: {
        margin: 10,
        borderColor: "black",
        borderWidth: 1,
    }
})

export default NameForm