import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [name, setName] = useState("Nam Bui");
  const [age, setAge] = useState(10);
  const [messageStatus, setMessageStatus] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setMessageStatus(true);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter name:</Text>
      <TextInput
        placeholder="e.g John Wick"
        style={styles.input}
        onChangeText={(val) => setName(val)}
      ></TextInput>
      <Text style={styles.title}>Enter age:</Text>
      <TextInput
        placeholder="e.g: 18"
        style={styles.input}
        onChangeText={(val) => setAge(val)}
      ></TextInput>

      {messageStatus && (
        <Text>
          Name: {name} Age: {age}
        </Text>
      )}

      <Button onPress={handleSubmit} title="Submit">
        Submit
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {},
  input: {
    borderWidth: 1,
    padding: 8,
    alignContent: "center",
    marginTop: 10,
    marginBottom: 10,
  },
});
