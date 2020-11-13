import React from 'react'
import {Dimensions} from 'react-native'

import styled from 'styled-components/native';

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

export const ContainerTop = styled.View`

background: ${colors.blueLing};
height: ${ heightScreen *0.30}px;

display:flex;
justify-content:center;
align-items:center;

border-bottom-right-radius: ${ heightScreen *0.05}px;
border-bottom-left-radius: ${ heightScreen *0.05}px;

`;

export const ImgIlustration = styled.Image`

width:30%;

`;

export const ButtonArrow = styled.Text`

position: absolute;
top:15%;
left:3%;
`;

export const ContainerForm = styled.View`

flex:1;
display:flex;
align-items: center;
margin-top:20px;

`;

export const ContainerInput = styled.View`

background: ${colors.blueLing};
border-radius:5px;
flex-direction:row;
align-items:center;

width:80%;
height:${ heightScreen *0.08}px;
padding: 0px 10px;
margin:10px 0px;

`;

export const InputForm = styled.TextInput.attrs({
    placeholderTextColor:'#fff'
})`

flex:1;
overflow:hidden;
color:#fff;
margin-left:10px;

font-size: ${ heightScreen *0.02}px;

`;

export const ButtonToucha = styled.TouchableOpacity``;

export const ButtonForm = styled.TouchableOpacity`

width:80%;
height: ${ heightScreen *0.07}px;
margin: 10px 0px;
display:flex;
align-items:center;
justify-content:center;

background: ${colors.blue};
border-radius: ${ heightScreen *0.01}px;

`;

export const LabelForm = styled.Text`

font-size:18px;
font-weight:bold;
color:#fff;

margin: 10px 0px;
`;
