import { theme } from './../../global/styles/theme';
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: 104,
    height: 120,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.secondary90,
    borderRadius: 8,
    marginRight: 8,
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 5
  },
  borderSelected: {
    borderWidth: 3,
    borderColor: theme.colors.secondary50,
  },
  title: {
    marginTop: 8,
    fontFamily: theme.fonts.title600,
    fontSize: 11,
    color: theme.colors.heading
  }
})