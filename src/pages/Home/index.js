import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Icon from 'react-native-vector-icons/FontAwesome';

import * as CartActions from '~/store/modules/cart/actions';

import { formatPrice } from '~/util/format';

import api from '~/services/api';

import {
  Container,
  Products,
  CardContainer,
  ProductImage,
  ProductPrice,
  ProductTitle,
  ProductDetails,
  DetailsContainer,
  DetailTitle,
  DetailPrice,
  DetailImage,
  DetailDescription,
  DetailAmount,
  ContainerButton,
  AddButtonText,
} from './styles';

function Home() {
  const [products, setProducts] = useState([]);
  const [productView, setProductView] = useState({});

  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  function handleProductView(product) {
    setProductView(product);
  }

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  function renderProduct({ item }) {
    return (
      <Products key={item.id}>
        <CardContainer onPress={() => handleProductView(item)}>
          <ProductImage source={{ uri: item.image }} />
          <ProductPrice>{item.priceFormatted}</ProductPrice>
          <ProductTitle>{item.title}</ProductTitle>
        </CardContainer>
      </Products>
    );
  }

  return (
    <Container>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={products}
        keyExtractor={item => String(item.id)}
        renderItem={renderProduct}
      />

      <ProductDetails
        key={productView.id}
        colors={['#F97427', '#FFF522']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <DetailsContainer>
          <DetailTitle>{productView.title}</DetailTitle>
          <DetailPrice>{productView.priceFormatted}</DetailPrice>
          <DetailDescription>{productView.description}</DetailDescription>
          {productView.id && (
            <ContainerButton onPress={() => handleAddProduct(productView.id)}>
              <Icon name="cart-plus" color="#fff" size={24} />
              <DetailAmount>{amount[productView.id] || 0}</DetailAmount>
              <AddButtonText>ADICIONAR</AddButtonText>
            </ContainerButton>
          )}
          <DetailImage source={{ uri: productView.image }} />
        </DetailsContainer>
      </ProductDetails>
    </Container>
  );
}

export default Home;
