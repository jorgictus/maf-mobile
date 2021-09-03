
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Stacks from './src/stacks/index'
import UserContextProvider from './src/contexts/UserContext'

export default () => {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <Stacks/>
      </NavigationContainer>
    </UserContextProvider>
  )
}