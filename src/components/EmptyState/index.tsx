import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "./styles";
import { colors } from "../../styles/colors";

type EmptyStateProps = {
  title?: string;
  description?: string;
  icon?: string;
};

export default function EmptyState({
  title = "Nenhum registro encontrado",
  description = "Comece a registrar suas jornadas",
  icon = "inbox",
}: EmptyStateProps) {
  return (
    <View style={styles.container}>
      <Feather
        name={icon as any}
        size={48}
        color={colors.textSecondary}
        style={styles.icon}
      />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}
