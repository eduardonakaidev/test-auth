
import React from 'react';
import { StatusBar } from 'react-native';
import theme from './src/theme';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Loading } from './src/components/Loading';
import { ThemeProvider } from 'styled-components/native';
import Routes from './src/routes';
import { AuthProvider } from './src/context/AuthContext';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })
  if (!fontsLoaded) {
    return (
      <Loading />
    )
  }
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <StatusBar barStyle='dark-content' backgroundColor="#f2f2f2" translucent />
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
}

