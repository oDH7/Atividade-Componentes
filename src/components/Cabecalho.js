// src/components/Cabecalho.js
import React from 'react';
import { View, Text } from 'react-native';
import Styles from '../styles/StyleSheet';

const Cabecalho = () => {
  return (
    <View style={Styles.cabecalhoContainer}>
      <Text style={Styles.cabecalhoTexto}>Meu Site</Text>
    </View>
  );
};

export default Cabecalho;
