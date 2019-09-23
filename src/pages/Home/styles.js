import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  flex: 1;
`;

export const Products = styled.View`
  flex: 1;
  padding: 20px 5px 0 20px;
  flex-direction: row;
`;

export const CardContainer = styled.View`
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  elevation: 3;
  border-radius: 10px;
  height: 180px;
  width: 130px;
  padding: 100px 10px 10px 10px;
  margin: 20px 0;
  background: #fff;
`;

export const ProductImage = styled.Image.attrs({
  resize: 'cover',
})`
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

export const ProductTitle = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 16px;
`;

export const ProductButton = styled.TouchableOpacity`
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ProductButtonText = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: 700;
  color: #000;
`;

export const ProductDetails = styled(LinearGradient)`
  margin-left: 20px;
  align-items: flex-end;
  justify-content: flex-end;
  border-top-left-radius: 30px;
  background: #e89800;
`;

export const DetailsContainer = styled.View`
  width: 100%;
  padding: 10px 0 20px 20px;
`;

export const DetailTitle = styled.Text`
  font-size: 26px;
  max-width: 200px;
  color: #fff;
`;

export const DetailPrice = styled.Text`
  font-size: 26px;
  color: #fff;
  font-weight: bold;
`;

export const DetailDescription = styled.Text`
  margin-top: 10px;
  max-width: 200px;
  font-size: 12px;
  color: #fff;
`;

export const DetailImage = styled.Image.attrs({
  resize: 'cover',
})`
  position: absolute;
  right: -40px;
  top: -40px;
  height: 250px;
  width: 200px;
`;

export const ContainerButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin: 10px 0;
`;

export const DetailAmount = styled.Text`
  color: #fff;
  margin: 0px 4px 0px 10px;
`;

export const AddButtonText = styled.Text`
  text-align: center;
  font-weight: bold;
  color: #fff;
`;
