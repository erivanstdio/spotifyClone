import React from 'react';
import { View, StatusBar } from 'react-native';

import styles from './styles';

const Home = () => {
  return(
    <View style={styles.container}>
      <StatusBar backgroundColor="#101040"/>
    </View>
  );
}

export default Home;