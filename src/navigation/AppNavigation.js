import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from '../screens/MainScreen';
import PostScreen from '../screens/PostScreen';
import {THEME} from '../theme';
import {Platform} from 'react-native';

const Stack = createStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Platform.select({
              ios: 'white',
              android: THEME.MAIN_COLOR,
            }),
          },
          headerTintColor: Platform.select({
            ios: THEME.MAIN_COLOR,
            android: 'white',
          }),
        }}>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Post" component={PostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
