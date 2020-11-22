import React from 'react';
import Header from '../../../component/header/index';
import CardDelivery from '../../../component/CardDelivery/index'

import {Container , ContainerDelivery , ContainerHeader}  from './styles';
import {DatabasePoits} from '../../../server/api'

export default function Home() {
 return (

   <Container>

     <ContainerHeader>

     <Header placeholder='pesquisa'/>

     </ContainerHeader>

     <ContainerDelivery>

    {DatabasePoits.map((point) =>(

      <CardDelivery
      
      key={point.key}
      location={point}

      />

    ))}

     </ContainerDelivery>

   </Container>

  );
}