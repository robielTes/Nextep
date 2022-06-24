import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import VoteScreen from "../screens/VoteScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { MaterialIcons } from "@expo/vector-icons";



const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: '#33354E',
        paddingBottom: 10,
        height: 60,
        borderTopWidth: 0,
        
      },
      tabBarInactiveTintColor: '#FFF',
      tabBarActiveTintColor: '#43c6a6',
    }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon: ({ color}) => (
          <MaterialIcons name="home" color={color} size={35} />
        )       
      }}/>
      <Tab.Screen name="Vote" component={VoteScreen} options={{
        tabBarBadge: 6,
        tabBarBadgeStyle: {
          backgroundColor: '#43c6a6',
          borderRadius: 10,
          color: '#FFF',
          fontSize: 10,
        },
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="star" color={color} size={35} />
        )
      }}/>
      <Tab.Screen name="Profile" component={ProfileScreen} options={{
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="person" color={color} size={35}/>
        )
      }}/>
    </Tab.Navigator>
  );  
}