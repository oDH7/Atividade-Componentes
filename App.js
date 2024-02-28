// App.js
import React from 'react';
import { View } from 'react-native';
import Cabecalho from './src/components/Cabecalho';
import Corpo from './src/components/Corpo';
import Rodape from './src/components/Rodape';
import Styles from './src/styles/StyleSheet';

const App = () => {
  return (
    <View>
      <Cabecalho />
      <Corpo />
      <Rodape />
    </View>
  );
};

export default App;
