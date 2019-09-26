import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import CartIcon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';

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
  EmptyContainer,
  EmptyText,
} from './styles';

function Cart() {
  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
      }, 0)
    )
  );

  const cartSize = useSelector(state => (state.cart.length ? false : true));

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }
  return (
    <Container>
      <TotalContainer>
        <TotalTitle>TOTAL</TotalTitle>
        <TotalText>{total}</TotalText>
      </TotalContainer>
      {cart.length ? (
        <Scroll>
          {cart.map(product => (
            <CartList key={product.id}>
              <Products>
                <ProductImage source={{ uri: product.image }} />
                <ProductInfo>
                  <ProductTitle>{product.title}</ProductTitle>
                  <ProductPrice>{product.priceFormatted}</ProductPrice>
                </ProductInfo>
                <ButtonDelete
                  onPress={() =>
                    dispatch(CartActions.removeFromCart(product.id))
                  }
                >
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
      ) : (
        <EmptyContainer>
          <CartIcon name="remove-shopping-cart" size={64} color="#eee" />
          <EmptyText>Seu carrinho está vazio.</EmptyText>
        </EmptyContainer>
      )}

      <ButtonOrder disabled={cartSize}>
        <OrderText>FINALIZAR PEDIDO</OrderText>
      </ButtonOrder>
    </Container>
  );
}

export default Cart;
