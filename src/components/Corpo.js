// src/components/Corpo.js
import React from 'react';
import { View, Text } from 'react-native';
import Styles from '../styles/StyleSheet';

const Corpo = () => {
  return (
    <View style={Styles.corpoContainer}>
      <Text style={Styles.corpoTexto}>Conteúdo do corpo do site...</Text>
    </View>
  );
};

export default Corpo;
