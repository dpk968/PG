
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from "./components/MainScreen";
import Library from './components/Library';


const Stack = createNativeStackNavigator();


export default function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={MainScreen} />
      <Stack.Screen name="Details" component={Library} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

