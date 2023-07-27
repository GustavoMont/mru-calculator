import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export const InputWithLabel = ({ label, value, onChangeText, name }) => {
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={(value) => {
          if (/^[0-9]*$/.test(value)) {
            onChangeText(name, value);
          }
        }}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 2,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#9ca3af",
    padding: 8,
    backgroundColor: "#fff",
  },
});
