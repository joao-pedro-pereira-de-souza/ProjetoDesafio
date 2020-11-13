
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

