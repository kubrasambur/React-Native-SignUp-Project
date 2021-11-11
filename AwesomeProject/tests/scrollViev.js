import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions
} from 'react-native';
//Dimentions ile ekranın genişlik ve yükseklik gibi özelliklerini alırız. biz burada genişliğini aldık.
//scrollViev yatayda da kullanılılabilir.
//paging  i enable edersek tek kaydırma ile bir sonraki sayfada durur.
const {width} = Dimensions.get('window')

class App extends Component {
  
  render(){
    return (
        <View style={styles.container}>
          <ScrollView horizontal={true} pagingEnabled={true}>
            <Text style={styles.title}>1</Text>  
            <Text style={styles.title}>2</Text>  
            <Text style={styles.title}>3</Text>  
            <Text style={styles.title}>4</Text>  
            <Text style={styles.title}>5</Text>  
            <Text style={styles.title}>6</Text>  
            <Text style={styles.title}>7</Text>  
            <Text style={styles.title}>8</Text>  
            <Text style={styles.title}>9</Text>  
            <Text style={styles.title}>10</Text>  
          </ScrollView>       
        </View>        
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
},
title:{
  backgroundColor:'#5D6D7E',
  marginVertical:30,
  textAlign:'center',
  paddingVertical:20,
  fontSize:30,
  width,
  borderColor:'black',
  borderWidth:2
}
});

export default App;
