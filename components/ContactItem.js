import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ContactItem({ nombre, telefono, onEliminar }) {
  return (
    <View style={styles.contacto}>
      <View>
        <Text style={styles.nombre}>{nombre}</Text>
        <Text>{telefono}</Text>
      </View>
      <TouchableOpacity onPress={onEliminar}>
        <Text style={styles.eliminar}>Eliminar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  contacto: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#f1f1f1',
    borderRadius: 5,
  },
  nombre: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  eliminar: {
    color: 'red',
    fontWeight: 'bold',
  },
});
