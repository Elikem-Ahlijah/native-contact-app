import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import GetStarted from './src/screens/GetStarted';
import LoginPage from './src/screens/LoginPage';
import SignInForm from './src/screens/SignInForm';
import RegisterForm from './src/screens/RegisterForm';
import MemberProfile from './src/screens/MemberProfile';
import ProfileCard from './src/screens/ProfileCard';
import QRScanner from './src/screens/QRScanner';
import ScannerCode from './src/screens/QRCode';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AntDesign } from '@expo/vector-icons';



const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <View style={styles.container}>
     
      <NavigationContainer>
      <Stack.Navigator screenOptions={{
					// header: () => null,
					headerStyle: {
						backgroundColor: 'red',
						
					},
					headerTitleStyle: {
						color: 'white',
					},
					headerTintColor: 'white'
					
				}}>
        <Stack.Screen options={{header:()=>null}} name='Get Started' component={GetStarted}/>
        <Stack.Screen options={{header:()=>null}} name='Welcome' component={LoginPage} />
        <Stack.Screen name='Register' component={RegisterForm}/>
        <Stack.Screen name='Sign In' component={SignInForm}/>
        <Stack.Screen options={({ navigation }) => {
						return {
							headerRight: () => {
								return (
									<TouchableOpacity
										onPress={() =>
											navigation.navigate('My Profile')
										}
									>
									<AntDesign name="user" size={24} color="white" />	
									</TouchableOpacity>
								);
							},
						};
					}} name='Ampersand' component={ScannerCode} />
        <Stack.Screen options={{header:()=>null}} name='Scanner' component={QRScanner}/>
        <Stack.Screen name='Member Profile' component={MemberProfile}/>
        <Stack.Screen name='My Profile' component={ProfileCard} />
        
      </Stack.Navigator>
    </NavigationContainer>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
