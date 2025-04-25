import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* initialRouteName='Login' */}
      <Stack.Screen name="(user)" />
      <Stack.Screen name="_layout" />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
