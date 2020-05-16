/**
 * @format
 */

import {AppRegistry} from 'react-native';
require('react-native').unstable_enableLogBox();
import {Provider} from 'react-redux';
import store from './redux/store';
import AppContainer from './App';
import {name as appName} from './app.json';
import React from 'react';
const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);
AppRegistry.registerComponent(appName, () => App);
