import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text
} from 'react-native';

class App extends Component {
  state={
    number:0
  }
  decreasenumber=()=>{
    this.setState({
      number:++this.state.number
    })
  }
  increasenumber=()=>{
    this.setState({
      number:--this.state.number
    })
  }
  
  render(){
    return (
      <View style={styles.container}>
        <View >
          <Text style={styles.number}>{this.state.number}</Text>
        </View>
        <View style={styles.Buttons}> 
        <Button title='decrease' color='#000' onPress={this.decreasenumber}></Button>
        <Button title='increase' color='#000' onPress={this.increasenumber}></Button>
        </View>
        
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
},
Buttons:{
  flexDirection:'row'
},
number:{
  fontSize:50
}
});

export default App;
