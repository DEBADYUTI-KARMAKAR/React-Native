import { StatusBar } from "expo-status-bar";
import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import CurrencyButton from "./components/CurrencyButton";
import { currencyByRupee } from "./constants";
import { useState } from "react";

export default function App(): JSX.Element {
  const [inputValue, setInputValue] = useState("");
  const [resultValue, setResultValue] = useState("");
  const [fromCurrency, setFromCurrency] = useState("");

  const buttonPressed = (targetValue: Currency) => {
    if (!inputValue) {
      return (
        <View>
          <Text>Enter a value to convert</Text>
        </View>
      );
    }
    const inputAmount = parseFloat(inputValue);
    if (!isNaN(inputAmount)) {
      const convertedValue = inputAmount * targetValue.value;
      const result = `${inputAmount} INR is equal to ${convertedValue.toFixed(
        2
      )} ${targetValue.symbol}`;
      setResultValue(result);
      setFromCurrency(targetValue.name);
    } else {
      return (
        <View>
          <Text>Enter a valid number</Text>
        </View>
      );
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
              style={styles.input}
              placeholder="Enter Rupees"
              keyboardType="numeric"
              maxLength={14}
              value={inputValue}
              clearButtonMode="always"
              onChangeText={(inputValue) => setInputValue(inputValue)}
            ></TextInput>
          </View>
          {resultValue && <Text style={styles.resultText}>{resultValue}</Text>}
        </View>
        <View style={styles.buttonContainer}>
          <FlatList
          numColumns={3}
          data={currencyByRupee}
          keyExtractor={(item) => item.name}
          renderItem={({item})=>(
            <Pressable
            style={[
              styles.buttonContainer,
              fromCurrency===item.name&&styles.selected
            ]}
            onPress={() => buttonPressed(item)}
            >
              <CurrencyButton {...item} />
            </Pressable>
          )}

          ></FlatList>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 40,
  },
  topContainer: {
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 20,
  },
  rupeesContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rupee: {
    fontSize: 30,
    color: "purple",
    marginBottom: 4,
  },
  input: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
    color: "purple",
    borderBottomWidth: 1,
    borderBottomColor: "purple",
    marginLeft: 10,
    width: 200,
  },
  resultText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
    color: "purple",
  },
  buttonContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    backgroundColor: "lightgrey",
    padding: 10,
    borderRadius: 10,
  },
  selected: {
    backgroundColor: "purple",
  },
});
