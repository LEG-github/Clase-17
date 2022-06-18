import AuthStack from './Stacks/Auth'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import TabNavigatorLogged from './Tabs/UserLogged'
import { useSelector } from 'react-redux'

const MainNavigator = () => {

  const {user} = useSelector(state => state.auth.value)

  return (
    <NavigationContainer>
      {true ?
        <TabNavigatorLogged />
        :
        <AuthStack />
      }
    </NavigationContainer>
  )
}

export default MainNavigator