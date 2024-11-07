import { StyleSheet } from "react-native";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";
import { router, Slot } from "expo-router";
import { FONTMAPPINGDATA } from "@/constants/data";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "@/constants/colors";
import { Provider } from 'react-redux'
import { store } from '../store/appStore'
import { sleep } from "@/utils";

SplashScreen.preventAutoHideAsync();

export default function layout() {

  const [loaded, error] = useFonts(FONTMAPPINGDATA);

  async function startApp() {
    if (loaded || error) {
      router.push({ pathname: '/CreatePayment' })
      await sleep(2000)
      await SplashScreen.hideAsync(); 
    }
  }

  useEffect(() => {
    startApp()
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.mainview}>
        <Slot/>
      </SafeAreaView>
    </Provider>
  )
}

const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    backgroundColor: colors.MAIN_BACKGROUND,
  }
})