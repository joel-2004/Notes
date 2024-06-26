import React, { act, useContext, useReducer, useState } from 'react'
import { Button, Text } from 'react-native'
import { Context } from '../../App'
const Counter = () => {
    const valueFromUseContext = useContext(Context);
    /*
    USING USESTATE
    const [value, setValue] = useState(0);
    return (
        <>
            <Text>Count: {value}</Text>
            <Button title="Increase" onPress={() => setValue(value + 1)}></Button>
            <Button title='Decrease' onPress={() => setValue(value - 1)}></Button>
        </>
    )
        */

    //USING USEREDUCER
    const reducer = (state, action) => {
        switch (action.type) {
            case "change_increase":
                return { ...state, value: state.value + action.payload };
            case "change_decrease":
                return { ...state, value: state.value + action.payload };
            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, { value: 0 });
    return (
        <>
            <Text>Count: {state.value}</Text>
            <Button title="Increase" onPress={() => dispatch({ "type": "change_increase", payload: 1 })}></Button>
            <Button title='Decrease' onPress={() => dispatch({ "type": "change_decrease", payload: -1 })}></Button>
            <Text>From useContext:{valueFromUseContext}</Text>
        </>
    );
}

export default Counter