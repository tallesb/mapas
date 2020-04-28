import React, { useState } from 'react'
import axios from 'axios'
import {
  Button,
  TextInput,
  Text,
  View,
  ActivityIndicator,
  FlatList,
} from 'react-native'
import { CardEndereco } from '../../components'

function EnderecoFlatlist(props) {
  const [data, setData] = useState([])
  const [endereco, setEndereco] = useState('')
  const [carregando, setCarregando] = useState(false)

  function handleButton() {
    if (endereco.trim().length > 0) {
      setCarregando(true)
      axios
        .get(`http://enderecos.metheora.com/api/cidade/${endereco}`)
        .then((res) => setData(res.data))
        .catch((err) => console.log(err))
        .finally(() => setCarregando(false))
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <TextInput
        autoCapitalize='none'
        placeholder='informe parte do endereço'
        onChangeText={(e) => setEndereco(e)}
        style={{
          height: 40,
          margin: 10,
          padding: 5,
          textAlign: 'center',
          borderBottomWidth: 1,
          borderBottomColor: '#000',
        }}
      />
      <Button title='Busca endereço' onPress={handleButton} />
      <ActivityIndicator animating={carregando} />
      <Text style={{ textAlign: 'center' }}>
        Total de registros {data.length}
      </Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <CardEndereco data={item} />}
        keyExtractor={(item) => toString(item.Id)}
      />
    </View>
  )
}

export default EnderecoFlatlist
