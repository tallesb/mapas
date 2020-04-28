import React, { useState } from 'react'
import axios from 'axios'
import { View, Dimensions } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import MapView, { Marker } from 'react-native-maps'

export default function EnderecoMapa() {
  const [logradouro, setLogradouro] = useState('')
  const [marcadores, setMarcadores] = useState([])
  const [carregando, setCarregando] = useState(false)

  const { width, height } = Dimensions.get('window')

  const initial = {
    latitude: -3.7298549,
    longitude: -38.4995676,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }

  function getEnderecos() {
    const API = 'http://enderecos.metheora.com/api/cidade'
    if (logradouro.trim().length > 0) {
      setCarregando(true)
      axios
        .get(`${API}/${logradouro}`)
        .then((res) => {
          console.log(res.data)
          const result = res.data.map((e, i) => ({
            coordenada: {
              latitude: e.Latitude,
              longitude: e.Longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            },
            titulo: `${e.Nome} - ${e.UF}`,
            descricao: `${e.CEP} - Código IBGE ${e.CodigoIBGE}`,
          }))
          setMarcadores(result)
        })
        .catch((err) => console.log(err))
        .finally(() => setCarregando(false))
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'blue' }}>
      <TextInput
        label='Cidade (ou parte dele)'
        placeholder='informe a cidade ou parte dele'
        onChangeText={(e) => setLogradouro(e)}
      />
      <Button mode='contained' loading={carregando} onPress={getEnderecos}>
        Localizar
      </Button>
      <MapView style={{ width: width, height: '100%' }}>
        {marcadores.map((e, i) => (
          <Marker
            key={i}
            coordinate={e.coordenada}
            title={e.titulo}
            description={e.descricao}
          />
        ))}
      </MapView>
    </View>
  )
}
