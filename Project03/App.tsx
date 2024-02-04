import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import * as Yup from "yup";
import { Formik } from "formik";

const validationSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .required()
    .min(4, "Should be min 4 char")
    .max(16, "Should be max 16 char")
    .label("Password"),
});
export default function App() {
  const [password, setPassword] = useState("");
  const [isPassGenerated, setIsPassGenerated] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatedPassword = (passwordLength: number) => {
    let charList = "";
    let upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
    let numberChar = "0123456789";
    let symbolChar = "!@#$%^&*()_+";
    if (lowerCase) {
      charList += lowerCaseChar;
    }
    if (upperCase) {
      charList += upperCaseChar;
    }
    if (numbers) {
      charList += numberChar;
    }
    if (symbols) {
      charList += symbolChar;
    }

    const passwordMain = createPassword(charList, passwordLength);
    setPassword(passwordMain);
    setIsPassGenerated(true);
  };
  const createPassword = (Characters: string, passwordLength: number) => {
    let pass = "";
    for (let i = 0; i < passwordLength; i++) {
      pass += Characters.charAt(Math.floor(Math.random() * Characters.length));
    }
    return pass;
  };
  const resetPassword = () => {
    setPassword("");
    setIsPassGenerated(false);
    setLowerCase(false);
    setUpperCase(false);
    setNumbers(false);
    setSymbols(false);
  };

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Password Generator</Text>

          <Formik
            initialValues={{ passwordLength: "" }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log(values);
              generatedPassword(+values.passwordLength);
            }}
          >
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              handleSubmit,
              isSubmitting,
              handleReset,
              /* and other goodies */
            }) => (
              <>
                <View style={styles.inputWrapper}>
                  <View style={styles.inputColumn}>
                    <Text style={styles.heading}>Password Length</Text>
                    {touched.passwordLength && errors.passwordLength && (
                      <Text style={styles.errorText}>{errors.passwordLength}</Text>
                    )}
 
                  </View>
                  <TextInput
                      style={styles.inputStyle}
                      value={values.passwordLength}
                      onChangeText={handleChange("passwordLength")}
                      placeholder="Example: 8"
                      keyboardType="numeric"
                    ></TextInput>
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Lowercase</Text>
                  <BouncyCheckbox
                    isChecked={lowerCase}
                    onPress={(isChecked: boolean) => setLowerCase(isChecked)}
                    fillColor="green"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Uppercase</Text>
                  <BouncyCheckbox
                    isChecked={upperCase}
                    onPress={(isChecked: boolean) => setUpperCase(isChecked)}
                    fillColor="orange"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Numbers</Text>
                  <BouncyCheckbox
                    isChecked={numbers}
                    onPress={(isChecked: boolean) => setNumbers(isChecked)}
                    fillColor="blue"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Symbols</Text>
                  <BouncyCheckbox
                    isChecked={symbols}
                    onPress={(isChecked: boolean) => setSymbols(isChecked)}
                    fillColor="red"
                  />
                </View>
                <View style={styles.formActions}>
                <TouchableOpacity
                  disabled={!isValid}
                    style={styles.generateButton}
                    onPress={()=>{

                      handleSubmit()
                      
                    }
                    }
                  >
                    <Text>Generate</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                  disabled={!isPassGenerated}
                    style={styles.restartButton}
                    onPress={()=>{

                      handleReset()
                      resetPassword()
                      
                    }
                    }
                  >
                    <Text>Reset</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>
        {
          isPassGenerated && (
            <View style={styles.formContainer}>
              <Text style={styles.heading}>Generated Password</Text>
              <Text style={styles.title}>Your Password is:</Text>
              <Text selectable={true}>{password}</Text>
            </View>
          )
        }
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  formContainer: {
    width: "100%",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputWrapper: {
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

  },
  formActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  inputColumn: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  inputStyle: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  errorText: {
    color: "red",
  },
  generateButton: {
    padding: 10,
    backgroundColor: "green",
    borderRadius: 5,

  },
  generateButtonText: {
    color: "#fff",
    textAlign: "center",
  },
  restartButton: {
    padding: 10,
    backgroundColor: "red",
    borderRadius: 5,
  },
});
