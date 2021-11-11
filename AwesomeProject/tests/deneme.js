import React, { Component } from 'react';
import {
  StyleSheet,
  useColorScheme,
  View,
  Text
} from 'react-native';

class App extends Component{
  
  render(){
    return (
      <View
        style={styles.container}>
        
        <View style={styles.slideOne}>
          <Text>Merhaba</Text>
        </View>
         
        <View style={styles.slideTwo}>
          <View style={[styles.box, styles.box1]}></View>
          <View style={[styles.box, styles.box2]}></View>
          <View style={[styles.box, styles.box3]}></View>
        </View>

      </View>
);
  }
  
};
//eğer flex-direction 'row' verilirse birincil eksen yatay olur.
//eğer flex-direction 'column' verilirse birincil eksen dikey olur.

/*
justifyContent : Birincil eksende elemanların nasıl konumlanacağını belirler

alignItems : ikincil eksende elemanların nasıl konumlanacağını belirler.
-default u strect 
*/

//Bütün pixeldeki telefonlarda düzgün görünmesi için pixel olarak  yazmak yerine flex kullanmak daha mantıklı

const styles = StyleSheet.create({
  container:{
    backgroundColor:"yellow",
    flex:1
},
  slideOne:{
    backgroundColor:'#607B8B',
    flex:2,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  },
  slideTwo:{
    backgroundColor:'#FF5722',
    flex:2,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'stretch'
  },
  box:{
    width:100,
    height:100
  },
  box1:{
    backgroundColor:'#795548'
  },
  box2:{
    backgroundColor:'#9E9E9E'
  },
  box3:{
    backgroundColor:'#3F51B5'
  }
});

export default App;
