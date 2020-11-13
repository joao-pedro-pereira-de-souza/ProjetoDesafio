import React,{useState} from 'react';

import { MaterialIcons , Entypo} from '@expo/vector-icons';

import {Container , ContainerTop , ImgIlustration , Label , ContainerForm , ContainerInput , InputForm ,ButtonToucha, Title , ButtonForm , LabelForm} from './styles'

import Api from '../../server/api'

export default function SignIn({ navigation }) {

const [email , setEmail] = useState('');
const [senha , setSenha] = useState('');

const [isVisib , setIsVisi] = useState(false);


function IsVisibilitEye(){
  setIsVisi((Data) => !Data)
}

const SignIn = async () =>{

  let json = await Api.SignIn(email, senha);
  console.log(json)
}

function SignUp(){

  navigation.navigate('SignUp')
}

function Home(){
  navigation.navigate('Home')
}

 return (
   <Container>

      <ContainerTop>

        <Title>Delivery</Title>

        <ImgIlustration source ={require('../../image/imgIlus01.png')} resizeMode='contain'/>

      </ContainerTop>

      <ContainerForm>

            <ContainerInput>

              <MaterialIcons name="email" size={24} color="#6C63FF" />
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

            <ButtonForm onPress={Home}> 

              <LabelForm color='#6C63FF'>Login</LabelForm>

            </ButtonForm>

            <ButtonForm onPress={SignUp}>

              <LabelForm color='#6C63FF'>Cadastro</LabelForm>

            </ButtonForm>

      </ContainerForm>

   </Container>
  );
}