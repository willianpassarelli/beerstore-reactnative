import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { formatPrice } from '~/util/format';

import * as CartActions from '~/store/modules/cart/actions';

import {
  Container,
  Scroll,
  CartList,
  Products,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductPrice,
  ButtonDelete,
  ProductControls,
  ProductControlButton,
  ProductAmount,
  ProductSubTotal,
  TotalContainer,
  TotalText,
  TotalTitle,
  ButtonOrder,
  OrderText,
} from './styles';

function Cart({
  navigation,
  cart,
  removeFromCart,
  total,
  updateAmountRequest,
}) {
  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }
  return (
    <Container>
      <TotalContainer>
        <TotalTitle>TOTAL</TotalTitle>
        <TotalText>{total}</TotalText>
      </TotalContainer>
      <Scroll>
        {cart.map(product => (
          <CartList key={product.id}>
            <Products>
              <ProductImage source={{ uri: product.image }} />
              <ProductInfo>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductPrice>{product.priceFormatted}</ProductPrice>
              </ProductInfo>
              <ButtonDelete onPress={() => removeFromCart(product.id)}>
                <Icon name="trash-o" size={22} color="#e89800" />
              </ButtonDelete>
            </Products>
            <ProductControls>
              <ProductControlButton onPress={() => decrement(product)}>
                <Icon name="minus" size={14} color="#e89800" />
              </ProductControlButton>
              <ProductAmount value={String(product.amount)} />
              <ProductControlButton onPress={() => increment(product)}>
                <Icon name="plus" size={14} color="#e89800" />
              </ProductControlButton>
              <ProductSubTotal>{product.subtotal}</ProductSubTotal>
            </ProductControls>
          </CartList>
        ))}
      </Scroll>
      <ButtonOrder>
        <OrderText>FINALIZAR PEDIDO</OrderText>
      </ButtonOrder>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
