import React from 'react'
import { Provider } from 'react-redux'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { store } from './redux/store'
import AppRoutes from './config/AppRoutes'
import { HOMESCREEN } from './constants/screens'

const MainStack = createNativeStackNavigator()

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainStack.Navigator initialRouteName={HOMESCREEN}>
          {AppRoutes.map(route => (
            <MainStack.Screen
              key={route.name}
              name={route.name}
              component={route.component}
              options={route.options}
            />
          ))}
        </MainStack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
