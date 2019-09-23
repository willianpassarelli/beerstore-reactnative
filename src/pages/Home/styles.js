import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import background from '../../assets/backgroud.png';

export const Container = styled.View`
  flex: 1;
`;

export const Products = styled.View`
  flex: 1;
  padding: 20px;
  flex-direction: row;
`;

export const CardContainer = styled.View`
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  elevation: 3;
  border-radius: 10px;
  height: 180px;
  width: 130px;
  padding: 90px 10px 10px 10px;
  margin: 20px 0 20px 0;
  background: #fff;
`;

export const ProductImage = styled.Image`
  position: absolute;
  right: -20px;
  top: -30px;
  height: 150px;
  width: 100px;
`;

export const ProductPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
`;

export const AddCart = styled.TouchableOpacity`
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const AddText = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: bold;
  color: #000;
`;

export const AddAmount = styled.Text`
  font-size: 16px;
  color: #e89800;
`;

export const ProductDetails = styled(LinearGradient)`
  margin-left: 20px;
  justify-content: flex-end;
  align-items: flex-end;
  border-top-left-radius: 30px;
  background: #e89800;
`;

export const DetailsBackground = styled.Image.attrs({
  source: background,
  resize: 'cover',
})``;

export const ContainerDatails = styled.View``;
