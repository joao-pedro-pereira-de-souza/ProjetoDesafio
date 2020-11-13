import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Index from './src/screens/index'

export default function App() {
  return (
       <>
      <StatusBar barStyle='light-content' backgroundColor='#090D26'/>
      <Index/>
      </>
  );
}

