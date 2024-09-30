import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Alert } from 'react-native';
import CustomTextInput from './CustomTextInput'; // Import the custom component

const PhoneNumberInput = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const formatPhoneNumber = (number) => {
    const cleaned = number.replace(/\D/g, '');
    const match = cleaned.match(/^(84|0)(\d{9})$/);
    if (match) {
      return `+84 ${match[2].substring(0, 3)} ${match[2].substring(3, 6)} ${match[2].substring(6)}`;
    }
    return number;
  };

  const handlePress = () => {
    if (!validatePhoneNumber(phoneNumber)) {
      Alert.alert('Số điện thoại không hợp lệ', 'Vui lòng nhập số điện thoại đúng định dạng.');
      return;
    }
    console.log('Số điện thoại:', phoneNumber);
  };

  const validatePhoneNumber = (number) => {
    const cleaned = number.replace(/\D/g, '');
    return cleaned.length === 10 || cleaned.length === 11;
  };

  const handleChangeText = (text) => {
    const formattedText = formatPhoneNumber(text);
    setPhoneNumber(formattedText);
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.header}>Đăng nhập</Text>
      <View style={styles.shadowLine} />
      <Text style={styles.subHeader}>Nhập số điện thoại</Text>
      <Text style={styles.description}>
        Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro
      </Text>
      
      {/* Use the custom text input component here */}
      <CustomTextInput
        placeholder="Nhập số điện thoại của bạn"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={handleChangeText}
      />

      <TouchableOpacity 
        style={[styles.button, validatePhoneNumber(phoneNumber) ? styles.activeButton : styles.disabledButton]} 
        onPress={handlePress}
        disabled={!validatePhoneNumber(phoneNumber)}
      >
        <Text style={styles.buttonText}>Tiếp tục</Text>
      </TouchableOpacity>
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
  button: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  activeButton: {
    backgroundColor: '#007AFF',
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default PhoneNumberInput;
