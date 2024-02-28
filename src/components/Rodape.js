// src/components/Rodape.js
import React from 'react';
import { View, Text } from 'react-native';
import Styles from '../styles/StyleSheet';

const Rodape = () => {
  return (
    <View style={Styles.rodapeContainer}>
      <Text style={Styles.rodapeTexto}>Rodapé do meu site</Text>
    </View>
  );
};

export default Rodape;
