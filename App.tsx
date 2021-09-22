import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GpsValidation from './src/pages/gps-validation';
import SearchGps from './src/pages/search-gps';
import Login from './src/pages/login';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="GpsValidation"
      >
        <Stack.Screen name="GpsValidation" component={GpsValidation} />
        <Stack.Screen name="GpsSearch" component={SearchGps} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
