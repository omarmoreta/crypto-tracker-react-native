import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 3,
  },
  text: {
    color: "white",
    marginRight: 5,
  },
  coinContainer: {
    flexDirection: "row",
    borderBottomColor: "white",
    borderBottomWidth: StyleSheet.hairlineWidth,
    padding: 15,
  },
  rankContainer: {
    backgroundColor: "#585858",
    borderRadius: 5,
    paddingHorizontal: 6,
    marginRight: 5,
  },
  rank: {
    fontWeight: "bold",
    color: "white",
  },
});

export default styles;
