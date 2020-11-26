
import styled from 'styled-components/native';
import { colors} from '../../styles';

export const Container = styled.View`
  width:100px;
  height:100px;
  border-radius:10px;
  overflow:hidden;
  margin: 5px 5px;
`;

export const Img = styled.Image`

flex:1;

`;
export const ContainerTitulo = styled.View`
width:100%;
height:50%;
position:absolute;
bottom:0px;
background: ${colors.blue};
opacity: 0.3;

`;

export const Title = styled.Text`

position:absolute;
bottom:25%;
color: #fff;
font-size:15px;
font-weight:bold;
align-self:center
`;