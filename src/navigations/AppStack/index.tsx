import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useContext} from 'react';
import HomeScreen from '../../screens/HomeScreen';
import LoadingScreen from '../../screens/LoadingScreen';
import LoginScreen from '../../screens/LoginScreen';
import Product from '../../screens/ProductScreen/Product';
import { baseStyles } from '../../styles/theme';
import {LoginContext} from '../../utils/LoginProvider';
import MainStack from '../MainStack';

const Stack = createStackNavigator();
export default function AppStack() {
  const {user, isLoading} = useContext(LoginContext);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoading ? (
          <Stack.Screen
            name="loading"
            options={{headerShown: false}}
            component={LoadingScreen}
          />
        ) : user ? (
          <>
            <Stack.Screen
              name="Shoppers"
              component={MainStack}
              options={{
                title: 'SHOPPERS',
                headerTitleStyle:baseStyles.brandTitle,
                headerTitleAlign: 'center',
            
              }}
            />
            <Stack.Screen
              name="Product"
              component={Product}
              options={{
                headerShown: false,
              }}
            />
          </>
        ) : (
          <Stack.Screen
            name="signin"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
