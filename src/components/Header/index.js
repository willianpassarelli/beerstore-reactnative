import React from 'react';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Logo, IconCart, ItemCount } from './styles';

const Header = ({ navigation, cartSize }) => {
  return (
    <Container>
      <Logo />
      <IconCart onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-cart" color="#000" size={24} />
        <ItemCount>{cartSize}</ItemCount>
      </IconCart>
    </Container>
  );
};

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
