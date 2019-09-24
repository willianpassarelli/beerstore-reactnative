import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Header from '~/components/Header';

import Home from '~/pages/Home';
import Cart from '~/pages/Cart';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home,
      Cart,
    },
    {
      defaultNavigationOptions: navigation => ({
        header: <Header {...navigation} />,
        headerStyle: {
          backgroundColor: '#fff',
        },
      }),
    }
  )
);

export default Routes;
