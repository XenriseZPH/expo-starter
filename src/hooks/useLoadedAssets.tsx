import Ionicons from "@expo/vector-icons/Ionicons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

export function useLoadedAssets() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  let customFonts = {
    "sans-bold": require("../../assets/fonts/sans_serif_bld_flf.otf"),
    "sans-semibold": require("../../assets/fonts/sans_serif_flf_demibold.otf"),
  };

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync(Ionicons.font);
        await Font.loadAsync(customFonts);
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
