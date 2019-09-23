import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import {
  Container,
  Products,
  CardContainer,
  ProductImage,
  ProductPrice,
  ProductTitle,
  AddCart,
  AddText,
  AddAmount,
  ProductDetails,
  DetailsBackground,
} from './styles';

class Main extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map(product => ({
      ...product,
    }));

    this.setState({ products: data });
  }

  renderProduct = ({ item }) => {
    return (
      <Products key={item.id}>
        <CardContainer>
          <ProductImage source={{ uri: item.image }} />
          <ProductPrice>{item.price}</ProductPrice>
          <ProductTitle>{item.title}</ProductTitle>
          <AddCart>
            <Icon name="add-shopping-cart" color="#e89800" size={22} />
            <AddText>ADICIONAR</AddText>
          </AddCart>
        </CardContainer>
      </Products>
    );
  };

  render() {
    const { products } = this.state;
    return (
      <Container>
        <FlatList
          horizontal
          data={products}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderProduct}
        />

        <ProductDetails
          colors={['#F97427', '#FFF522']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          <DetailsBackground />
        </ProductDetails>
      </Container>
    );
  }
}

export default connect()(Main);
