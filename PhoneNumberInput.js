import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import CustomTextInput from './CustomTextInput';
import ErrorMessage from './ErrorMessage';

const PhoneNumberInput = ({ onPhoneNumberSubmit }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const formatPhoneNumber = (number) => {
    const cleaned = number.replace(/\D/g, '');
    const match = cleaned.match(/^(84|0)(\d{9})$/);
    if (match) {
      return `+84 ${match[2].substring(0, 3)} ${match[2].substring(3, 6)} ${match[2].substring(6)}`;
    }
    return number;
  };

  const validatePhoneNumber = (number) => {
    const cleaned = number.replace(/\D/g, '');
    if (cleaned.length === 0) {
      return 'Vui lòng nhập đúng kí tự số.';
    } else if (cleaned.length < 10) {
      return 'Vui lòng nhập đủ 10 chữ số.';
    } else if (cleaned.length > 11) {
      return 'Số điện thoại không hợp lệ.';
    }
    return ''; // Không có lỗi
  };

  const handlePress = () => {
    const error = validatePhoneNumber(phoneNumber);
    if (error) {
      setErrorMessage(error);
      return;
    }
    setErrorMessage(''); // Xóa thông báo lỗi nếu hợp lệ
    onPhoneNumberSubmit(phoneNumber);
  };

  const handleChangeText = (text) => {
    const formattedText = formatPhoneNumber(text);
    setPhoneNumber(formattedText);

    // Gọi validatePhoneNumber để cập nhật thông báo lỗi ngay lập tức
    const error = validatePhoneNumber(formattedText);
    setErrorMessage(error);
  };

  return (
    <View>
      <CustomTextInput
        placeholder="Nhập số điện thoại của bạn"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={handleChangeText}
      />
      <ErrorMessage message={errorMessage} />
      <TouchableOpacity 
        style={[styles.button, !errorMessage ? styles.activeButton : styles.disabledButton]} 
        onPress={handlePress}
        disabled={!!errorMessage} // Disabled nếu có lỗi
      >
        <Text style={styles.buttonText}>Tiếp tục</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
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
