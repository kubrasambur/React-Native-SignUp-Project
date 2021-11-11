import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';

class App extends Component {
  onPress=()=>{
    alert('galp')
  }
  render(){
    return (
      <View style={styles.container}>
        <TouchableOpacity style={{marginBottom:30}}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonTitle}>My Button</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onPress}>
          <Image style={{height:80,width:80}} source={require('./src/assests/button.png')}></Image>
        </TouchableOpacity>
      </View>
);
  }
  
};

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#3498DB",
    flex:1,
    flexDirection:"column",
    alignItems:'center',
    justifyContent:"center"
},
buttonTitle:{
  fontSize:30
},
buttonContainer:{
  padding:15,
  backgroundColor:'#5D6D7E',
  borderRadius:15
}
});

export default App;
