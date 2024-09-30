// ErrorMessage.js
import React from 'react';
import { Text, StyleSheet } from 'react-native';

const ErrorMessage = ({ message }) => {
  if (!message) return null; // Không hiển thị nếu không có thông báo

  return (
    <Text style={styles.errorText}>{message}</Text>
  );
};

const styles = StyleSheet.create({
  errorText: {
    color: 'red', // Màu đỏ cho thông báo lỗi
    marginTop: 5,
    fontSize: 14,
  },
});

export default ErrorMessage;
