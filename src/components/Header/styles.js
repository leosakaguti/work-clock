import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.screenBackground,
  },
  header: {
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  title: {
    color: colors.backgroundPrimary,
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 16,
  },
});
