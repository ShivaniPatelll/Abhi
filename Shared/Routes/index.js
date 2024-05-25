import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthNavigator} from './AuthNavigator';
import {LeaderNavigator} from './LeaderNavigator';
import {CommanManNavigator} from './CommanManNavigator';
import {useAuth} from '../../Redux/slice/auth';
export function Route() {
  const auth = useAuth();

  console.log('====================================');
  console.log('auth.isLogin', auth.isLogin);
  console.log('auth.isCommanMan', auth.isCommanMan);
  console.log('====================================');
  return (
    <NavigationContainer>
      {auth.isLogin ? (
        auth.isCommanMan ? (
          <CommanManNavigator />
        ) : (
          <LeaderNavigator />
        )
      ) : (
        <AuthNavigator />
      )}
    </NavigationContainer>
  );
}
