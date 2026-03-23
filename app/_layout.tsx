import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Layout(){
    return(
        <Tabs screenOptions={{
            tabBarActiveBackgroundColor: "#a8dcab",
            tabBarInactiveBackgroundColor: "#b7bdb7ff",
            tabBarActiveTintColor: "#0c5b0cff",
            tabBarInactiveTintColor: "#374537ff"
            }}>
            <Tabs.Screen name='index'
              options={{title:'Home',
               tabBarIcon:({color})=> <FontAwesome name="home" size={24} color={color} />
              }}
              
              />
                <Tabs.Screen name='cadastro'
              options={{title:'Cadastro',
               tabBarIcon:({color})=><Ionicons name="person-add-sharp" size={24} color={color} />
                }}
              />
        </Tabs>
       

    )
}