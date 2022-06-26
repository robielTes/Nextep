
import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/TabNavigator";
import AuthStack from './navigation/AuthStack';

function App() {
 return (
  <NavigationContainer>
  <AuthStack />
  {/* <Tabs />  tap navigation not finish*/}
  </NavigationContainer>
  );

}

export default App;