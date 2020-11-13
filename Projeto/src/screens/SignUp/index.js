import React,{useState} from 'react';

import { MaterialIcons , Entypo , FontAwesome , FontAwesome5} from '@expo/vector-icons';

import {Container , 
  ContainerTop , 
  ButtonArrow ,
  ImgIlustration ,  
  ContainerForm , 
  ContainerInput , 
  InputForm ,
  ButtonToucha, 
  ButtonForm , 
  LabelForm
}
   from './styles'

export default function SignUp({ navigation }) {

const [email , setEmail] = useState('');
const [senha , setSenha] = useState('');

const [isVisib , setIsVisi] = useState(false);

function IsVisibilitEye(){
  setIsVisi((Data) => !Data)
}

function SignIn(){
  navigation.navigate('SignIn')
}
 return (
  <Container>

  <ContainerTop>

      <ButtonArrow onPress={ SignIn }>

           <MaterialIcons name="keyboard-arrow-left" size={30} color="#6C63FF" />

      </ButtonArrow>

      <ImgIlustration source ={require('../../image/imgIlus02.png')} resizeMode='contain'/>

  </ContainerTop>

  <ContainerForm>

        <ContainerInput>

          <FontAwesome name="user" size={24} color="#6C63FF" />
          <InputForm placeholder='Nome Completo' 
          
          value={email}
          onChangeText={(texto)=> setEmail(texto)}
          
          />

        </ContainerInput>

        <ContainerInput>

        <MaterialIcons name="email" size={30} color="#6C63FF" />
        <InputForm placeholder='Email' 

        value={email}
        onChangeText={(texto)=> setEmail(texto)}

        />

        </ContainerInput>

        <ContainerInput>

        <Entypo name="lock" size={24} color="#6C63FF" />
        <InputForm 
        placeholder='Senha' 
        secureTextEntry={isVisib} 
        value={senha}
        onChangeText={(texto)=> setSenha(texto)}
        
        />

        <ButtonToucha onPress={IsVisibilitEye}>

        <Entypo name={isVisib ? 'eye' : 'eye-with-line'} size={24} color="#fff" />

        </ButtonToucha>

        </ContainerInput>

        <ContainerInput>
           <FontAwesome5 name="user-lock" size={24} color="#6C63FF" />
           
            <InputForm placeholder='Nível' 

            value={email}
            onChangeText={(texto)=> setEmail(texto)}

            />

        </ContainerInput>
      
        <ButtonForm > 

          <LabelForm color='#6C63FF'>Cadastrar</LabelForm>

        </ButtonForm>

  </ContainerForm>

</Container>
  );
}