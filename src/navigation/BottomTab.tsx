import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Main, Productivity } from '@/screens';
import { LightThemeConfig, Spacings } from '@/shared/theme';
import { StyleSheet, View } from 'react-native';
import { AddIcon, PieChartFilledIcon, TimeFilledIcon, TimeOutlineIcon } from '@/shared/ui/icons';
import PieChart from '@/shared/ui/icons/PieChart';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: false,
        tabBarActiveTintColor: LightThemeConfig.inverseBackground,
        tabBarInactiveTintColor: LightThemeConfig.inactive,
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
        name='Plug'
        component={Main}
        options={{
          tabBarIcon: () => {
            return <AddIcon color={LightThemeConfig.background2} size={32} />;
          },
          tabBarButton: (props) => {
            return (
              <TouchableOpacity
                style={{
                  borderRadius: 100,
                  width: 44,
                  height: 44,
                  backgroundColor: LightThemeConfig.inverseBackground,
                  shadowColor: '#000000',
                  shadowOffset: {
                    width: 0,
                    height: 3,
                  },
                  shadowOpacity: 0.18,
                  shadowRadius: 4.59,
                  elevation: 5,
                  marginTop: -Spacings[3],
                }}
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
    backgroundColor: LightThemeConfig.background2,
    position: 'absolute',
    height: 90,
    bottom: 0,
    left: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderTopWidth: 0,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
});

export default BottomTab;
