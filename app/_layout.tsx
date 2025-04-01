import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { PaperProvider, MD3DarkTheme, MD3LightTheme } from "react-native-paper";
import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from "@expo-google-fonts/inter";

import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useMemo } from "react"; // Import useMemo
import { useColorScheme } from "@/hooks/useColorScheme";
import "react-native-reanimated";
import * as SystemUI from 'expo-system-ui'; // Import expo-system-ui

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded, error] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });

  // Define typography styles using loaded fonts
  const typography = {
    displayLarge: { fontFamily: "Inter_900Black", fontWeight: "900" as const, fontSize: 57 },
    displayMedium: { fontFamily: "Inter_800ExtraBold", fontWeight: "800" as const, fontSize: 45 },
    displaySmall: { fontFamily: "Inter_700Bold", fontWeight: "700" as const, fontSize: 36 },
    headlineLarge: { fontFamily: "Inter_700Bold", fontWeight: "700" as const, fontSize: 32 },
    headlineMedium: { fontFamily: "Inter_600SemiBold", fontWeight: "600" as const, fontSize: 28 },
    headlineSmall: { fontFamily: "Inter_500Medium", fontWeight: "500" as const, fontSize: 24 },
    titleLarge: { fontFamily: "Inter_600SemiBold", fontWeight: "600" as const, fontSize: 22 },
    titleMedium: { fontFamily: "Inter_500Medium", fontWeight: "500" as const, fontSize: 16 },
    titleSmall: { fontFamily: "Inter_400Regular", fontWeight: "400" as const, fontSize: 14 },
    labelLarge: { fontFamily: "Inter_600SemiBold", fontWeight: "600" as const, fontSize: 14 },
    labelMedium: { fontFamily: "Inter_500Medium", fontWeight: "500" as const, fontSize: 12 },
    labelSmall: { fontFamily: "Inter_400Regular", fontWeight: "400" as const, fontSize: 11 },
    bodyLarge: { fontFamily: "Inter_400Regular", fontWeight: "400" as const, fontSize: 16 },
    bodyMedium: { fontFamily: "Inter_400Regular", fontWeight: "400" as const, fontSize: 14 },
    bodySmall: { fontFamily: "Inter_300Light", fontWeight: "300" as const, fontSize: 12 },
  };
  

  // Define React Native Paper Light Theme
  const lightColorScheme = {
    ...MD3LightTheme,
    roundness: 4,
    listItem: {
      title: { fontFamily: "Inter_500Medium", fontWeight: "500" },
      description: { fontFamily: "Inter_400Regular", fontWeight: "400" },
    },
    fonts: { ...MD3LightTheme.fonts, ...typography },
    colors: {
      primary: "rgb(0, 95, 175)",
      onPrimary: "rgb(255, 255, 255)",
      primaryContainer: "rgb(212, 227, 255)",
      onPrimaryContainer: "rgb(0, 28, 58)",
      secondary: "rgb(84, 95, 113)",
      onSecondary: "rgb(255, 255, 255)",
      secondaryContainer: "rgb(216, 227, 248)",
      onSecondaryContainer: "rgb(17, 28, 43)",
      tertiary: "rgb(71, 85, 182)",
      onTertiary: "rgb(255, 255, 255)",
      tertiaryContainer: "rgb(223, 224, 255)",
      onTertiaryContainer: "rgb(0, 13, 95)",
      error: "rgb(186, 26, 26)",
      onError: "rgb(255, 255, 255)",
      errorContainer: "rgb(255, 218, 214)",
      onErrorContainer: "rgb(65, 0, 2)",
      background: "rgb(253, 252, 255)", // Light background
      onBackground: "rgb(26, 28, 30)",
      surface: "rgb(253, 252, 255)",
      onSurface: "rgb(26, 28, 30)",
      surfaceVariant: "rgb(224, 226, 236)",
      onSurfaceVariant: "rgb(67, 71, 78)",
      outline: "rgb(116, 119, 127)",
      outlineVariant: "rgb(195, 198, 207)",
      shadow: "rgb(0, 0, 0)",
      scrim: "rgb(0, 0, 0)",
      inverseSurface: "rgb(47, 48, 51)",
      inverseOnSurface: "rgb(241, 240, 244)",
      inversePrimary: "rgb(165, 200, 255)",
      elevation: {
        level0: "transparent",
        level1: "rgb(240, 244, 251)",
        level2: "rgb(233, 239, 249)",
        level3: "rgb(225, 235, 246)",
        level4: "rgb(223, 233, 245)",
        level5: "rgb(218, 230, 244)"
      },
      surfaceDisabled: "rgba(26, 28, 30, 0.12)",
      onSurfaceDisabled: "rgba(26, 28, 30, 0.38)",
      backdrop: "rgba(45, 49, 56, 0.4)"
    },
  };

  // Define React Native Paper Dark Theme
  const darkColorScheme = {
    ...MD3DarkTheme,
    roundness: 4,
    fonts: { ...MD3DarkTheme.fonts, ...typography },
    colors: {
      primary: "rgb(165, 200, 255)",
      onPrimary: "rgb(0, 49, 95)",
      primaryContainer: "rgb(0, 71, 134)",
      onPrimaryContainer: "rgb(212, 227, 255)",
      secondary: "rgb(188, 199, 220)",
      onSecondary: "rgb(39, 49, 65)",
      secondaryContainer: "rgb(61, 71, 88)",
      onSecondaryContainer: "rgb(216, 227, 248)",
      tertiary: "rgb(187, 195, 255)",
      onTertiary: "rgb(17, 34, 134)",
      tertiaryContainer: "rgb(45, 60, 156)",
      onTertiaryContainer: "rgb(223, 224, 255)",
      error: "rgb(255, 180, 171)",
      onError: "rgb(105, 0, 5)",
      errorContainer: "rgb(147, 0, 10)",
      onErrorContainer: "rgb(255, 180, 171)",
      background: "rgb(26, 28, 30)", // Dark background
      onBackground: "rgb(227, 226, 230)",
      surface: "rgb(26, 28, 30)",
      onSurface: "rgb(227, 226, 230)",
      surfaceVariant: "rgb(67, 71, 78)",
      onSurfaceVariant: "rgb(195, 198, 207)",
      outline: "rgb(141, 145, 153)",
      outlineVariant: "rgb(67, 71, 78)",
      shadow: "rgb(0, 0, 0)",
      scrim: "rgb(0, 0, 0)",
      inverseSurface: "rgb(227, 226, 230)",
      inverseOnSurface: "rgb(47, 48, 51)",
      inversePrimary: "rgb(0, 95, 175)",
      elevation: {
        level0: "transparent",
        level1: "rgb(33, 37, 41)",
        level2: "rgb(37, 42, 48)",
        level3: "rgb(41, 47, 55)",
        level4: "rgb(43, 49, 57)",
        level5: "rgb(46, 52, 62)"
      },
      surfaceDisabled: "rgba(227, 226, 230, 0.12)",
      onSurfaceDisabled: "rgba(227, 226, 230, 0.38)",
      backdrop: "rgba(45, 49, 56, 0.4)"
    },
  };

  // Select the correct Paper theme based on the device's color scheme
  const paperTheme = colorScheme === "dark" ? darkColorScheme : lightColorScheme;

  // --- FIX: Create React Navigation theme aligned with Paper theme ---
  const navigationTheme = useMemo(() => {
    const baseNavTheme = colorScheme === 'dark' ? DarkTheme : DefaultTheme;
    return {
      ...baseNavTheme,
      colors: {
        ...baseNavTheme.colors,
        // Crucially, use the background color from the Paper theme
        background: paperTheme.colors.background,
        // Align other colors for consistency (optional but recommended)
        card: paperTheme.colors.surface, // Usually surface or background
        text: paperTheme.colors.onSurface,
        primary: paperTheme.colors.primary,
        border: paperTheme.colors.outlineVariant, // or outline
      },
    };
  }, [colorScheme, paperTheme]);
  // --- END FIX ---

  // Hide splash screen once fonts are loaded (or an error occurs)
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  // --- FIX: Set system UI background color ---
  // This helps prevent flashes during startup and transitions (esp. Android)
  useEffect(() => {
    SystemUI.setBackgroundColorAsync(paperTheme.colors.background);
  }, [paperTheme.colors.background]); // Re-run if the theme background changes
  // --- END FIX ---


  // Prevent rendering until fonts are loaded (show splash screen until then)
  if (!loaded && !error) {
    return null;
  }

  // Render the main application layout
  return (
    // Use the aligned navigation theme for React Navigation
    <ThemeProvider value={navigationTheme}>
      {/* Use the Paper theme for React Native Paper components */}
      <PaperProvider theme={paperTheme}>
        <Stack
          screenOptions={{
            headerShown: false,
            // Optional: Explicitly set card style background as a fallback
            // cardStyle: { backgroundColor: paperTheme.colors.background },
          }}
        >
          {/* Define your screens */}
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
          <Stack.Screen name="settings" options={{ headerShown: false, title: 'Settings' }} />
        </Stack>
        {/* Set status bar style based on the theme */}
        <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      </PaperProvider>
    </ThemeProvider>
  );
}