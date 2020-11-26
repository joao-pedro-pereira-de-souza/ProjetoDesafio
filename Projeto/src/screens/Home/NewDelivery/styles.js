import styled from 'styled-components/native';
import {colors} from '../../../styles'

export const Container = styled.View`

  flex:1;
  background: ${colors.blueDark};
  display:flex;
  justify-content:center;
  align-items:center;

`;

export const ContainerForm = styled.View`

padding:20px;
width:90%;
background: ${colors.blueLing};
margin: 20px 0px;

border-width:1px;
border-color:#989DFF;


border-top-left-radius:30px;
border-bottom-right-radius:30px;

`;
export const ContainerInput = styled.View`
width:100%;
margin:10px 0px;
align-self:center;

`;
export const ContainerInputSearch = styled.View`

width:100%;
margin:10px 0px;
flex-direction:row;
justify-content:space-between;
align-items:center;

`;

export const ContainerInputSearchInput = styled.View`

width:80%;

`;

export const ButtonSearch = styled.TouchableOpacity`

width:16%;
height:45px;
background:${colors.blue};
border-radius:7px;

display:flex;
justify-content:center;
align-items:center;

`;

export const ContainerViewDestino = styled.View`

width:100%;
height: 200px;
background: ${colors.blueDark};
border-radius:10px;

`;