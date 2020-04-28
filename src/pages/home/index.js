import React from 'react'
import { View, AsyncStorage } from 'react-native'
import { Button } from '../../components'

export default function Home(props) {
  const { navigation } = props

  return (
    <View
      style={{
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
      }}
    >
      <Button
        text='Busca CEP'
        backgroundColor='rgba(240, 120, 80, 0.30)'
        iconName='codepen'
        onPress={() => navigation.navigate('cep')}
      />
      <Button
        text='Endereço (ScrollView)'
        backgroundColor='rgba(10, 210, 30, 0.30)'
        iconName='clipboard'
        onPress={() => navigation.navigate('endereco')}
      />
      <Button
        text='Endereço (Flatlist)'
        backgroundColor='rgba(70, 130, 250, 0.30)'
        iconName='cast'
        onPress={() => navigation.navigate('enderecoFlatlist')}
      />
      <Button
        text='Endereço (Mapa)'
        backgroundColor='rgba(70, 20, 200, 0.30)'
        iconName='map'
        onPress={() => navigation.navigate('enderecoMapa')}
      />
    </View>
  )
}
