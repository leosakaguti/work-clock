import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundPrimary,
    flex: 1,
    justifyContent: "space-between",
  },
  logo: {
    color: "#fff",
    alignSelf: "center",
    fontSize: 32,
    marginVertical: "auto",
  },
  welcomeContainer: {
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    backgroundColor: colors.screenBackground,
    height: "70%",
    padding: 20,
    gap: 15,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 600,
  },
  loginContainer: {
    gap: 15,
  },
  label: {
    fontSize: 12,
  },
  loginInput: {
    borderWidth: 0.5,
    borderRadius: 5,
    padding: 10,
  },
  loginButton: {
    paddingVertical: 10,
    paddingHorizontal: 50,
    backgroundColor: colors.backgroundPrimary,
    alignSelf: "center",
    borderRadius: 10,
    marginTop: 30,
  },
  loginButtonText: {
    fontSize: 24,
    color: "#fff",
  },
});
