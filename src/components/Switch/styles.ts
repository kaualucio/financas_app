import { theme } from './../../global/styles/theme';
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 60,
    marginTop: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 30,
    padding: 5,
    backgroundColor: theme.colors.secondary70
  },
  spendingButton: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
  },
  inputButton: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
  },
  text: {
    fontFamily: theme.fonts.text400,
    fontSize: 18,
    textAlign: 'center',
    color: theme.colors.heading
  }
})