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

width:90%;
height: ${heightScreen *0.40}px;
background: ${colors.blueLing};
border-radius:${heightScreen *0.01}px;
align-self:center;
margin: 10px 0px;
overflow: hidden;
box-shadow: 10px 5px 5px ${colors.blue};
  
`;

export const ContainerMap = styled.View`
width:100%;
height:60%;
border-bottom-right-radius: ${heightScreen *0.02}px;
border-bottom-left-radius: ${heightScreen *0.02}px;
overflow:hidden;

`;

export const LabelTitle = styled.Text`

font-size:18px;
font-weight:bold;
color:#fff;
margin-top:10px;
margin-left:20px;
`;
export const ContainerDescript = styled.View`

flex-direction:row;
align-items:center;
align-self:center;
margin-top:10px;

`;

export const Label = styled.Text`

font-size: ${widthScreen * 0.04}px;
color: ${({color}) => color || '#000'};
margin: 0px 10px;

`;
export const Img = styled.Image`

width:100%;

`;

export const ButtonDescript = styled.TouchableOpacity`

width:30%;
height: ${heightScreen * 0.05}px;
border-radius: ${heightScreen *0.006}px;
border-color: #f1c40f;
border-width:1px;
margin-left:5px;

display:flex;
align-items:center;
justify-content:center;

`;
