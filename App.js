import React, {useEffect} from 'react';
import {SafeAreaView, Text, StyleSheet, View} from 'react-native';
import AppStack from './src/navigations/AppStack';


import LoginProvider from './src/utils/LoginProvider';

const App = () => {
  return (
    <View style={styles.container}>
      <LoginProvider>
       <AppStack/>
      </LoginProvider>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
export default App;
