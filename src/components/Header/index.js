import React from 'react';
import { useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Logo, IconCart, ItemCount } from './styles';

function Header({ navigation }) {
  const cartSize = useSelector(state => state.cart.length);
  return (
    <Container>
      <Logo />
      <IconCart onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-cart" color="#000" size={24} />
        <ItemCount>{cartSize}</ItemCount>
      </IconCart>
    </Container>
  );
}

export default Header;
