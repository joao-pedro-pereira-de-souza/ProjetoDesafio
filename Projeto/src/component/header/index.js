import React from 'react';

import {Container ,
ContainerTop,
ContainerSeach,

} from './styles';

import { AntDesign , Entypo} from '@expo/vector-icons';
import Input from '../../component/input/index';

export default function header({placeholder}) {
 return (
   <Container>
       <ContainerTop>

       <Entypo name="menu" size={24} color="#FFF" />

       <AntDesign name="filter" size={24} color="#FFF" />

       </ContainerTop>

       <ContainerSeach>

           <Input Icon={AntDesign} name='search1' place='Pesquisa' placeTextColor='#dfe4ea'/>

       </ContainerSeach>

   </Container>
  );
}