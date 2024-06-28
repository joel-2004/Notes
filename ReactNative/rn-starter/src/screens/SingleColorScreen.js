import React, { act, useReducer, useState } from 'react'
import { Button, Text, View } from 'react-native'
import { SingleColorReusable } from '../components/index';
const SingleColorScreen = () => {

    //USING USEREDUCE
    //state - current state{red:number,green:number,blue:number}
    //action - how to change the curret state

    /*in action by naming convention we use action.type for what to change and
     set it as change_whateverToChange and payload as the number*/

    const reducer = (state, action) => {
        switch (action.type) {
            case "change_red":
                if (state.red + action.payload > 255 || state.red + action.payload < 0)
                    return state;
                return { ...state, red: state.red + action.payload };
            case "change_green":
                if (state.green + action.payload > 255 || state.green + action.payload < 0)
                    return state;
                return { ...state, green: state.green + action.payload };
            case "change_blue":
                if (state.blue + action.payload > 255 || state.blue + action.payload < 0)
                    return state;
                return { ...state, blue: state.blue + action.payload };

            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, { "red": 0, "green": 0, "blue": 0 });
    return (
        <>
            {/*
        to access the reducer we us dispatch and send it the necessary object for action
        */
            }
            <View style={{ height: 100, width: 100, backgroundColor: `rgb(${state.red},${state.green},${state.blue})` }}></View>
            <SingleColorReusable color="Red" increase={() => dispatch({ "type": "change_red", payload: 15 })} decrease={() => dispatch({ "type": "change_red", payload: -15 })}></SingleColorReusable>
            <SingleColorReusable color="Green" increase={() => dispatch({ "type": "change_green", payload: 15 })} decrease={() => dispatch({ "type": "change_green", payload: -15 })}></SingleColorReusable>
            <SingleColorReusable color="Blue" increase={() => dispatch({ "type": "change_blue", payload: 15 })} decrease={() => dispatch({ "type": "change_blue", payload: -15 })}></SingleColorReusable>
        </>

    )
    /* 
USING USESTATE
const [red, setRed] = useState(0);
 const [green, setGreen] = useState(0);
 const [blue, setBlue] = useState(0);
 const setColor = (color, newValue) => {
     if (color === "red") {
         if (red + newValue > 255 || red + newValue < 0)
             return;
         else
             setRed(red + newValue);
     }
     if (color === "green") {
         if (green + newValue > 255 || green + newValue < 0)
             return;
         else
             setGreen(green + newValue);
     }
     if (color == "blue") {
         if (blue + newValue > 255 || blue + newValue < 0)
             return;
         else
             setBlue(blue + newValue);
     }
 }
 return (
     <>
         <View style={{ height: 100, width: 100, backgroundColor: `rgb(${red},${green},${blue})` }}></View>
         <SingleColorReusable color="Red" increase={() => setColor("red", 10)} decrease={() => setColor("red", -10)}></SingleColorReusable>
         <SingleColorReusable color="Green" increase={() => setColor("green", 10)} decrease={() => setColor("green", -10)}></SingleColorReusable>
         <SingleColorReusable color="Blue" increase={() => setColor("blue", 10)} decrease={() => setColor("blue", -10)}></SingleColorReusable>
     </>
 
 )
     */


}

export default SingleColorScreen