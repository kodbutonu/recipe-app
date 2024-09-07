import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image } from 'react-native';
import { CustomInput } from './components/CustomInput';
import CustomButton from './components/CustomButton';


function App() {
  return <View>
    <Image source={require('./assets/drinking.png')}/>
    <CustomInput label={"Email"}/>
    <CustomInput label={"Password"} isPassword={true}/>
    <CustomButton label={"SIGN IN"} onPress={onPress}/>
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding:"10%"
  },
});

export default App;
