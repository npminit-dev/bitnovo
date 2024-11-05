import { View, StyleSheet } from "react-native";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync();

export default function layout() {

  const [loaded, error] = useFonts({
    'Inter-Black': require('../assets/fonts/Inter-Black.ttf'),
    'Inter-BlackItalic': require('../assets/fonts/Inter-BlackItalic.ttf'),
    'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
    'Inter-BoldItalic': require('../assets/fonts/Inter-BoldItalic.ttf'),
    'Inter-ExtraBold': require('../assets/fonts/Inter-ExtraBold.ttf'),
    'Inter-ExtraBoldItalic': require('../assets/fonts/Inter-ExtraBoldItalic.ttf'),
    'Inter-ExtraLight': require('../assets/fonts/Inter-ExtraLight.ttf'),
    'Inter-Italic': require('../assets/fonts/Inter-Italic.ttf'),
    'Inter-Light': require('../assets/fonts/Inter-Light.ttf'),
    'Inter-LightItalic': require('../assets/fonts/Inter-LightItalic.ttf'),
    'Inter-Medium': require('../assets/fonts/Inter-Medium.ttf'),
    'Inter-MediumItalic': require('../assets/fonts/Inter-MediumItalic.ttf'),
    'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
    'Inter-SemiBold': require('../assets/fonts/Inter-SemiBold.ttf'),
    'Inter-SemiBoldItalic': require('../assets/fonts/Inter-SemiBoldItalic.ttf'),
    'Inter-Thin': require('../assets/fonts/Inter-Thin.ttf'),
    'Inter-ThinItalic': require('../assets/fonts/Inter-ThinItalic.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <View style={styles.mainview}>
      <StatusBar />
      <SafeAreaView>
        <Slot />
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    backgroundColor: '#fff'
  }
})