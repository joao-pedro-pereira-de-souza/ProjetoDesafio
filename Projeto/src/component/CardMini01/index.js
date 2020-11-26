import React from 'react';
import { Container , Img , ContainerTitulo , Title} from './styles';

export default function CardMini01() {
 return (
   <Container>
       <Img source={require('../../image/map.png')}/>

       <ContainerTitulo/>

       <Title>Titulo</Title>
           
   </Container>
  );
}