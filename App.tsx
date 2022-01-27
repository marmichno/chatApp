// hooks
import { useState } from 'react';
// react-native navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// components
import { Rooms } from './screens/rooms/Rooms';
import { Chat } from './screens/chat/Chat';
import AppLoading from 'expo-app-loading';
// fonts
import * as Font from 'expo-font';
// apollo
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

const getFonts = () => Font.loadAsync({
  'poppins-bold': require('./assets/fonts/Poppins-Bold.ttf'),
  'poppins-semiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
  'poppins-medium': require('./assets/fonts/Poppins-Medium.ttf'),
  'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
  'sf-compact-text': require('./assets/fonts/SF-Compact-Text.ttf'),
  'sf-compact-displayRegular': require('./assets/fonts/SF-Compact-DisplayRegular.ttf'),
  'sf-compact-displayBold': require('./assets/fonts/SF-Compact-DisplayBold.ttf')
});

const Stack = createNativeStackNavigator();

const httpLink = createHttpLink({
  uri: 'uri',
});

const authLink = setContext((_, { headers }) => {

  return {
    headers: {
      ...headers,
      authorization: `Bearer`
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <ApolloProvider client={client}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false
            }}
          >
            <Stack.Screen
              name="Rooms"
              component={Rooms}
            />
            <Stack.Screen
              name="Chat"
              component={Chat}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ApolloProvider>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    )
  }
}