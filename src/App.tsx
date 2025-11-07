import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/Account/LoginScreen';
import LoginPhone from './screens/Account/LoginPhone';
import OtpScreen from './screens/Account/OtpScreen';
import HomeScreen from './screens/Home/HomeScreen';
import ProductDetails from './screens/Product/ProductDetails';
import CartScreen from './screens/Cart/CartScreen';
import OrderScreen from './screens/Cart/OrderScreen';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import OrderPlaceScreen from './screens/Cart/OrderPlaceScreen';


const Stack = createNativeStackNavigator();

function RootStack() {
    return (
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="Login"
                component={LoginScreen}
            />
            <Stack.Screen
                name="LoginPhone"
                component={LoginPhone}
            />
            <Stack.Screen
                name="OtpScreen"
                component={OtpScreen}
            />
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
            />
            <Stack.Screen
                name="ProductDetails"
                component={ProductDetails}
            />
            <Stack.Screen
                name="CartScreen"
                component={CartScreen}
            />
            <Stack.Screen
                name="OrderScreen"
                component={OrderScreen}
            />
            <Stack.Screen
                name="OrderPlaceScreen"
                component={OrderPlaceScreen}
            />


        </Stack.Navigator>
    );
}

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <RootStack />
            </NavigationContainer>
        </Provider>
    );
}