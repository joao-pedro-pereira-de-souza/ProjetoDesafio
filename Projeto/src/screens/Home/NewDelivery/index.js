import React from 'react';
import { Container , ContainerForm , ContainerInput , ContainerInputSearch , ContainerInputSearchInput , ContainerViewDestino , ButtonSearch} from './styles';
import Input from '../../../component/input/index';
import {colors } from '../../../styles'
import { MaterialIcons , FontAwesome , AntDesign} from '@expo/vector-icons';
export default function NewDelivery() {
 return (
   <Container>

     <ContainerForm >

       <ContainerInput>
          <Input Icon={MaterialIcons} name='title' place='Titulo' placeTextColor='#dfe4ea' bg={colors.blueDark} />
       </ContainerInput>
   
       <ContainerInput>
          <Input Icon={MaterialIcons} name='subtitles' place='Descrição' placeTextColor='#dfe4ea' bg={colors.blueDark} />
       </ContainerInput>
       
       <ContainerInputSearch>

         <ContainerInputSearchInput>

            <Input Icon={FontAwesome} name='map-marker' place='Destino' placeTextColor='#dfe4ea' bg={colors.blueDark} />

         </ContainerInputSearchInput>
        
          <ButtonSearch> 

          <AntDesign name="search1" size={20} color="#fff" />

          </ButtonSearch>

       </ContainerInputSearch>

       <ContainerViewDestino>

        <MapView 

          style={{flex:1}} 
          initialRegion={ 

            item

          } 
          zoomEnabled={false} 
          scrollEnabled={false}
          /> 


       </ContainerViewDestino>

     </ContainerForm>
   </Container>

  );
}