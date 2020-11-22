import React from 'react';
import { Container , InputSearch } from './styles';

import {widthScreen } from '../../styles'

export default function input(props) {
 return (
   <Container>

       <props.Icon name={props.name} size={widthScreen * 0.054} color='#fff'/>

       <InputSearch placeholder={props.place || 'Search'} placeholderTextColor={props.placeTextColor || '#fff'} color={props.color}/>

   </Container>
  );
}