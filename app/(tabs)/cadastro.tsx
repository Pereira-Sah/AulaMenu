import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useState, useEffect} from 'react';
export default function App() {

  const [api, setApi] = useState()

    async function buscarApi(){
      const dados = await fetch('https://jsonplaceholder.typicode.com/users')
      const json = await dados.json()
      setApi(json)
    }

    useEffect(()=>{
      buscarApi()
    },[])
  return (
    <View style={styles.container}>
      <Text>Usuarios</Text>
      <FlatList
       data={api}
       keyExtractor={item=>item.id}
       renderItem={({item})=><Text>{item.name}</Text>}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
