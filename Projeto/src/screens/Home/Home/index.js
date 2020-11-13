import React from 'react';
import { Entypo } from '@expo/vector-icons';

import Header from '../../../component/header/index';
import CardDelivery from '../../../component/CardDelivery/index'

import {Container , ContainerDelivery}  from './styles';

export default function Home() {
 return (

   <Container>

     <Header placeholder='pesquisa'/>

     <ContainerDelivery>

        <CardDelivery/>

        <CardDelivery/>

     </ContainerDelivery>

   </Container>

  );
}