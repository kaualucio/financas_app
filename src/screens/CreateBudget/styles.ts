import { theme } from './../../global/styles/theme';
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    marginTop: 20,
    paddingHorizontal: 12,
  },
  wrapper: {
    marginBottom: 15,
  },
  formControl: {
    marginBottom: 15
  },
  title: {
    fontSize: 18,
    fontFamily: theme.fonts.title500,
    color: theme.colors.primary,
    marginBottom: 12
  },
  picker: {
    backgroundColor: theme.colors.primary,
    width: "100%",
    borderRadius: 8
  },
  input: {
    width: "100%",
    height: 50,
    paddingHorizontal: 10,
    fontSize: 16,
    fontFamily: theme.fonts.text400,
    color: theme.colors.secondary100,
    borderColor: theme.colors.primary,
    borderWidth: 2,
    borderRadius: 8
  },
  button: {
    width: "100%",
    paddingVertical: 15,
    marginTop: 15,
    backgroundColor: theme.colors.ok,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: theme.colors.heading
  }
})