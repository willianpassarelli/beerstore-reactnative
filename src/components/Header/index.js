import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Logo, IconCart, ItemCount } from './styles';

const Header = ({ navigation }) => {
  return (
    <Container>
      <Logo />
      <IconCart onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-cart" color="#000" size={24} />
        <ItemCount>2</ItemCount>
      </IconCart>
    </Container>
  );
};

export default Header;
