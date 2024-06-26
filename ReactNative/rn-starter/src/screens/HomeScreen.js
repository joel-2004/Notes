import React from "react";
import { Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {

  return (
    <>
      <Text style={styles.text}>Hello</Text>
      <Button title="Go to First Component"
        onPress={() => props.navigation.navigate("First")} />

      <TouchableOpacity
        onPress={() => props.navigation.navigate("List")}>
        <Text>Go To List Demo</Text>
      </TouchableOpacity>
      <Button onPress={() => props.navigation.navigate("Image")} title="Go to image"></Button>
      <Button title="Go to Counter" onPress={() => props.navigation.navigate("Counter")}></Button>
      <Button title="Go to Name Form" onPress={() => props.navigation.navigate("NameForm")}></Button>
      <Button title="Go to Fetch Data" onPress={() => props.navigation.navigate("Fetch")}></Button>
      <Button title="Go to Color Screen" onPress={() => props.navigation.navigate("Color")}></Button>
      <Button title="Go to Single Screen" onPress={() => props.navigation.navigate("SingleColor")}></Button>
    </>

  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    display: "flex",
    textAlign: "center",
  },
});


export default HomeScreen;
