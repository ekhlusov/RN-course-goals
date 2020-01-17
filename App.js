import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [text, changeText] = useState("Мир");

  const handleChange = () => changeText(text === 'Мир' ? "Витя" : 'Мир');

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Привет, {text}!!!!</Text>
      <Text>Как дела?</Text>

      <Button title={`Поменять на ${text === 'Мир' ? "Витя" : 'Мир'}`} onPress={handleChange} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
