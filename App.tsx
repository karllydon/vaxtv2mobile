import 'react-native-gesture-handler';
import * as React from 'react';
import {StatusBar, View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import {store} from './store';
import {useAppDispatch} from './hooks';
import {useAuth0, Auth0Provider} from 'react-native-auth0';
import Slides from './Slides';
import {storeToken} from './features/tokenStoreSlice';
import {AUTH0_AUDIENCE} from '@env';
import {AUTH0_DOMAIN} from '@env';
import {AUTH0_CLIENT_ID} from '@env';

const Stack = createStackNavigator();

const Login = ({navigation}: any) => {
  const {authorize} = useAuth0();
  const dispatch = useAppDispatch();

  const onPress = async () => {
    try {
      const result = await authorize({
        audience: AUTH0_AUDIENCE,
      });
      console.log(result?.accessToken);
      dispatch(storeToken(result?.accessToken));
      navigation.navigate('Slides');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View>
      <Button onPress={onPress} title="Log in" />
    </View>
  );
};

export default function App() {
  return (
    <Auth0Provider domain={AUTH0_DOMAIN} clientId={AUTH0_CLIENT_ID}>
      <Provider store={store}>
        <StatusBar hidden={true} />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen
              name="Slides"
              component={Slides}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </Auth0Provider>
  );
}
