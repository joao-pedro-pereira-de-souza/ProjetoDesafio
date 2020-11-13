import React from 'react';

import {Container ,
ContainerTop,
ContainerSeach,
ContainerInput,
InputSech


} from './styles'
import { AntDesign , Entypo} from '@expo/vector-icons';

export default function header({placeholder}) {
 return (
   <Container>
       <ContainerTop>

       <Entypo name="menu" size={24} color="#FFF" />

       <AntDesign name="filter" size={24} color="#FFF" />

       </ContainerTop>

       <ContainerSeach>

           <ContainerInput>
             <AntDesign name="search1" size={24} color="#FFF" />
             <InputSech placeholder={placeholder}/>

           </ContainerInput>

       </ContainerSeach>

   </Container>
  );
}