import { useRouter } from "expo-router";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "../../src/styles/auth.styles";

export default function Login() {
  const router = useRouter();
  function login() {
    router.replace("/(tabs)/home");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>LOGO</Text>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Bem-vindo!</Text>
        <View style={styles.loginContainer}>
          <View>
            <Text style={styles.label}>E-mail</Text>
            <TextInput style={styles.loginInput} placeholder="Seu e-mail" />
          </View>
          <View>
            <Text style={styles.label}>Senha</Text>
            <TextInput
              secureTextEntry={true}
              placeholder="Insira sua senha"
              autoComplete="off"
              style={styles.loginInput}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={() => login()}>
          <Text style={styles.loginButtonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
