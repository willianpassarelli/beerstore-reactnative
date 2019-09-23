import React from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Icon from 'react-native-vector-icons/FontAwesome';

import { formatPrice } from '~/util/format';

import api from '~/services/api';

import {
  Container,
  Products,
  CardContainer,
  ProductImage,
  ProductPrice,
  ProductTitle,
  ProductButton,
  ProductButtonText,
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

class Home extends React.Component {
  state = {
    products: [],
    productView: {},
  };

  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  handleProductView = async id => {
    const response = await api.get(`products/${id}`);

    this.setState({ productView: response.data });
  };

  renderProduct = ({ item }) => {
    return (
      <Products key={item.id}>
        <CardContainer>
          <ProductImage source={{ uri: item.image }} />
          <ProductPrice>{item.priceFormatted}</ProductPrice>
          <ProductTitle>{item.title}</ProductTitle>
          <ProductButton onPress={() => this.handleProductView(item.id)}>
            <Icon name="eye" color="#e89800" size={22} />
            <ProductButtonText>VISUALIZAR</ProductButtonText>
          </ProductButton>
        </CardContainer>
      </Products>
    );
  };

  render() {
    const { products, productView } = this.state;
    return (
      <Container>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={products}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderProduct}
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
              <ContainerButton>
                <Icon name="cart-plus" color="#fff" size={24} />
                <DetailAmount>0</DetailAmount>
                <AddButtonText>ADICIONAR</AddButtonText>
              </ContainerButton>
            )}
            <DetailImage source={{ uri: productView.image }} />
          </DetailsContainer>
        </ProductDetails>
      </Container>
    );
  }
}

export default connect()(Home);
