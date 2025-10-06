import React, { useState } from 'react';
import {
 
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Alert,
  View
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import ContactItem from './components/ContactItem';

export default function App() {
  const [contactos, setContactos] = useState([]);
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');

  const agregarContacto = () => {
    if (!nombre.trim() || !telefono.trim()) {
      Alert.alert('Campos vacíos', 'Por favor completa ambos campos');
      return;
    }

    const nuevoContacto = {
      id: Date.now().toString(),
      nombre,
      telefono,
    };

    setContactos([...contactos, nuevoContacto]);
    setNombre('');
    setTelefono('');
  };

  const eliminarContacto = (id) => {
    setContactos(contactos.filter(contacto => contacto.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Lista de Contactos</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />

      <TextInput
        style={styles.input}
        placeholder="Teléfono"
        value={telefono}
        onChangeText={setTelefono}
        keyboardType="phone-pad"
      />

      <TouchableOpacity style={styles.boton} onPress={agregarContacto}>
        <Text style={styles.botonTexto}>Agregar</Text>
      </TouchableOpacity>

      <FlatList
        data={contactos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ContactItem
            nombre={item.nombre}
            telefono={item.telefono}
            onEliminar={() => eliminarContacto(item.id)}
          />
        )}
        ListEmptyComponent={<Text style={styles.empty}>No tiene agregado ningun contacto.</Text>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  boton: {
    backgroundColor: '#2e86de',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  botonTexto: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  empty: {
    textAlign: 'center',
    color: '#999',
    marginTop: 20,
  }
});
