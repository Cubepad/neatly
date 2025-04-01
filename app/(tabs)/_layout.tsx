import React, { useEffect } from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { Tabs } from 'expo-router';
import { BottomNavigation, Text, useTheme } from 'react-native-paper';
import {
  NavigationHelpers,
  ParamListBase,
  TabNavigationState,
} from '@react-navigation/native';
import { BottomTabNavigationEventMap } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; // Import Material 3 icons
import * as NavigationBar from 'expo-navigation-bar';

interface CustomTabBarProps {
  state: TabNavigationState<ParamListBase>;
  descriptors: Record<string, any>;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}

function CustomTabBar({ state, descriptors, navigation }: CustomTabBarProps) {
  const theme = useTheme();

  return (
    <BottomNavigation.Bar
      navigationState={state}
      onTabPress={({ route }) => {
        const event = navigation.emit({
          type: 'tabPress',
          target: route.key,
          canPreventDefault: true,
        });
        if (!event.defaultPrevented) {
          navigation.navigate(route.name);
        }
      }}
      renderIcon={({ route, focused }) => {
        const { options } = descriptors[route.key];
        if (options.tabBarIcon) {
          return (
            <View style={styles.iconContainer}>
              {options.tabBarIcon({ color: focused ? theme.colors.primary : theme.colors.onSurfaceVariant, size: 24, focused })}
            </View>
          );
        }
        return null;
      }}
      renderLabel={({ route, focused }) => {
        const { options } = descriptors[route.key];
        const label = options.title ?? route.name;
        return (
          <Text
            style={[
              styles.labelText,
              { color: focused ? theme.colors.primary : theme.colors.onSurfaceVariant},
            ]}
          >
            {label}
          </Text>
        );
      }}
      shifting={false}
      style={[styles.bottomNavigation, { backgroundColor: theme.colors.elevation.level2 }]}
      activeIndicatorStyle={{
        backgroundColor: theme.colors.secondaryContainer,
        height: 36,
        borderRadius: 18,
      }}
    />
  );
}

export default function TabLayout() {
  const theme = useTheme();

  // Set navigation bar color on mount and theme change
  useEffect(() => {
    if (Platform.OS === 'android') {
      NavigationBar.setBackgroundColorAsync(theme.colors.elevation.level2);
    }
  }, [theme]);

  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
        }}
        tabBar={(props) => <CustomTabBar {...props} />}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Notes",
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons
                size={24}
                name={focused ? "notebook" : "notebook-outline"} // Filled when active
                color={color}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="tasks"
          options={{
            title: "Tasks",
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons
                size={24}
                name={focused ? "check-circle" : "check-circle-outline"} // Filled when active
                color={color}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="favourites"
          options={{
            title: "Favourites",
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons
                size={24}
                name={focused ? "star" : "star-outline"} // Filled when active
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
}

const styles = StyleSheet.create({
  bottomNavigation: {
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    elevation: 0,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelText: {
    fontSize: 12,
    textAlign: 'center',
    fontFamily: "Inter_500Medium",
  },
});
