import { Tabs } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import Header from "../../src/components/Header";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#FF6B00", // Seu Laranja
        tabBarInactiveTintColor: "#B3CDEB", // Seu Azul Secundário
        tabBarStyle: {
          backgroundColor: "#004A8D",
        },
        header: () => <Header />,
        animation: "shift",
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarLabel: "Início",
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "Histórico",
          tabBarLabel: "Histórico",
          tabBarIcon: ({ color, size }) => (
            <Feather name="clock" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
