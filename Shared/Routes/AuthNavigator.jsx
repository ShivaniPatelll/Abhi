import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Authentication from '../Screen/Authentication';
import Login from '../Screen/Login';
import Signup from '../Screen/Signup';
import Forgotpassword from '../Screen/Forgotpassword';
import Createnewpassword from '../Screen/Createnewpassword';
import CompanyInfo from '../Screen/Info Pages/CompanyInfo';

const Stack = createNativeStackNavigator();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name={'Login'}
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'Authentication'}
        component={Authentication}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={'Signup'}
        component={Signup}
        options={{headerShown: false}}
      />

      <Stack.Screen
        key={'Forgotpassword'}
        name={'Forgotpassword'}
        component={Forgotpassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        key={'Createnewpassword'}
        name={'Createnewpassword'}
        component={Createnewpassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        key={'Termslogin'}
        name={'Termslogin'}
        component={CompanyInfo}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
