import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput } from 'react-native'

const Calculator = () => {
    const [firstnumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);
    const [operation, setOperation] = useState("");
    const [result, setResult] = useState(0);
    const submitHandle = () => {
        // console.log(firstnumber + " " + secondNumber + " " + operation);
        // console.log(firstnumber);
        // console.log(secondNumber);
        // console.log(operation);
        if (operation === '+') {
            setResult(firstnumber + secondNumber);

        }
        else if (operation === '-') {
            setResult(firstnumber - secondNumber);

        }
        else if (operation === '/') {
            setResult(firstnumber / secondNumber);

        }
        else if (operation === '*') {
            setResult(firstnumber * secondNumber);

        }
        else {
            console.log("wrong operation");
            setOperation("");
            return;
        }
        setFirstNumber(0);
        setOperation("");
        setSecondNumber(0);
    }
    return (
        <>
            <Text>Enter first Number</Text>
            <TextInput keyboardType='numeric'
                value={firstnumber}
                onChangeText={(i) => setFirstNumber(i)}
                style={styles.textInputStyle}
            ></TextInput>

            <Text>Enter second Number</Text>
            <TextInput keyboardType='numeric'
                value={secondNumber}
                onChangeText={(i) => setSecondNumber(i)}
                style={styles.textInputStyle}
            ></TextInput>

            <Text>Enter operation</Text>
            <TextInput
                value={operation}
                onChangeText={(i) => setOperation(i)}
                style={styles.textInputStyle}
            ></TextInput>

            <Button title='Submit' onPress={submitHandle}></Button>
            <Text>Result:{result}</Text>
        </>
    )
}
const styles = StyleSheet.create({
    textInputStyle: {
        width: 200,
        backgroundColor: "skyblue"
    }
})
export default Calculator