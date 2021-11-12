import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import Login from './src/pages/Login';

export default class App extends Component {
  
  render(){
    return (
          <Login></Login>        
);
  }
  
};

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#F5FCFF",
    flex:1
}
});
