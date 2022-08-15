import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Main, Productivity } from '@/screens';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name='MainTab' component={Main} />
      <Tab.Screen name='ProductivityTab' component={Productivity} />
    </Tab.Navigator>
  );
};

export default BottomTab;
