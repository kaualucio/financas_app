import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 100,
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: theme.colors.secondary80,
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 5
  },
  title: {
    fontFamily: theme.fonts.text400,
    fontSize: 14,
    color: theme.colors.heading,
    marginBottom: 8
  },
  value: {
    fontFamily: theme.fonts.title600,
    fontSize: 20,
    color: theme.colors.heading,
  }
})