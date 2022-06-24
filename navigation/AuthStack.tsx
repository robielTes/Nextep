import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../screens/ProfileScreen';
import Login from '../screens/LoginScreen';
import photoFullScreen from '../screens/ProfilePhotoScreen';


const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="ProfilePhoto" component={photoFullScreen} />
      </Stack.Navigator>
  );
}

export default AuthStack;