import styled from 'styled-components/native';
import {Dimensions} from 'react-native'

const heightScreen = Dimensions.get('window').height;

const colors ={

    blue:'#6C63FF',
    blueDark:'#090D26',
    blueLing :'#181B3A',
}


export const Container = styled.View`
  width:100%;

`;

export const ContainerTop = styled.View`

flex-direction:row;
justify-content:space-between;
margin: 10px 0px;
padding: 0px 20px;
`;
export const ContainerSeach = styled.View`

align-self:center;
padding:0px 30px;


`;
