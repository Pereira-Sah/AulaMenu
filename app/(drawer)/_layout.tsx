import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return <Drawer screenOptions={{
            drawerActiveBackgroundColor: "#a8dcab",
          drawerInactiveBackgroundColor: "#b7bdb7ff",
            drawerActiveTintColor: "#0c5b0cff",
            drawerInactiveTintColor: "#374537ff"
            }}>
    <Drawer.Screen name="home"
    options={{title:'Home',
        drawerLabel:"Inicio"
    }}/>
      <Drawer.Screen name="sobre"
    options={{title:'Sobre',
        drawerLabel:"Sobre nós"
    }}/>

  </Drawer>
}
