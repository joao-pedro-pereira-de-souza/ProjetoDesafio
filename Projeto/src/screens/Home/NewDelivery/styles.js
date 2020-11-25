import styled from 'styled-components/native';

import {colors , heightScreen} from '../../../styles';

export const Container = styled.ScrollView`
  flex:1;
  background: ${colors.blueDark};
`;
 export const ContainerInput = styled.View`
 
 align-self:center;
 margin-top: ${heightScreen * 0.08}px;
 
 `;

 export const ContainerCardsPedidosOK = styled.View`
 
 width:100%;
 height: 300px;
 align-self:center;
 margin: 20px 0px;
 
 `;
 export const SlideView = styled.View`
 
 width: 100%;
 height: 240px;
 border-radius:10px;
 overflow:hidden;
 
 `;

export const ContainerTitulo = styled.View`

margin: 20px 0px;
width:100%;
padding:0px 20px;

`;
 export const ContainerDescriptMaps = styled.View`
 
 width:100%;
 height:50%;
 background: ${colors.blue};

 opacity: 0.3 ;
 position:absolute;
 
 `;

 export const ContainerDescriptItensMaps = styled.View`
 width:100%;
 padding: 0px 10px;
 position:absolute;
 align-self:center;
 margin-top:10px;


 `;

export const Title = styled.Text`

font-size: 17px;
font-weight:bold;
color: #fff;

`;
export const ContainerLabelMaps = styled.View`

max-height:45px;
overflow:hidden;

`;

 export const Label = styled.Text`
 
 font-size:13px;
 color: #fff;
 opacity: 0.7;
 
 `;

export const ContaierStarMaps = styled.View`

position:absolute;
flex-direction:row;
top:120%;
right:10%;

`


