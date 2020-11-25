import React from 'react';
import {Container , ContainerMap , LabelTitle , ContainerDescript , Img , Label , ButtonDescript} from './styles'
import { MaterialCommunityIcons , MaterialIcons} from '@expo/vector-icons';

import MapView from 'react-native-maps';

import {Dimensions} from 'react-native'
const widthScreen = Dimensions.get('window').width;

export default function CardDelivery(props) {

    const location = {

        latitude: -23.6982771 ,
        longitude: -46.6484508,
        latitudeDelta: 0.0522,
        longitudeDelta: 0.0321,
    }


 return (
   
   <Container>
       <ContainerMap>

          <MapView 

          style={{flex:1}} 
          initialRegion={ 

            props.location

           } 
           zoomEnabled={false} />

       </ContainerMap>

        <LabelTitle>Titulo da Entrega</LabelTitle>

        <ContainerDescript>

        <MaterialCommunityIcons name="map-marker-distance" size={widthScreen * 0.07} color="#2ecc71" />
        <Label color="#2ecc71" >300km</Label>

        <MaterialIcons name="timer" size={widthScreen * 0.07} color="#6C63FF" />
        <Label color="#6C63FF">2 dias</Label>

        <ButtonDescript>

        <Label color="#f1c40f" >Abrir</Label>

        </ButtonDescript>

        </ContainerDescript>

   </Container>
  );
}