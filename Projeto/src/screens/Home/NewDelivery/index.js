import React from 'react';
import { Container , ContainerInput} from './styles';
import Input from '../../../component/input/index';
import { AntDesign } from '@expo/vector-icons';
import { useLinkProps } from '@react-navigation/native';

export default function NewDelivery() {
 return (
   <Container>
     
     <ContainerInput>

     <Input Icon={AntDesign} name='search1' place='Local de destino' placeTextColor='#dfe4ea'/>

     </ContainerInput>

   </Container>
  );
}