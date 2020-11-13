import React from 'react';

import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ScreenHome from './Home/index';
import ScreenNewDelivery from './NewDelivery/index';
import ScreenUser from './User/index';

import { MaterialCommunityIcons , AntDesign , FontAwesome5} from '@expo/vector-icons';

export default function screens() {

    const Tab = createBottomTabNavigator();

    const icons = {

        Home:{

            lib: AntDesign,
            name:'home'
        },

        New:{

            lib: MaterialCommunityIcons,
            name:'truck-delivery'

        },
        User:{

            lib: FontAwesome5,
            name:'user-alt'

        }


    }

 return (
   <NavigationContainer independent={true} >
       
       <Tab.Navigator screenOptions={({route}) => ({

           tabBarIcon:({color , size})=>{

            const {lib:Icon , name} = icons[route.name];

            return <Icon name={name} size={size} color={color}/> ;    

           }

       })} tabBarOptions={{ 

           style:{
           backgroundColor:'#181B3A',
           borderTopWidth:0,
           height:60,
           
        
       },
       activeTintColor:'#6C63FF'
       
       
       }}>
           
           <Tab.Screen name='Home' component={ ScreenHome }/>
           <Tab.Screen name='New' component={ ScreenNewDelivery }/>
           <Tab.Screen name='User' component={ ScreenUser }/>
           
       </Tab.Navigator>
   </NavigationContainer>
  );
}