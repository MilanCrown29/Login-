import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Login from '../atom/Login/Login';
import { baseStyles } from '../styles/theme';
import FirebaseUtil from '../utils/FirebaseUtil';
import loginScreenStyles from './LoginScreen/style';


export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 

  // sign in or sign up
  const [create, setCreate] = useState(false);

  const signIn = () => {
    FirebaseUtil.signIn(email, password).catch((e) => {
      console.log(e);
      alert('Email/ password is wrong');
    });
  };
  const signUp = () => {
    FirebaseUtil.signUp(email, password).catch((e) => {
      console.log(e);
      alert('Somthing went wrong');
    });
  };

  // if (signIn) {
  //   return (
  //     <ScrollView contentContainerStyle={loginScreenStyles.container}>
  //       <Login
  //         heading="Getting Started"
  //         subHeading="Creating a account to continue"
  //         signIn={false}
  //       />
  //       <Text
  //         style={[baseStyles.body, loginScreenStyles.footer]}
  //         onPress={() => setSignIn(false)}>
  //         Already have an Account ?
  //       </Text>
  //       <Text style={baseStyles.headerSm}>SignIn</Text>
  //     </ScrollView>
  //   );
  // } else {
  //   return (
  //     <ScrollView contentContainerStyle={loginScreenStyles.container}>
  //       <Login
  //         heading="Welcome back!"
  //         subHeading="Use your account email and password"
  //         signIn={true}
  //       />
  //       <Text
  //         style={[baseStyles.body, loginScreenStyles.footer]}
  //         onPress={() => setSignIn(true)}>
  //         Don't have an account?
  //       </Text>
  //       <Text style={baseStyles.headerSm}>Sign Up</Text>
  //     </ScrollView>
  //   );
  // }
   return (

    <View style={styles.container}>
       <TextInput
       placeholder="Email"
         onChangeText={setEmail}
         value={email}
         style={styles.textInput}
       />
       <TextInput
         placeholder="Password"
         onChangeText={setPassword}
         value={password}
         style={styles.textInput}
         secureTextEntry={true}
       />
       {create ? (
         <>
           <Button title="Sign Up" onPress={() => signUp()} />
           <Text style={styles.text} onPress={() => setCreate(false)}>
             Sign In
           </Text>
         </>
     ) : (
         <>
           <Button title="Sign in" onPress={() => signIn()} />
          <Text style={styles.text} onPress={() => setCreate(true)}>
             Create an Account
           </Text>
         </>
       )}
     </View>
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  text: {
    color: 'blue',
    marginTop: 20,
  },
});
