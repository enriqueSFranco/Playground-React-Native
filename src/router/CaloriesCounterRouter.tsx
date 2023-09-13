import React from 'react'
import { NavigationContainer, } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { FormAddFood } from '../components/FormAddFood'
import { CaloriesCounter } from '../screens/CaloriesCounter'

type RootStackParamList = {
  'Home': undefined
  'Add Food': undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export const CaloriesCounterRouter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={CaloriesCounter} />
        <Stack.Screen name='Add Food' component={FormAddFood} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}