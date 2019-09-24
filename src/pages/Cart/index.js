import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';

import {
  Container,
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

class Cart extends React.Component {
  render() {
    return (
      <Container>
        <TotalContainer>
          <TotalTitle>SUBTOTAL</TotalTitle>
          <TotalText>R$ 420,00</TotalText>
        </TotalContainer>
        <CartList>
          <Products>
            <ProductImage
              source={{
                uri:
                  'https://www.ambev.com.br/conteudo/uploads/2019/03/goose-island_honekrs-ale_355ml.png',
              }}
            />
            <ProductInfo>
              <ProductTitle>Cerveja Colorado</ProductTitle>
              <ProductPrice>R$ 210,00</ProductPrice>
            </ProductInfo>
            <ButtonDelete onPress={() => {}}>
              <Icon name="trash-o" size={22} color="#e89800" />
            </ButtonDelete>
          </Products>
          <ProductControls>
            <ProductControlButton onPress={() => {}}>
              <Icon name="minus" size={14} color="#e89800" />
            </ProductControlButton>
            <ProductAmount value="2" />
            <ProductControlButton onPress={() => {}}>
              <Icon name="plus" size={14} color="#e89800" />
            </ProductControlButton>
            <ProductSubTotal>R$ 420,00</ProductSubTotal>
          </ProductControls>
        </CartList>

        <ButtonOrder>
          <OrderText>FINALIZAR PEDIDO</OrderText>
        </ButtonOrder>
      </Container>
    );
  }
}

export default connect()(Cart);
