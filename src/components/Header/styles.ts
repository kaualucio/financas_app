import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 80,
    marginTop: 18,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: theme.colors.secondary80,
    borderRadius: 8,
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 5
  },
  username: {
    fontSize: 14,
    fontFamily: theme.fonts.text300,
    color: theme.colors.heading
  },
  greeting: {
    fontSize: 16,
    fontFamily: theme.fonts.title600,
    color: theme.colors.heading
  },
})