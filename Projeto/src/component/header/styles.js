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
  padding:20px;
  margin: 10px 0px;
`;

export const ContainerTop = styled.View`

flex-direction:row;
justify-content:space-between;
margin: 10px 0px;

`;
export const ContainerSeach = styled.View`

flex-direction:row;


`;
export const ContainerInput = styled.View`

background: ${colors.blueLing};
border-radius:5px;
flex-direction:row;
align-items:center;

width:100%;
height: ${ heightScreen *0.08}px;
padding: 0px 10px;
margin:10px 0px;


`;

export const InputSech = styled.TextInput.attrs({
    placeholderTextColor:'#fff'
})`

flex:1;
overflow:hidden;
color:#fff;
margin-left:10px;

font-size: ${ heightScreen *0.02}px;

`;
