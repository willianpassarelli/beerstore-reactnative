import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Logo, IconCart, ItemCount } from './styles';

const Header = ({ navigation }) => {
  return (
    <Container>
      <Logo />
      <IconCart>
        <Icon name="shopping-cart" color="#fff" size={34} />
        <ItemCount>2</ItemCount>
      </IconCart>
    </Container>
  );
};

export default Header;
