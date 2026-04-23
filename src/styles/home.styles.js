import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    gap: 25,
    flex: 1,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.backgroundPrimary,
  },
  infoCard: {
    backgroundColor: colors.backgroundPrimary,
    padding: 40,
    borderRadius: 16,
    marginTop: 20,
  },
  infoTitle: {
    color: colors.textSecondary,
  },
  infoValue: {
    fontSize: 40,
    fontWeight: "700",
    color: "#fff",
  },
  infoUnit: {
    color: colors.textSecondary,
    paddingBottom: 5,
    fontSize: 16,
  },
  monthTimeContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 10,
  },
  recentRecordsContainer: {
    flex: 1,
    gap: 20,
  },
  recentRecordsTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  // Adicione ao objeto styles
  fabContainer: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  fabButton: {
    backgroundColor: colors.backgroundPrimary,
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    elevation: 8, // Para sombra no Android
    shadowColor: "#000", // Para sombra no iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  fabText: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
  },
});
