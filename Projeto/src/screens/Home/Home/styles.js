import styled from 'styled-components/native';

import {Dimensions} from 'react-native'

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const colors ={

    blue:'#6C63FF',
    blueDark:'#090D26',
    blueLing :'#181B3A',
}


export const Container = styled.View`
  
  flex:1;
  background: ${colors.blueDark};
  
`;

export const ContainerDelivery = styled.ScrollView`

margin: 10px 0px;

`;
