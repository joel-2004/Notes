import React, { useEffect, useState } from 'react'
import { Button, Text } from 'react-native'
const RockPaperScissorComponent = (props) => {
    const [computerChoice, setComputerChoice] = useState("");
    const [userChoice, setUserChoice] = useState("");

    const computerChoiceRandom = () => {
        const arr = ["rock", "paper", "scissor"];
        let rand = Math.floor(Math.random() * 3);
        setComputerChoice(arr[rand]);
    }

    const algo = () => {
        setUserChoice(props.title);
        computerChoiceRandom();
    }

    useEffect(() => {
        // console.log(userChoice + " " + computerChoice);
        if (userChoice === "" || computerChoice === "")
            return;
        if (userChoice === computerChoice) {
            // console.log("draw");
            props.setResult(`Draw, User's Choice : ${userChoice}, Computer's Choice: ${computerChoice}`);
            return;
        }
        else if (userChoice === "rock" && computerChoice === "scissor" || userChoice === "paper" && computerChoice == "rock" || userChoice === "scissor" && computerChoice === "paper") {
            props.setUserPoints();
            // console.log("User won");
            props.setResult(`User Won, User's Choice : ${userChoice}, Computer's Choice: ${computerChoice},`);
            return;
        }
        else {
            props.setComputerPoints();
            // console.log("Computer Won");
            props.setResult(`Computer Won, User's Choice : ${userChoice}, Computer's Choice: ${computerChoice}`);
            return;
        }
    }, [userChoice, computerChoice])

    return (
        <>
            <Text>{props.title}</Text>
            <Button title={`${props.title}`} onPress={algo}></Button>
        </>
    )
}

export default RockPaperScissorComponent