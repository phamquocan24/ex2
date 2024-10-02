import React from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Button } from 'react-native';
import PhoneNumberInput from './PhoneNumberInput'; // Adjust path if necessary
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// SignInScreen Component
function SignInScreen({ navigation }) {
  const handlePhoneNumberSubmit = (phoneNumber) => {
    console.log('Số điện thoại:', phoneNumber);
    // Further processing can go here
    // Navigate to HomeScreen after phone number submission
    navigation.navigate('Home');
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
}

// HomeScreen Component
function HomeScreen({ navigation }) {
  return (
    <View style={styles.center}>
      <Text style={styles.homeScreenText}>Home Screen</Text>
      <View style={styles.spacing} />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

// DetailsScreen Component
function DetailsScreen() {
  return (
    <View style={styles.center}>
      <Text style={styles.detailsScreenText}>Details Screen</Text>
    </View>
  );
}

// Declare Stack only once
const Stack = createNativeStackNavigator();

// App Component
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="Enter numbers to login" component={SignInScreen} options={{ headerTitleStyle: { fontSize: 26 } }} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 20,
    top: 10,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  homeScreenText: {
    fontSize: 20, 
    marginBottom: 10,
  },
  spacing: {
    height: 25, 
  },
  detailsScreenText: {
    fontSize: 24, 
    fontWeight: 'bold',
  },
});
