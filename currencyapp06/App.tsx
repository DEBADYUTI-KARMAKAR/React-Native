import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";

//constants
import { currencyByRupee } from "./src/constants";
//components
import CurrencyButton from "./src/components/CurrencyButton";
import Snackbar from "react-native-snackbar";
import { useState } from "react";

export default function App(): JSX.Element {
  const [inputValue, setInputValue] = useState("");
  const [resultValue, setResultValue] = useState("");
  const [currency, setCurrency] = useState("");

  const buttonPressed = (targetValue: Currency) => {
    if (!inputValue) {
      return Snackbar.show({
        text: "Please enter a value",
        backgroundColor: "#EA7773",
        textColor: "#000000",
      });
    }
    const inputAmount = parseFloat(inputValue);
    if (!isNaN(inputAmount)) {
      const convertedValue = inputAmount * targetValue.value;
      const result = `${targetValue.symbol} ${convertedValue.toFixed(2)}`;
      setResultValue(result);
      setCurrency(targetValue.name);
    } else {
      Snackbar.show({
        text: "Please enter a valid number",
        backgroundColor: "#EA7773",
        textColor: "#000000",
      });
    }
  };
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.rupeesContainer}>
            <Text style={styles.rupee}>₹</Text>
            <TextInput
              style={{ fontSize: 30, marginHorizontal: 10 }}
              placeholder="Enter Value"
              keyboardType="numeric"
              maxLength={14}
              value={inputValue}
              clearButtonMode="always"
              onChangeText={setInputValue}
            />
          </View>
          {
            resultValue && <View style={styles.rupeesContainer}>
              <Text style={styles.rupee}>{resultValue}</Text>
              <Text style={{ fontSize: 20, marginLeft: 10 }}>{currency}</Text>
            </View>
            
          }
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  topContainer: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  rupeesContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  rupee: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
