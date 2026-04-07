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
  recentRecordCard: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  timeInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  recentRecordsTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  // card: {
  //   backgroundColor: "#fff",
  //   paddingVertical: 36,
  //   paddingHorizontal: 30,
  //   borderRadius: 24,
  //   shadowColor: "#333333",
  //   elevation: 15,
  //   gap: 15,
  // },
  // cardTitle: {
  //   flexDirection: "row",
  //   alignItems: "center",
  //   marginBottom: 12,
  //   gap: 8,
  // },
  // cardTitleText: {
  //   fontSize: 18,
  //   fontWeight: "500",
  // },
  // dataRangeContainer: {
  //   flexDirection: "row",
  //   width: "100%",
  //   gap: 20,
  // },
  // dateRangeInput: {
  //   flex: 1,
  // },
  // durationContainer: {
  //   borderWidth: 2,
  //   backgroundColor: colors.backgroundDuration,
  //   borderRadius: 10,
  //   paddingVertical: 15,
  //   alignItems: "center",
  //   borderColor: "rgba(38, 106, 170, 0.6)",
  //   marginTop: 10,
  //   gap: 5,
  // },
  // durationTitle: {
  //   fontSize: 14,
  //   opacity: 0.7,
  // },
  // duration: {
  //   fontSize: 24,
  //   fontWeight: "700",
  //   color: colors.backgroundPrimary,
  // },
  // durationTime: {
  //   fontSize: 12,
  //   opacity: 0.7,
  // },
  // saveButton: {
  //   flexDirection: "row",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   gap: 10,
  //   shadowColor: "#333333",
  //   elevation: 15,
  //   backgroundColor: colors.backgroundSecondary,
  //   paddingVertical: 20,
  //   borderRadius: 15,
  // },
  // saveButtonText: {
  //   fontSize: 20,
  //   fontWeight: "600",
  //   color: "#fff",
  // },
  // saveButtonDisabled: {
  //   backgroundColor: "#c2c2c2",
  // },
});
