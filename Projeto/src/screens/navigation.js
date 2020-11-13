import React from 'react';

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';

import ScreenSignIn  from './SignIn/index';
import screenSignUp from './SignUp/index';
import ScreenHome from './Home/index';

export default function screens() {

    const Stack = createStackNavigator();

 return (
   <NavigationContainer>

       <Stack.Navigator headerMode={false} initialRouteName='Home'>

           <Stack.Screen name='SignIn' component={ ScreenSignIn }/>
           <Stack.Screen name='SignUp' component={ screenSignUp }/>
           <Stack.Screen name='Home' component={ ScreenHome }/>

       </Stack.Navigator>
       
   </NavigationContainer>
  );
}