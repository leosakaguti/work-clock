import { Text } from "react-native";
import { styles } from "./styles";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Header() {
  const insets = useSafeAreaInsets();
  return (
    <View style={styles.header} paddingTop={insets.top}>
      <Text style={styles.title}>LOGO</Text>
    </View>
  );
}
