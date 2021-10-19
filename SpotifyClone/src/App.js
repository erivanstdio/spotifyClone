import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import BottomBar from './components/BottomBar';


const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <BottomBar/>
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});

export default App;
