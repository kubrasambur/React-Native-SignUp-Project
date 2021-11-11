import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text,
  Image
} from 'react-native';

class App extends Component {
  
  render(){
    return (
      <View style={styles.container}>
        <Image resizeMode={'cover'} style={{width:'100%', height:500,borderWidth:7,borderColor:'red'}} source={{uri:'https://p4.wallpaperbetter.com/wallpaper/553/564/19/cyberpunk-amoled-dark-vertical-hd-wallpaper-preview.jpg'}}></Image>
        
      </View>
);
  }
  
};

const styles = StyleSheet.create({
  container:{
    backgroundColor:"yellow",
    flex:1,
    flexDirection:"column",
    alignItems:'center',
    justifyContent:"center"
}
});

export default App;
