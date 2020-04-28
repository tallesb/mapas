import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './pages/home'
import CEP from './pages/cep'
import Endereco from './pages/endereco'
import EnderecoFlatlist from './pages/endereco-flatlist'
import EnderecoMapa from './pages/endereco-mapa'

export default function Routes() {
  const AppStack = createStackNavigator()

  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: true }}>
        <AppStack.Screen
          name='home'
          component={Home}
          options={{ title: 'Home' }}
        />
        <AppStack.Screen
          name='cep'
          component={CEP}
          options={{ title: 'Busca CEP' }}
        />
        <AppStack.Screen
          name='endereco'
          component={Endereco}
          options={{ title: 'Endereço' }}
        />
        <AppStack.Screen
          name='enderecoFlatlist'
          component={EnderecoFlatlist}
          options={{ title: 'Endereço Flatlist' }}
        />
        <AppStack.Screen
          name='enderecoMapa'
          component={EnderecoMapa}
          options={{ title: 'Endereço Mapa' }}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  )
}
