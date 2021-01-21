import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListingScreen from "./Screens/ListingScreen";
import ListingDetailsScreen from "./Screens/ListingDetailsScreen";
import ListingEditScreen from "./Screens/ListingEditScreen";
import ListingAddScreen from "./Screens/ListingAddScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Venue Listing" component={ListingScreen} />
        <Stack.Screen name="Venue Details" component={ListingDetailsScreen} />
        <Stack.Screen name="Venue Edit" component={ListingEditScreen} />
        <Stack.Screen name="Venue Add" component={ListingAddScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
