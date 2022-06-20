import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './components/profile';
import Login from './components/login';
import photoFullScreen from './components/profile/photoFullScreen';


const Stack = createNativeStackNavigator();

function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="ProfilePhoto" component={photoFullScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
