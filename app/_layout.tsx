import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { Text } from "react-native";

export default function RootLayout() {
  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

  if (!publishableKey) {
    throw new Error(
      "Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env"
    );
  }

  useFonts({
    "grotesque-regular": require("../assets/fonts/BricolageGrotesque-Regular.ttf"),
    "grotesque-medium": require("../assets/fonts/BricolageGrotesque-Medium.ttf"),
    "grotesque-bold": require("../assets/fonts/BricolageGrotesque-SemiBold.ttf"),
    "Robot-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Robot-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
    "Robot-Bold": require("../assets/fonts/Roboto-Medium.ttf"),
  });

  return (
    <ClerkProvider publishableKey={publishableKey}>
      <SignedIn>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="(tabs)" />
        </Stack>
      </SignedIn>
      <SignedOut>
        <Text
          style={{
            fontFamily: "grotesque-regular",
            fontSize: 20,
            textAlign: "center",
            marginTop: 20,
          }}
        >
          Signed Out
        </Text>
      </SignedOut>
    </ClerkProvider>
  );
}
