import { StyleSheet, Text, View } from "react-native";

const FirstComponent = () => {
    const name = "Lifafa"
    const jsxElement = <Text>This is a const</Text>
    return (
        <View>
            <Text style={style.textStyle}>
                This is a first Reac Native Component
            </Text>
            <Text>Hello {name}</Text>
            {jsxElement}
        </View>
    );
}

//StyleSheet.create is used just to validate texts inside the objecst such as fontSize would not show error but fontsize would,
//but if we create using oject it would not show error and just ignores it
const style = StyleSheet.create({
    textStyle: {
        backgroundColor: "yellow",
        display: "flex",
        fontSize: 20
    }
})

export default FirstComponent;