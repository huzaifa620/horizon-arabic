import React from 'react';
import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';
import { HomeIcon, CalendarIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { HomeIcon as HomeIconSolid, CalendarIcon as CalendarIconSolid, PhoneIcon as PhoneIconSolid } from '@heroicons/react/24/solid';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Web-specific wrapper for heroicons
const HeroIcon = ({ IconOutline, IconSolid, focused, color }) => {
  const Icon = focused ? IconSolid : IconOutline;
  return (
    <Icon 
      style={{ 
        width: 26, 
        height: 26, 
        color: color,
        display: 'inline-block',
      }} 
    />
  );
};

export default function TabLayout() {
  const insets = useSafeAreaInsets();
  
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#2563eb',
        tabBarInactiveTintColor: '#9ca3af',
        headerShown: false,
        tabBarStyle: [
          styles.tabBar,
          {
            paddingBottom: Math.max(insets.bottom, 10),
            height: 70 + Math.max(insets.bottom - 10, 0),
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
          },
        ],
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarIconStyle: styles.tabBarIcon,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'الرئيسية',
          tabBarIcon: ({ color, focused }) => (
            <HeroIcon 
              IconOutline={HomeIcon}
              IconSolid={HomeIconSolid}
              focused={focused}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="bookings"
        options={{
          title: 'الحجوزات',
          tabBarIcon: ({ color, focused }) => (
            <HeroIcon 
              IconOutline={CalendarIcon}
              IconSolid={CalendarIconSolid}
              focused={focused}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: 'اتصل بنا',
          tabBarIcon: ({ color, focused }) => (
            <HeroIcon 
              IconOutline={PhoneIcon}
              IconSolid={PhoneIconSolid}
              focused={focused}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    direction: 'rtl',
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    paddingTop: 10,
    elevation: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
  },
  tabBarLabel: {
    fontSize: 13,
    fontWeight: '700',
    marginTop: 6,
  },
  tabBarIcon: {
    marginTop: 4,
  },
});

