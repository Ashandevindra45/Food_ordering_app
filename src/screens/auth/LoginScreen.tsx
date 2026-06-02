import React, {useContext} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import {AppContext} from '../../context/AppContext';
import {translations} from '../../localization/translations';

const LoginScreen = ({navigation}: any) => {
  const {language} = useContext(AppContext);
  const t = translations[language];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t.welcome}</Text>
      <TextInput placeholder="Email" placeholderTextColor="#999" style={styles.input} />
      <TextInput placeholder="Password" placeholderTextColor="#999" secureTextEntry style={styles.input} />

      <TouchableOpacity style={styles.button} onPress={() => navigation.replace('Main')}>
        <Text style={styles.buttonText}>{t.login}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.link}>{t.signup}</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>© Ashan Devindra</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', padding: 24, backgroundColor: '#0f172a'},
  title: {fontSize: 32, color: '#fff', fontWeight: '700', marginBottom: 30},
  input: {backgroundColor: '#1e293b', borderRadius: 12, padding: 16, color: '#fff', marginBottom: 16},
  button: {backgroundColor: '#f97316', padding: 16, borderRadius: 14, alignItems: 'center'},
  buttonText: {color: '#fff', fontSize: 16, fontWeight: '700'},
  link: {color: '#f97316', textAlign: 'center', marginTop: 20},
  footer: {color: '#94a3b8', textAlign: 'center', marginTop: 40},
});

export default LoginScreen;
