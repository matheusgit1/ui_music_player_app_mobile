import React from 'react';
import Root from './src/root';
import {Colors} from './src/Constants'
import {StatusBar} from 'react-native';
export default function App() {
  return ( 
    <React.Fragment>
       <StatusBar barStyle="light-content" style="light" backgroundColor={Colors.secondary} translucent={false}/>
    <Root/>
    </React.Fragment>
  );
}

