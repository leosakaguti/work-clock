import { Stack } from "expo-router";
import Header from "../src/components/Header";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ header: () => <Header /> }} />
    </Stack>
  );
}
