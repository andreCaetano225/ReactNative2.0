import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 16,
  },
  eventName: {
    color: "#FDFCFE",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },
  eventDate: {
    color: "#6b6b6b",
    fontSize: 16,
  },
  input: {
    backgroundColor: "#1f1e25",
    height: 56,
    borderRadius: 5,
    color: "#Fff",
    paddingLeft: 10,
    flex: 1,
    marginRight: 12,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonAdd: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#31cf67",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 36,
    marginBottom: 42,
  },
});
