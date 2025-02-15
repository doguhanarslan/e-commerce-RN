import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from 'react';
import BottomTabNavigation from './navigation/BottomTabNavigation';
import { ShoppingList,Profile, Cart, Home, Search,ProductDetails, SearchItems } from './screens/index';




export default function App() {

  const Stack = createNativeStackNavigator();

  const [fontsLoaded] = useFonts({
    light: require('./assets/fonts/Poppins-Light.ttf'),
    medium: require('./assets/fonts/Poppins-Medium.ttf'),
    regular: require('./assets/fonts/Poppins-Regular.ttf'),
    bold: require('./assets/fonts/Poppins-Bold.ttf'),
    semibold: require('./assets/fonts/Poppins-SemiBold.ttf'),
    extrabold: require('./assets/fonts/Poppins-ExtraBold.ttf'),
  })


  const rootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Bottom Navigation'
          component={BottomTabNavigation}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name='Cart'
          component={Cart}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name='Profile'
          component={Profile}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name='ProductDetails'
          component={ProductDetails}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name='SearchItems'
          component={SearchItems}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name='ShoppingList'
          component={ShoppingList}
          options={{headerShown:false}}
        />

      </Stack.Navigator>
      </NavigationContainer>
  );
}
