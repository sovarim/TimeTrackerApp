import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Main, Productivity } from '@/screens';
import { useTheme } from '@/shared/theme';
import { StyleSheet } from 'react-native';
import { AddIcon, PieChartFilledIcon, TimeFilledIcon, TimeOutlineIcon } from '@/shared/ui/icons';
import PieChart from '@/shared/ui/icons/PieChart';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  const { theme } = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: [styles.tabBar, { backgroundColor: theme.colors.background }],
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.colors.inverseBackground,
        tabBarInactiveTintColor: theme.colors.inactive,
      }}
    >
      <Tab.Screen
        name='MainTab'
        component={Main}
        options={{
          tabBarIcon: ({ focused, ...props }) => {
            if (focused) {
              return <TimeFilledIcon {...props} size={28} />;
            }
            return <TimeOutlineIcon {...props} size={28} />;
          },
        }}
      />
      <Tab.Screen
        name='Plus'
        component={Main}
        options={{
          tabBarIcon: () => {
            return <AddIcon color={theme.colors.background2} size={24} />;
          },
          tabBarButton: (props) => {
            return (
              <TouchableOpacity
                style={[styles.addBtn, { backgroundColor: theme.colors.inverseBackground }]}
              >
                {props.children}
              </TouchableOpacity>
            );
          },
        }}
      />
      <Tab.Screen
        name='ProductivityTab'
        component={Productivity}
        options={{
          tabBarIcon: ({ focused, ...props }) => {
            if (focused) {
              return <PieChartFilledIcon {...props} size={28} />;
            }
            return <PieChart {...props} size={28} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: 90,
    borderTopWidth: 0,
    elevation: 0,
  },
  addBtn: {
    borderRadius: 100,
    width: 44,
    height: 44,
  },
});

export default BottomTab;
