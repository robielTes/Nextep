import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from '../screens/OnboardingScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LoginScreen from '../screens/LoginScreen';
import PhotoFullScreen from '../screens/ProfilePhotoScreen';
import VoteTopicsScreen from '../screens/VoteTopicsScreen';
import VoteScreen from '../screens/VoteScreen';
import UpdateProfileScreen from '../screens/UpdateProfileScreen';


const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    
    <Stack.Navigator>
    <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{headerShown:false}} />
    <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} /> 
    <Stack.Screen name="Profile" component={ProfileScreen} />
    <Stack.Screen name="ProfilePhoto" component={PhotoFullScreen} />
    <Stack.Screen name="VoteTopics" component={VoteTopicsScreen} />
    <Stack.Screen name="Vote" component={VoteScreen} />
    <Stack.Screen name="UpdateProfile" component={UpdateProfileScreen} />
  </Stack.Navigator>
  );
}

export default AuthStack;