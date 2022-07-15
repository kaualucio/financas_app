import { theme } from './../../global/styles/theme';
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  text: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.primary,
    fontSize: 12
  }
})