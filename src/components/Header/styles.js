import styled from 'styled-components/native';

import logo from '../../assets/logo.png';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px 20px;
  justify-content: space-between;
  background: #e89800;
`;

export const LogoText = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 104px;
  height: 69px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 117px;
  height: 100px;
`;

export const IconCart = styled.TouchableOpacity`
  height: 34px;
  width: 34px;
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const ItemCount = styled.Text`
  position: absolute;
  text-align: center;
  top: -8px;
  right: -8px;
  min-width: 18px;
  min-height: 18px;
  background: #923800;
  color: #fff;
  font-size: 12px;
  padding: 2px;
  border-radius: 9px;
  overflow: hidden;
`;
