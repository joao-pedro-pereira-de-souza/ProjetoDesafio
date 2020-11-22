/*
import {useState} from 'react'

const BASE_API ='https://projectdrawer.000webhostapp.com';

export default {

    SignIn: async(email , senha)=>{
        
        const req = await fetch( BASE_API + '/login.php', {

        method:'POST',

        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({email , senha})

        })

        const json = await req.json();

        return json;
    }

}
*/

export const DatabasePoits = [

    {
        latitude: -23.6982771 ,
        longitude: -46.6484508,
        latitudeDelta: 0.0522,
        longitudeDelta: 0.0321,
    },
    {
        latitude: -23.8043604,
        longitude: -46.6718384,
        latitudeDelta: 0.0522,
        longitudeDelta: 0.0321,
    },
]
