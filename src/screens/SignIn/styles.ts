import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from './../../global/styles/theme';
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 40,
    fontFamily: theme.fonts.title600,
    color: theme.colors.primary,
  },
  button: {
    position: 'absolute',
    bottom: 50,
    width: "90%",
    height: 60,
    backgroundColor: theme.colors.primary,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    width: 80,
    height: 60,
    borderRightColor: theme.colors.secondary70,
    borderRightWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }, 
  image: {
    width: 40,
    height: 40
  },
  text: {
    paddingLeft: 35,
    textAlign: 'center',
    fontSize: 16,
    fontFamily: theme.fonts.text400,
    color: theme.colors.heading
  }
})