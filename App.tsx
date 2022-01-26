import { StyleSheet, Text, View } from 'react-native';
// react-native navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// components
import { Rooms } from './screens/rooms/Rooms';
import { Chat } from './screens/chat/Chat';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Rooms" component={Rooms} />
        <Stack.Screen name="Chat" component={Chat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}