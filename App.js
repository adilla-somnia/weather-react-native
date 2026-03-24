import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import AddContactButton from './components/AddContactButton';
import WeatherForecast from './screens/WeatherForecast';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='WeatherForecast'>
        <Stack.Screen name="WeatherForecast" component={WeatherForecast} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
