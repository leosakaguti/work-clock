import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  label: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    gap: 5,
  },
  labelText: {
    color: colors.label,
    fontWeight: "500",
  },
  dateTimeButton: {
    backgroundColor: colors.screenBackground,
    padding: 10,
    borderWidth: 2,
    borderRadius: 12,
    borderColor: "#c2c2c2",
    padding: 16,
  },
  dateText: {
    fontSize: 18,
    fontWeight: "500",
  },
});
