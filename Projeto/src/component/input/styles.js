import styled from 'styled-components/native';

import {colors , widthScreen , heightScreen} from '../../styles'

export const Container = styled.SafeAreaView`

width:100%;
padding: ${heightScreen * 0.018}px;

background: ${({bg}) => bg || colors.blueLing};
border-radius:${heightScreen * 0.01}px;

flex-direction:row;
align-items:center;
  
`;

export const InputSearch = styled.TextInput`

margin-left:10px;
width:100%;
color: ${({color}) => color || '#fff'};

`;



