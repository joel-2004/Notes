import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react'
import { Button, StyleSheet, Text, TextInput } from 'react-native'

const Dictionary = () => {
    // const [word, setword] = useState("start");
    // const [startSeach, setStartSearch] = useState(false);
    // const [result, setResult] = useState("");
    // const [isError, setIsError] = useState();

    const reducer = (state, action) => {
        switch (action.type) {
            case "change_result":
                return { ...state, result: action.payload };
            case "change_error":
                return { ...state, isError: action.payload };
            case "change_startSearch":
                return { ...state, startSearch: action.payload };
            case "change_word":
                return { ...state, word: action.payload };
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, { word: "start", startSearch: false, result: "", isError: false })

    useEffect(() => {
        const fetch = async () => {
            try {
                // console.log(word);
                const res = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${state.word}`);
                //  console.log(res.data[0].meanings[0].definitions[0].definition);
                // setResult(res.data[0].meanings[0].definitions[0].definition);
                dispatch({ type: "change_result", payload: res.data[0].meanings[0].definitions[0].definition });
                dispatch({ type: "change_error", payload: false });
                //setIsError(false);
            } catch (e) {
                console.log(e);
                dispatch({ type: "change_error", payload: true });
            }
        }
        fetch();
    }, [state.startSearch])

    const search = () => {
        //console.log(state.startSearch);
        if (state.startSearch == true)
            dispatch({ type: "change_startSearch", payload: false });
        else
            dispatch({ type: "change_startSearch", payload: true });
    }
    return (
        <>
            <TextInput style={style.textInputStyle}
                placeholder='Enter Word'
                value={state.word}
                onChangeText={(i) => dispatch({ type: "change_word", payload: i })}
                autoCapitalize='none'
                autoComplete='none'
                autoCorrect={false}
                onEndEditing={search}
            ></TextInput>
            <Button onPress={search} title='Search'></Button>

            {
                state.result.length > 0 && state.isError == false ? <Text>{state.result}</Text> : null
            }
            {
                state.isError == true && state.word.length !== 0 ? <Text>Kindly Check the spelling for the word: {state.word}</Text> : null
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