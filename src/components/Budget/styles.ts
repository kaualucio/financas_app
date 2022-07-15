import { theme } from '../../global/styles/theme';
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    borderRadius: 8,
    paddingHorizontal:15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.secondary80,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    width: 60,
    height: 60,
    justifyContent: 'center',
  },
  title: {
    width: 150,
    fontFamily: theme.fonts.title500,
    fontSize: 15,
    color: theme.colors.heading,
  },
  date: {
    fontFamily: theme.fonts.text300,
    fontSize: 12,
    color: theme.colors.heading,
  },
  price: {
    fontFamily: theme.fonts.title600,
    fontSize: 16,
    color: theme.colors.heading,
  }
})