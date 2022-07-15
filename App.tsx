import { useFonts } from 'expo-font';
import { StyleSheet, View, StatusBar, ActivityIndicator } from 'react-native';
import {Montserrat_300Light, Montserrat_400Regular, Montserrat_500Medium, Montserrat_600SemiBold} from '@expo-google-fonts/montserrat'
import { theme } from './src/global/styles/theme';
import Routes from './src/routes';
import React from 'react';

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_300Light, 
    Montserrat_400Regular, 
    Montserrat_500Medium, 
    Montserrat_600SemiBold
  })

  if(!fontsLoaded) return <ActivityIndicator size='large' color={theme.colors.primary} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} />

  return (
    <View style={styles.container}>
      <StatusBar 
        barStyle="light-content"
        translucent 
        backgroundColor={theme.colors.heading}  
        />
          <Routes />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})