import { View, Text, Button, TextInput, StyleSheet, Alert, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {

   const navigation = useNavigation();
 
   const [username, setUsername] = useState();
   const [password, setPassword] = useState();

   const onLoginHandler = () => {
    if(username && password) {
        Alert.alert("Logged in");
        navigation.navigate("Home", {username, password});
    } else {
        Alert.alert("Invalid Input");
    }   
   }


  return (
    <View style={{padding: 10, paddingTop: 30, height: '100%', justifyContent: 'center'}}>
      <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 10}}>Login</Text> 
      <TextInput placeholder='Username' style={styles.input} value={username} onChangeText={text => setUsername(text)}/>
      <TextInput placeholder='Password' secureTextEntry={true} style={styles.input} value={password} onChangeText={text => setPassword(text)}/>
      
      <Button title='Login' onPress={onLoginHandler}/>

      <TouchableOpacity onPress={() => {navigation.navigate('Register')}}>
        <Text style={{textAlign: 'center', marginTop: 20}}>No account yet? Sign in</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 5,
        marginBottom: 6,
        borderRadius: 5
    }
})