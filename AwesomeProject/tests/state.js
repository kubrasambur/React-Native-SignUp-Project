import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text
} from 'react-native';

class App extends Component {
  state={
    name:'Kubra'
  }
  onPressDetail=()=>{
    alert('detail')
  }
  onPressChangeName=()=>{
    this.setState({
      name:'berkay'
    })
  }
  render(){
    return (
      <View style={styles.container}>
        <Button title='change the name' color='#000' onPress={this.onPressChangeName}></Button>
        <View>
          <Text style={styles.name}>{this.state.name}</Text>
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
name:{
  fontSize:30
}
});

export default App;
