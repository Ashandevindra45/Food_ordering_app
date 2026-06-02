import React from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

const SignupScreen = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <TextInput placeholder="Name" placeholderTextColor="#999" style={styles.input} />
      <TextInput placeholder="Email" placeholderTextColor="#999" style={styles.input} />
      <TextInput placeholder="Password" placeholderTextColor="#999" secureTextEntry style={styles.input} />

      <TouchableOpacity style={styles.button} onPress={() => navigation.replace('Main')}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>© Ashan Devindra</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', padding: 24, backgroundColor: '#020617'},
  title: {fontSize: 32, color: '#fff', fontWeight: '700', marginBottom: 30},
  input: {backgroundColor: '#1e293b', borderRadius: 12, padding: 16, color: '#fff', marginBottom: 16},
  button: {backgroundColor: '#22c55e', padding: 16, borderRadius: 14, alignItems: 'center'},
  buttonText: {color: '#fff', fontSize: 16, fontWeight: '700'},
  footer: {color: '#94a3b8', textAlign: 'center', marginTop: 40},
});

export default SignupScreen;
