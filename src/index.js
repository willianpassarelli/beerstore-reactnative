import React from 'react';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';

import { Provider } from 'react-redux';
import store from './store';

import Routes from '~/routes';
import NavigationService from './services/navigation';

const App = () => (
  <Provider store={store}>
    <StatusBar backgroundColor="#fff" barStyle="dark-content" />
    <Routes
      ref={navigatorRef => NavigationService.setNavigator(navigatorRef)}
    />
  </Provider>
);

export default App;
