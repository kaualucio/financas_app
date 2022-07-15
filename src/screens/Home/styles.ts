import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: getStatusBarHeight(),

  },
  wrapper: {
    marginTop: 20,
  },
  budgets: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
})