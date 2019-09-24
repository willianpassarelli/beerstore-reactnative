import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Products = styled.View`
  align-items: center;
  flex-direction: row;
  padding: 0 20px;
`;

export const Scroll = styled.ScrollView``;

export const CartList = styled.View`
  padding: 10px 0;
  border-bottom-color: #eee;
  border-bottom-width: 1px;
`;

export const ProductImage = styled.Image.attrs({
  resize: 'cover',
})`
  height: 130px;
  width: 80px;
`;

export const ProductInfo = styled.View`
  flex: 1;
`;

export const ProductTitle = styled.Text`
  font-size: 14px;
  color: #515151;
`;

export const ProductPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #000;
`;

export const ButtonDelete = styled.TouchableOpacity`
  padding: 20px;
`;

export const ProductControls = styled.View`
  align-items: center;
  flex-direction: row;
  padding: 10px 30px 0 30px;
`;

export const ProductControlButton = styled.TouchableOpacity``;

export const ProductAmount = styled.TextInput.attrs({
  readonly: true,
})`
  text-align: center;
  font-size: 16px;
  padding: 5px;
  margin: 0 5px;
  border-radius: 4px;
  min-width: 30px;
`;

export const ProductSubTotal = styled.Text`
  flex: 1;
  font-size: 16px;
  font-weight: bold;
  text-align: right;
  color: #232323;
`;

export const TotalContainer = styled.View`
  padding: 20px;
  border-bottom-color: #eee;
  border-bottom-width: 1px;
`;

export const TotalText = styled.Text`
  font-size: 22px;
  color: #232323;
  font-weight: bold;
`;

export const TotalTitle = styled.Text`
  font-size: 12px;
  color: #747474;
  font-weight: 700;
`;

export const ButtonOrder = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: center;
  background: ${props => (props.disabled ? '#c6c6c6' : '#e89800')};
`;

export const OrderText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

export const EmptyContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const EmptyText = styled.Text`
  color: #ccc;
  font-size: 24px;
  font-weight: bold;
  margin-top: 18px;
`;
