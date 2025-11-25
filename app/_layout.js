import React from 'react';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { I18nManager } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-reanimated';
import '../global.css';

// Force RTL for Arabic
I18nManager.forceRTL(true);
I18nManager.allowRTL(true);

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <ThemeProvider value={DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen 
            name="bus-booking" 
            options={{ 
              presentation: 'card', 
              headerShown: false,
            }} 
          />
          <Stack.Screen 
            name="air-booking" 
            options={{ 
              presentation: 'card', 
              headerShown: false,
            }} 
          />
          <Stack.Screen 
            name="tourism" 
            options={{ 
              presentation: 'card', 
              headerShown: false,
            }} 
          />
          <Stack.Screen 
            name="ferry-booking" 
            options={{ 
              presentation: 'card', 
              headerShown: false,
            }} 
          />
          <Stack.Screen 
            name="contact" 
            options={{ 
              presentation: 'card', 
              title: 'اتصل بنا',
              headerTitleAlign: 'right',
            }} 
          />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
