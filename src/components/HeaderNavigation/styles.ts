import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 90,
    backgroundColor: theme.colors.secondary100,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20
  },
  title: {
    fontFamily: theme.fonts.title600,
    fontSize: 20,
    color: theme.colors.heading,
    
  }
})