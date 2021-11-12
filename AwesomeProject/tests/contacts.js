import React, { Component } from 'react';
import {
  StyleSheet,
  SafeAreaView
} from 'react-native';
import FlatListEx from './src/components/flatListExample';

class App extends Component {
  
  render(){
    return (
        <SafeAreaView style={styles.container}>
          <FlatListEx/>
        </SafeAreaView>        
);
  }
  
};

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#3498DB",
    flex:1,
    flexDirection:"row",
    alignItems:'center',
    justifyContent:"center"
}
});

export default App;
