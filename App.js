import React from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import PhoneNumberInput from './PhoneNumberInput'; // Adjust path if necessary
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthProvider, useAuth } from './context/AuthContext'; // Ensure the correct path for AuthContext

// SignInScreen Component
function SignInScreen({ navigation }) {
  const { login } = useAuth(); // Get login function from AuthContext

  const handlePhoneNumberSubmit = (phoneNumber) => {
    console.log('Số điện thoại:', phoneNumber);
    login({ phoneNumber }); // Store the phone number in context
    navigation.navigate('Home'); // Navigate to HomeScreen
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
  const { user, logout } = useAuth(); // Use user from AuthContext

  const handleLogout = () => {
    logout(); // Clear the phone number
    navigation.navigate('SignIn'); // Navigate back to the sign-in screen
  };

  return (
    <View style={styles.homeContainer}>
      <Text style={styles.homeScreenText}>Home Screen</Text>
      <Text style={styles.welcomeText}>Welcome, {user?.phoneNumber}!</Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Details')}
      >
        <Text style={styles.buttonText}>Go to Details</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[styles.button, styles.logoutButton]}
        onPress={handleLogout}
      >
        <Text style={styles.buttonText}>Logout SignIn Screen</Text>
      </TouchableOpacity>
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
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SignIn">
          <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerTitleStyle: { fontSize: 26 } }} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
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
  homeContainer: {
    flex: 1,
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    padding: 20,
    backgroundColor: '#fff',
  },
  homeScreenText: {
    fontSize: 20,
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 16, // Style for welcome message
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#1E90FF',
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
    borderRadius: 5,
    width: 200, // Set button width for consistent sizing
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: '#FF6347',
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
  detailsScreenText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
