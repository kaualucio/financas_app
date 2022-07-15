import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { theme } from '../global/styles/theme';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../screens/Home';
import { CreateBudget } from '../screens/CreateBudget';
import { SeeAll } from '../screens/SeeAll';
import { DataContextProvider } from '../context/data';
const { Navigator, Screen } = createNativeStackNavigator()

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: theme.colors.heading,
  },
};

export default function Routes() {
 
  return (
    <NavigationContainer theme={navTheme}>
      <DataContextProvider>
        <Navigator 
        screenOptions={{
          headerShown: false
        }}>
          <Screen 
            name="Home" 
            component={Home} 
          />

          <Screen 
            name="CreateBudget" 
            component={CreateBudget} 
          />

          <Screen 
            name="SeeAll" 
            component={SeeAll} 
          />
        </Navigator>
      </DataContextProvider>
    </NavigationContainer>
  )
}