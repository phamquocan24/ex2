import React from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native';
import PhoneNumberInput from './PhoneNumberInput'; // Adjust path if necessary

const App = () => {
  const handlePhoneNumberSubmit = (phoneNumber) => {
    console.log('Số điện thoại:', phoneNumber);
    // Further processing can go here
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.header}>Đăng nhập</Text>
      <View style={styles.shadowLine} />
      <Text style={styles.subHeader}>Nhập số điện thoại</Text>
      <Text style={styles.description}>
        Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro
      </Text>
      
      <PhoneNumberInput onPhoneNumberSubmit={handlePhoneNumberSubmit} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 20,
    top: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  shadowLine: {
    height: 2,
    backgroundColor: '#f0f0f0',
    marginBottom: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: 'normal',
    marginBottom: 10,
  },
  description: {
    fontSize: 10,
    marginBottom: 20,
  },
});

export default App;
