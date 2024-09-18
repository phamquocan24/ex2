import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView} from 'react-native';

const PhoneNumberInput = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePress = () => {
    // Xử lý khi nhấn nút "Tiếp tục"
    console.log('Số điện thoại:', phoneNumber);
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.header}>Đăng nhập</Text>

      {/* Thanh ngang với đổ bóng */}
      <View style={styles.shadowLine} />

      <Text style={styles.subHeader}>Nhập số điện thoại</Text>

      <Text style={styles.description}>
        Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nhập số điện thoại của bạn"
        placeholderTextColor="#999"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />

      <TouchableOpacity 
        style={[styles.button, phoneNumber ? styles.activeButton : styles.disabledButton]} 
        onPress={handlePress}
        disabled={!phoneNumber}
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
    backgroundColor: '#f0f0f0', // Màu của thanh ngang
    marginBottom: 40, // Khoảng cách giữa tiêu đề và phần nhập
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3, // Để đổ bóng cho Android
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
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 20,
    fontSize: 15,
    paddingLeft: 10,
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