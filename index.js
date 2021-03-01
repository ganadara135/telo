/**
 * @format
 */
import { AppRegistry } from 'react-native';
import React from 'react';
import App from './App';
import { name as appName } from './app.json';
import { SafeAreaView, StatusBar, } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux';
import { HomeKcod } from './src/containers';

const MyApp = () => (
  <Provider store = { store }>
    <App />
    {/* <HomeKcod /> */}
    {/* <StatusBar barStyle="dark-content" hidden />
      <SafeAreaView>
        <App />
       
      </SafeAreaView> */}
  </Provider>
)

AppRegistry.registerComponent(appName, () => MyApp);
