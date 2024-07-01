import React, { useState } from 'react'
import { Text } from 'react-native'
import { RockPaperScissorComponent } from '../components/index'
const RockPaperScissor = () => {
    const [userPoints, setUserPoints] = useState(0);
    const [computerPoints, setComputerPoints] = useState(0);
    const [result, setResult] = useState("");

    return (
        <>
            <RockPaperScissorComponent title="rock"
                setUserPoints={() => setUserPoints(userPoints + 1)}
                setComputerPoints={() => setComputerPoints(computerPoints + 1)}
                setResult={setResult}
            >
            </RockPaperScissorComponent>

            <RockPaperScissorComponent title="paper"
                setUserPoints={() => setUserPoints(userPoints + 1)}
                setComputerPoints={() => setComputerPoints(computerPoints + 1)}
                setResult={setResult}
            >
            </RockPaperScissorComponent>

            <RockPaperScissorComponent title="scissor"
                setUserPoints={() => setUserPoints(userPoints + 1)}
                setComputerPoints={() => setComputerPoints(computerPoints + 1)}
                setResult={setResult}
            >
            </RockPaperScissorComponent>

            <Text>UserPoints: {userPoints}</Text>
            <Text>ComputerPoints: {computerPoints}</Text>
            <Text>{result}</Text>
        </>
    )
}

export default RockPaperScissor