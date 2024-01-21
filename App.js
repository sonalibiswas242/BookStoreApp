import React from "react";
import WelcomeScreen from "./Screens/Books/WelcomeScreen";
import HomeScreen from "./Screens/Books/HomeScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BookDetailScreen from "./Screens/Books/BookDetailScreen";
import CartScreen from "./Screens/Books/CartScreen";
import OrderScreen from "./Screens/Books/OrderScreen";
import { CartProvider } from "./Screens/Books/CardContext";

const App = () => {
  const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
          <CartProvider>
          <Stack.Navigator>
            <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}}/>
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
            <Stack.Screen name="BookDetail" component={BookDetailScreen} options={{headerShown:false}}/>
            <Stack.Screen name="Cart" component={CartScreen} options={{headerShown:false}}/>
            <Stack.Screen name="Order" component={OrderScreen} options={{headerShown:false}}/>
          </Stack.Navigator>
          </CartProvider>
          
        </NavigationContainer>
      );    
};

export default App;
