import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/module/splashscreen/View';
import BottomTabs from './src/module/bottomtabs/View';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            title: '',
            headerTransparent: true,
            headerLeft: false,
          }}
        />
        <Stack.Screen
          name="BottomTabs"
          component={BottomTabs}
          options={{
            title: '',
            headerTransparent: true,
            headerLeft: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;