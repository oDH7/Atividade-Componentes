// src/styles/StyleSheet.js
import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  cabecalhoContainer: {
    backgroundColor: '#4CAF50', // Verde
    padding: 20,
    alignItems: 'center',
  },
  cabecalhoTexto: {
    color: 'white',
    fontSize: 24,
  },
  corpoContainer: {
    backgroundColor: '#FFC107', // Amarelo
    padding: 20,
  },
  corpoTexto: {
    color: '#333',
    fontSize: 18,
  },
  rodapeContainer: {
    backgroundColor: '#2196F3', // Azul
    padding: 10,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  rodapeTexto: {
    color: 'white',
  },
  separador: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginVertical: 10,
  },
});

export default Styles;
