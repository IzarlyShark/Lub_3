import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AboutScreen from './AboutScreen'; // Экран "О Себе"
import LanguagesScreen from './LanguagesScreen'; // Экран "Мои языки программирования"

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="О Себе" component={AboutScreen} />
        <Tab.Screen name="Мои языки программирования" component={LanguagesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}