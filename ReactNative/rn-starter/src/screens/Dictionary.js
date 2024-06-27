import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, TextInput } from 'react-native'

const Dictionary = () => {
    const [word, setword] = useState("start");
    const [startSeach, setStartSearch] = useState(false);
    const [result, setResult] = useState("");
    const [isError, setIsError] = useState();

    useEffect(() => {
        const fetch = async () => {
            try {
                // console.log(word);
                const res = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
                //  console.log(res.data[0].meanings[0].definitions[0].definition);
                setResult(res.data[0].meanings[0].definitions[0].definition);
                setIsError(false);
            } catch (e) {
                console.log(e);
                setIsError(true);
            }
        }
        fetch();
    }, [startSeach])
    const search = () => {

        if (startSeach == true)
            setStartSearch(false);
        else
            setStartSearch(true);
    }
    return (
        <>
            <TextInput style={style.textInputStyle}
                placeholder='Enter Word'
                value={word}
                onChangeText={(i) => setword(i)}
                autoCapitalize='none'
                autoComplete='none'
                autoCorrect={false}

            ></TextInput>
            <Button onPress={search} title='Search'></Button>

            {
                result.length > 0 && isError == false && word.length !== 0 ? <Text>{result}</Text> : null
            }
            {
                isError == true ? <Text>Kindly Check the spelling for the word: {word}</Text> : null
            }
        </>
    )
}

const style = StyleSheet.create({
    textInputStyle: {
        height: 40,
        width: 1000,
    }
})

export default Dictionary