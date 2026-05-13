import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8EF",
  },
  content: {
    padding: 24,
    paddingTop: 70,
    paddingBottom: 40,
  },
  appName: {
    fontSize: 34,
    fontWeight: "800",
    color: "#2B2118",
  },
  tagline: {
    fontSize: 16,
    marginTop: 4,
    color: "#6B5A4A",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "700",
    marginTop: 32,
    marginBottom: 16,
    color: "#2B2118",
  },
  inputRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#E5D6C7",
  },
  addButton: {
    backgroundColor: "#E86A33",
    borderRadius: 14,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  addButtonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  generateButton: {
    backgroundColor: "#2F6B4F",
    borderRadius: 18,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 20,
  },
  generateButtonText: {
    color: "white",
    fontSize: 17,
    fontWeight: "800",
  },
});