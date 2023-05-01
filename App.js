import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Main from './src/screens/Main';
import {Context, Provider} from './src/Context/messageContext';
const Stack = createStackNavigator();

const App = () => {
  return(
    <Provider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Main'>
        <Stack.Screen name="Main" component={Main} options={{
          headerShown: false
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}

export default App;