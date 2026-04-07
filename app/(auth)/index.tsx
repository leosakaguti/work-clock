import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Login() {
  const router = useRouter();
  function login() {
    router.replace("/(tabs)");
  }
  return (
    <View>
      <Text>Login</Text>
      <TouchableOpacity onPress={() => console.log("Entrar")}>
        <Text>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}
