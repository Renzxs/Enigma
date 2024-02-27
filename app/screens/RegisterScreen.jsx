import { View, Text, Button, TextInput, StyleSheet, Alert, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

export default function RegisterScreen() {

   const navigation = useNavigation();
 
   const [username, setUsername] = useState();
   const [password, setPassword] = useState();

   const onLoginHandler = () => {
    if(username && password) {
        Alert.alert("Successfully created an account");
        navigation.navigate("Login");
    } else {
        Alert.alert("Invalid Input");
    }   
   }


  return (
    <View style={{padding: 10, paddingTop: 30, height: '100%', justifyContent: 'center'}}>
      <View>
        <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 10}}>Sign up</Text> 
        <TextInput placeholder='Create username' style={styles.input} value={username} onChangeText={text => setUsername(text)}/>
        <TextInput placeholder='Create password' secureTextEntry={true} style={styles.input} value={password} onChangeText={text => setPassword(text)}/>
        
        <Button title='Login' onPress={onLoginHandler}/>

        <TouchableOpacity onPress={() => {navigation.navigate('Login')}}>
          <Text style={{textAlign: 'center', marginTop: 20}}>Already have account? Login</Text>
        </TouchableOpacity>
      </View>

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