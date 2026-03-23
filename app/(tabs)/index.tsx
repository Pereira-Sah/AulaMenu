import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
import {router} from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Index</Text>
      <Button
        title='Entrar' 
        onPress={()=>router.push('/(drawer)/home')}/>
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
