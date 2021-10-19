import React from 'react';
import { Image } from 'react-native';

const Icon = ( {iconName, size, color} ) => {
  return (
    <Image
      style={{height: size, width: size, tintColor: color}} 
      source={ iconName === "Home" ? require('../../assets/home.png') : 
      iconName === "Search" ? require('../../assets/search.png') : 
      require('../../assets/library.png')} 
    />
  );
}

export default Icon;