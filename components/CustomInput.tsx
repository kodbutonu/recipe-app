import React, { useState } from "react";
import { StyleSheet, View, Text, SafeAreaView, TextInput } from "react-native";

type CustomInputProps = {
  label?: string;
  isPassword?: boolean;
};
export const CustomInput = (props: CustomInputProps) => {
  const [text, onChangeText] = useState("");
  console.log(text);
  return (
    <View>
      <Text style={styles.textStyle}>{props.label}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        secureTextEntry={props.isPassword?true:false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  textStyle: {
    fontSize: 15,
    color: "#000000",
  },
});
