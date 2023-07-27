import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { InputWithLabel } from "./components/form/InputWithLabel";

export default function App() {
  const [form, setForm] = useState({
    velocity: 0,
    initialPosition: 0,
    time: 0,
  });

  const onInputChange = (name, value) => {
    setForm((prevValues) => ({
      ...prevValues,
      [name]: Number(value),
    }));
  };
  const getResult = () => {
    const allValues = Object.values(form);
    const result = allValues.reduce((prevValue, currentValue) => {
      return prevValue * currentValue;
    }, 1);
    return result;
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <>
          <StatusBar style="light" backgroundColor="#020617" />
          <Text style={styles.title}>Movimento Retilíneo Uniforme</Text>
          <View style={styles.formContainer}>
            <Text style={styles.defaultResult}>
              Resultado:{" "}
              <Text style={[styles.defaultResult, styles.result]}>
                {getResult()}m
              </Text>
            </Text>
            <InputWithLabel
              label={"Velocidade(m/s):"}
              name={"velocity"}
              value={form.velocity}
              onChangeText={onInputChange}
            />
            <InputWithLabel
              label={"Posição inicial(m):"}
              name={"initialPosition"}
              value={form.initialPosition}
              onChangeText={onInputChange}
            />
            <InputWithLabel
              label={"Tempo(s):"}
              name={"time"}
              value={form.time}
              onChangeText={onInputChange}
            />
          </View>
        </>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eff6ff",
    padding: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "500",
    color: "#2563eb",
  },
  formContainer: {
    gap: 12,
    marginTop: 70,
    justifyContent: "center",
  },
  defaultResult: {
    fontSize: 24,
    marginBottom: 16,
  },
  result: {
    fontWeight: "500",
    color: "#2563eb",
  },
});
